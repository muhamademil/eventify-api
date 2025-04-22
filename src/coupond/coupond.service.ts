import { prisma } from "../prisma/client";
import { generateCoupondCode } from "../utils/coupond.utils";

export class CoupondService {
  public async create(userId: number, discount: number = 10) {
    const code = generateCoupondCode();

    const coupond = await prisma.coupond.create({
      data: {
        code,
        discount,
        userId,
        expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 3)), // Menambahkan 3 bulan ke tanggal sekarang
      },
    });

    return coupond;
  }
}
