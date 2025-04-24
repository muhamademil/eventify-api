import { prisma } from "../prisma/client";
import { UserInput } from "../models/interface";
import { generateReferralCodeFromName } from "../utils/refferal.utils";
import { CoupondService } from "../coupond/coupond.service";
import bcrypt from "bcrypt";

export class UserService {
  public async create(data: UserInput) {
    // Membuat Referral Code yang Unik
    let referralCode = generateReferralCodeFromName(data.name);
    let isUnique = false;

    // Cek apakah referral code sudah ada di database
    while (!isUnique) {
      const existing = await prisma.user.findUnique({
        where: { referralCode },
      });

      if (!existing)
        isUnique = true; // Jika tidak ada, maka referral code valid dan unik
      else referralCode = generateReferralCodeFromName(data.name); // Jika ada, generate kode baru
    }

    // Memeriksa dan Menggunakan Referral Code
    let referredBy: string | null = null;
    let referrerUserId: number | null = null;

    // Cek apakah pengguna baru menggunakan referral code
    if (data.referredBy) {
      // Cari pengguna yang merujuk berdasarkan referral code
      const refUser = await prisma.user.findUnique({
        where: { referralCode: data.referredBy },
      });

      if (!refUser) {
        throw new Error("Referral code tidak valid"); // Jika tidak ditemukan, lempar error
      }

      // Menyimpan informasi mengenai pengguna yang merujuk
      referredBy = refUser.referralCode!;
      referrerUserId = refUser.usersId;
    }

    // Membuat Pengguna Baru
    // Hash password sebelum disimpan ke database
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Buat pengguna baru di database
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword, // Password yang sudah di-hash
        role: data.role || "USER", // Default role "USER"
        referralCode, // Referral code yang unik
        referredBy, // Referral code yang digunakan, jika ada
      },
    });

    // Memberikan Poin kepada Referrer
    if (referrerUserId) {
      // Jika pengguna baru menggunakan referral code, berikan 10.000 poin kepada referrer
      await prisma.point.create({
        data: {
          pointsAmmount: 10000,
          userId: referrerUserId, // Pemberian poin untuk referrer
          expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 3)), // Poin berlaku selama 3 bulan
        },
      });
    }

    // Memberikan Kupon Diskon kepada Pengguna Baru
    if (data.referredBy) {
      // Jika pengguna baru menggunakan referral code, buatkan kupon diskon 10% untuk mereka
      const coupondService = new CoupondService();
      await coupondService.create(newUser.usersId, 10); // 10% diskon default
    }

    // Kembalikan pengguna baru yang sudah dibuat
    return newUser;
  }

  public async update(id: number, data: Partial<UserInput>) {
    return prisma.user.update({
      where: { usersId: id },
      data: {
        ...data,
      },
    });
  }
}
