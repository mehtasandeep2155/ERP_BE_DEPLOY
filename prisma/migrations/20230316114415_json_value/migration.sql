/*
  Warnings:

  - Changed the type of `changeInStock` on the `StockActions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "StockActions" DROP COLUMN "changeInStock",
ADD COLUMN     "changeInStock" JSONB NOT NULL;
