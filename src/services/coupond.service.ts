import { prisma } from "../prisma/client";
import { generateCoupondCode } from "../utils/coupond.utils";
import { CoupondInput } from "../models/interface";

export class CoupondService {
  public async create(data: Omit<CoupondInput, "code">) {
    let coupondCode: string;

    while (true) {
      coupondCode = generateCoupondCode();
      const existing = await prisma.coupond.findUnique({
        where: { code: coupondCode },
      });

      if (!existing) break;
    }

    return prisma.coupond.create({  
      data: {
        ...data,
        code: coupondCode,
      },
    });
  }

  //   Validasi kupon yang belum digunakan
  public async validateCoupon(code: string) {
    return prisma.coupond.findFirst({
      where: {
        code,
        isUsed: 0,
      },
    });
  }

  //   Tandai kupon sebagai digunakan
  public async markCouponAsUsed(coupondId: number) {
    return prisma.coupond.update({
      where: { coupondId },
      data: { isUsed: 0 },
    });
  }
}
