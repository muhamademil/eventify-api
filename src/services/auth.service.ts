import { prisma } from "../prisma/client";
import { JwtUtils } from "../lib/token.config";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";
import { sendResetPassword } from "../lib/email.service";

export class AuthService {
  public async login(email: string, password: string, requiredRole?: string) {
    // pengecekan apakah user sudah terdaftar atau belum
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    // pengecekan pertama : kalau gagal ditolak
    if (!user) {
      throw new Error("Invalid credentials"); // Lempar error agar status 400/500
    }

    // Cek kecocokan password tanpa men-hash password baru
    const isValid = await bcrypt.compare(password, user.password);

    // pengecekan kedua : kalau gagal ditolak
    if (!isValid) {
      throw new Error("Invalid credentials"); // Tetap lempar error
    }

    // Pembatasan Role jika `requiredRole` diisi
    if (requiredRole && user.role !== requiredRole) {
      return `Access denied: Required role is ${requiredRole}`; // Role tidak sesuai
    }

    // Tukar dengan token
    const token = JwtUtils.generateToken({
      usersId: user.usersId,
      name: user.name,
      role: user.role ?? "USER",
    });

    return {
      id: user.usersId,
      name: user.name,
      role: user.role,
      access_token: token,
    };
  }

  public async forgotPassword(email: string) {
    // 1. Cek apakah user ada
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User dengan email tersebut tidak ditemukan");

    // 2. Generate token acak (hex string sepanjang 32 karakter)
    const resetToken = crypto.randomBytes(32).toString("hex");

    // 3. Simpan token + waktu expired ke DB (buat field di model user)
    await prisma.user.update({
      where: { email },
      data: {
        resetToken: resetToken,
        resetTokenExpire: new Date(Date.now() + 60 * 60 * 1000), // token berlaku 1 jam
      },
    });

    // 4. Kirim token ke email
    await sendResetPassword(user.email, resetToken);

    return { message: "Token reset password berhasil dikirim ke email" };
  }

  public async resetPassword(token: string, newPassword: string) {
    // 1. Cari user berdasarkan token dan cek apakah masih berlaku
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpire: {
          gt: new Date(), // masih valid jika waktu expire > sekarang
        },
      },
    });

    if (!user) {
      throw new Error("Token tidak valid atau telah kedaluwarsa");
    }

    // 2. Hash password baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 3. Simpan password baru, hapus token & expired date
    await prisma.user.update({
      where: { usersId: user.usersId },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpire: null,
      },
    });

    return { message: "Password berhasil direset" };
  }
}
