-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'PROMOTOR');

-- CreateTable
CREATE TABLE "Users" (
    "usersId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,
    "role" "Role",
    "referralCode" TEXT,
    "referredBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("usersId")
);

-- CreateTable
CREATE TABLE "Events" (
    "eventId" SERIAL NOT NULL,
    "promotorId" INTEGER NOT NULL,
    "nameEvents" TEXT NOT NULL,
    "categoryEvents" TEXT NOT NULL,
    "priceEvents" TEXT NOT NULL,
    "descriptionEvents" TEXT NOT NULL,
    "locationEvents" TEXT NOT NULL,
    "startDateEvents" TIMESTAMP(3) NOT NULL,
    "endDateEvents" TIMESTAMP(3) NOT NULL,
    "availableSeats" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "ticketId" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "ticketType" TEXT NOT NULL,
    "ticketPrice" TEXT NOT NULL,
    "quantityAvailable" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("ticketId")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "transactionId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "ticketQuantity" INTEGER NOT NULL,
    "totalPrice" TEXT NOT NULL,
    "pointUsed" INTEGER NOT NULL,
    "coupondId" INTEGER,
    "voucherId" INTEGER,
    "statusTransaction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("transactionId")
);

-- CreateTable
CREATE TABLE "Couponds" (
    "coupondId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "couponAmmount" INTEGER NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Couponds_pkey" PRIMARY KEY ("coupondId")
);

-- CreateTable
CREATE TABLE "Vouchers" (
    "voucherId" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "voucherAmmount" INTEGER NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vouchers_pkey" PRIMARY KEY ("voucherId")
);

-- CreateTable
CREATE TABLE "Referral" (
    "referralId" SERIAL NOT NULL,
    "referrerId" INTEGER NOT NULL,
    "referredUserId" INTEGER NOT NULL,
    "rewardCouponId" INTEGER NOT NULL,
    "rewardPoints" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("referralId")
);

-- CreateTable
CREATE TABLE "Points" (
    "pointId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "pointsAmmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("pointId")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "notificationId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("notificationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_referralCode_key" ON "Users"("referralCode");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_promotorId_fkey" FOREIGN KEY ("promotorId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Tickets"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_coupondId_fkey" FOREIGN KEY ("coupondId") REFERENCES "Couponds"("coupondId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Vouchers"("voucherId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Couponds" ADD CONSTRAINT "Couponds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vouchers" ADD CONSTRAINT "Vouchers_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Points" ADD CONSTRAINT "Points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("usersId") ON DELETE RESTRICT ON UPDATE CASCADE;
