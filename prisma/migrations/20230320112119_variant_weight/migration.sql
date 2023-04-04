/*
  Warnings:

  - Added the required column `weightUomId` to the `Product_variant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product_variant" ADD COLUMN     "weightUomId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product_variant" ADD CONSTRAINT "Product_variant_weightUomId_fkey" FOREIGN KEY ("weightUomId") REFERENCES "Uom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
