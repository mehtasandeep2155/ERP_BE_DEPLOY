/*
  Warnings:

  - You are about to drop the column `inventory_viewId` on the `Inventory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_inventory_viewId_fkey";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "inventory_viewId";

-- CreateTable
CREATE TABLE "_InventoryToInventory_view" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InventoryToInventory_view_AB_unique" ON "_InventoryToInventory_view"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoryToInventory_view_B_index" ON "_InventoryToInventory_view"("B");

-- AddForeignKey
ALTER TABLE "_InventoryToInventory_view" ADD CONSTRAINT "_InventoryToInventory_view_A_fkey" FOREIGN KEY ("A") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoryToInventory_view" ADD CONSTRAINT "_InventoryToInventory_view_B_fkey" FOREIGN KEY ("B") REFERENCES "Inventory_view"("id") ON DELETE CASCADE ON UPDATE CASCADE;
