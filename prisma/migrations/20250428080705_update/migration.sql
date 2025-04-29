/*
  Warnings:

  - Changed the type of `ticketType` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('PAID', 'UNPAID');

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "ticketType",
ADD COLUMN     "ticketType" "TicketType" NOT NULL;
