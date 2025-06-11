/*
  Warnings:

  - You are about to drop the column `isConfirmed` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `tableNumber` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `linkQr` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "isConfirmed",
DROP COLUMN "tableNumber",
ADD COLUMN     "linkQr" TEXT NOT NULL;
