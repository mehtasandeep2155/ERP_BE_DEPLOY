/*
  Warnings:

  - You are about to drop the column `finished_adjusted_after_po` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `garbage_adjusted_after_po` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `raw_adjusted_after_po` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Stock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `finishedActionId` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garbageActionId` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rawActionId` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Stock_name_key";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "finished_adjusted_after_po",
DROP COLUMN "garbage_adjusted_after_po",
DROP COLUMN "raw_adjusted_after_po",
ADD COLUMN     "finishedActionId" TEXT NOT NULL,
ADD COLUMN     "garbageActionId" TEXT NOT NULL,
ADD COLUMN     "opening_finished" JSONB,
ADD COLUMN     "opening_garbage" JSONB,
ADD COLUMN     "opening_raw" JSONB,
ADD COLUMN     "rawActionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "name",
ADD COLUMN     "type" "InventoryType" NOT NULL DEFAULT 'raw';

-- CreateTable
CREATE TABLE "StockActions" (
    "id" TEXT NOT NULL,
    "type" "InventoryType" NOT NULL,
    "changeInStock" TEXT NOT NULL,

    CONSTRAINT "StockActions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_type_key" ON "Stock"("type");

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_rawActionId_fkey" FOREIGN KEY ("rawActionId") REFERENCES "StockActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_garbageActionId_fkey" FOREIGN KEY ("garbageActionId") REFERENCES "StockActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_finishedActionId_fkey" FOREIGN KEY ("finishedActionId") REFERENCES "StockActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
