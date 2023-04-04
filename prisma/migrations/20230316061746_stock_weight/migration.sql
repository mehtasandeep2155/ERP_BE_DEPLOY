-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_weightUomId_fkey";

-- AlterTable
ALTER TABLE "Stock" ALTER COLUMN "weightUomId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_weightUomId_fkey" FOREIGN KEY ("weightUomId") REFERENCES "Uom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
