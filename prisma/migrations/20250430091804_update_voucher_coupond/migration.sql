/*
  Warnings:

  - You are about to drop the column `userId` on the `Coupond` table. All the data in the column will be lost.
  - The `isUsed` column on the `Coupond` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `eventId` on the `Voucher` table. All the data in the column will be lost.
  - Added the required column `discount` to the `Voucher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Voucher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Coupond" DROP CONSTRAINT "Coupond_userId_fkey";

-- DropForeignKey
ALTER TABLE "Voucher" DROP CONSTRAINT "Voucher_eventId_fkey";

-- AlterTable
ALTER TABLE "Coupond" DROP COLUMN "userId",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "eventId" INTEGER,
ADD COLUMN     "quantity" INTEGER,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "title" TEXT,
ALTER COLUMN "expiredAt" DROP NOT NULL,
DROP COLUMN "isUsed",
ADD COLUMN     "isUsed" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Voucher" DROP COLUMN "eventId",
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Coupond" ADD CONSTRAINT "Coupond_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;
