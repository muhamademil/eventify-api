import { prisma } from "../prisma/client";
import { generateVoucherCode } from "../utils/voucher.utils";
import { VoucherInput } from "../models/interface";

export class VoucherService {
  public async create(data: Omit<VoucherInput, "code" | "isUsed">) {
    let code: string;

    while (true) {
      code = generateVoucherCode();
      const existing = await prisma.voucher.findUnique({
        where: { code },
      });
      if (!existing) break;
    }

    return prisma.voucher.create({
      data: {
        ...data,
        code,
        isUsed: 0,
      },
    });
  }

  public async validateVoucher(code: string) {
    return prisma.voucher.findFirst({
      where: {
        code,
        isUsed: 0,
        expiredAt: { gt: new Date() },
      },
    });
  }

  public async markAsUsed(voucherId: number) {
    return prisma.voucher.update({
      where: { voucherId },
      data: { isUsed: 1 },
    });
  }

  public async getByUser(userId: number) {
    return prisma.voucher.findMany({ where: { userId } });
  }
}
