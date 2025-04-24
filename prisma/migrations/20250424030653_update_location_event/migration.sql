/*
  Warnings:

  - Changed the type of `locationEvents` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('JAKARTA', 'BANDUNG', 'SURABAYA', 'BALI');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "locationEvents",
ADD COLUMN     "locationEvents" "Location" NOT NULL;
