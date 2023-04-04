-- DropForeignKey
ALTER TABLE "Inventory_view" DROP CONSTRAINT "Inventory_view_weightUomId_fkey";

-- AlterTable
ALTER TABLE "Inventory_view" ALTER COLUMN "weightUomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_weightUomId_fkey" FOREIGN KEY ("weightUomId") REFERENCES "Uom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
