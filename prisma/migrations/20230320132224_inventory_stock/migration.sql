-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_garbageActionId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_rawActionId_fkey";

-- AlterTable
ALTER TABLE "Inventory" ALTER COLUMN "garbageActionId" DROP NOT NULL,
ALTER COLUMN "rawActionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_rawActionId_fkey" FOREIGN KEY ("rawActionId") REFERENCES "StockActions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_garbageActionId_fkey" FOREIGN KEY ("garbageActionId") REFERENCES "StockActions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
