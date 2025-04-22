/*
  Warnings:

  - You are about to drop the column `couponAmmount` on the `Coupond` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Coupond` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Coupond` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Coupond` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupond" DROP COLUMN "couponAmmount",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "isUsed" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Coupond_code_key" ON "Coupond"("code");
