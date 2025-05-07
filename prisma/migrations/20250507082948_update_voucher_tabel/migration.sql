/*
  Warnings:

  - You are about to drop the column `voucherAmmount` on the `Voucher` table. All the data in the column will be lost.
  - Added the required column `voucherAmount` to the `Voucher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voucher" DROP COLUMN "voucherAmmount",
ADD COLUMN     "voucherAmount" INTEGER NOT NULL;
