import { prisma } from "../prisma/client";
import { UserInput } from "../models/interface";
import { generateReferralCodeFromName } from "../utils/refferal.utils";
import { CoupondService } from "./coupond.service";
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

      if (!existing) isUnique = true;
      else referralCode = generateReferralCodeFromName(data.name);
    }

    // Memeriksa dan Menggunakan Referral Code
    let referredBy: string | null = null;
    let referrerUserId: number | null = null;

    if (data.referredBy) {
      const refUser = await prisma.user.findUnique({
        where: { referralCode: data.referredBy },
      });

      if (!refUser) {
        throw new Error("Referral code tidak valid");
      }

      referredBy = refUser.referralCode!;
      referrerUserId = refUser.usersId;
    }

    // Hash password sebelum disimpan ke database
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Buat pengguna baru di database
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role || "USER",
        referralCode,
        referredBy,
      },
    });

    // Memberikan Poin kepada Referrer jika ada
    if (referrerUserId) {
      await prisma.point.create({
        data: {
          pointsAmmount: 10000,
          userId: referrerUserId,
          expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 3)),
        },
      });
    }

    // Memberikan Kupon Diskon kepada Pengguna Baru
    if (data.referredBy) {
      const coupondService = new CoupondService();
      await coupondService.create({
        usersId: newUser.usersId, // Pastikan properti ini sesuai dengan CoupondInput
        discount: 10, // Diskon yang ingin diterapkan
      });
    }

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
