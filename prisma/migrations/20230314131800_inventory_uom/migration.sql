/*
  Warnings:

  - Added the required column `weightUomId` to the `Inventory_view` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory_view" ADD COLUMN     "weightUomId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_weightUomId_fkey" FOREIGN KEY ("weightUomId") REFERENCES "Uom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
