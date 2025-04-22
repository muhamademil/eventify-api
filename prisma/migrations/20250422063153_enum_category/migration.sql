/*
  Warnings:

  - Changed the type of `categoryEvents` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MUSIC', 'SPORTS', 'FOOD', 'BEAUTY');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "categoryEvents",
ADD COLUMN     "categoryEvents" "Category" NOT NULL;
