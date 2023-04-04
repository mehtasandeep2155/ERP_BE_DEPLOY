/*
  Warnings:

  - The `changeInStock` column on the `StockActions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "StockActions" DROP COLUMN "changeInStock",
ADD COLUMN     "changeInStock" JSONB[];
