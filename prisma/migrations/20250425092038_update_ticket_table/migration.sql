/*
  Warnings:

  - Added the required column `Title` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "Title" TEXT NOT NULL;
