/*
  Warnings:

  - You are about to drop the column `changeInStock` on the `StockActions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StockActions" DROP COLUMN "changeInStock",
ADD COLUMN     "DecreaseInStock" JSONB,
ADD COLUMN     "IncreaseInStock" JSONB;
