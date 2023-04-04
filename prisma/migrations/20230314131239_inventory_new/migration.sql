-- CreateEnum
CREATE TYPE "InventoryType" AS ENUM ('raw', 'garbage', 'finished');

-- CreateTable
CREATE TABLE "Inventory_view" (
    "id" TEXT NOT NULL,
    "type" "InventoryType" NOT NULL,
    "variantId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "coatingId" TEXT,
    "dimensionId" TEXT NOT NULL,
    "weight" DOUBLE PRECISION,
    "count" INTEGER,

    CONSTRAINT "Inventory_view_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "inventory_viewId" TEXT NOT NULL,
    "rawStockId" TEXT NOT NULL,
    "garbageStockId" TEXT NOT NULL,
    "finishedStockId" TEXT NOT NULL,
    "raw_adjusted_after_po" TEXT NOT NULL,
    "garbage_adjusted_after_po" TEXT NOT NULL,
    "finished_adjusted_after_po" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER,
    "weight" DOUBLE PRECISION,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Product_variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_coatingId_fkey" FOREIGN KEY ("coatingId") REFERENCES "Product_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory_view" ADD CONSTRAINT "Inventory_view_dimensionId_fkey" FOREIGN KEY ("dimensionId") REFERENCES "Product_dimension"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_inventory_viewId_fkey" FOREIGN KEY ("inventory_viewId") REFERENCES "Inventory_view"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_rawStockId_fkey" FOREIGN KEY ("rawStockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_garbageStockId_fkey" FOREIGN KEY ("garbageStockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_finishedStockId_fkey" FOREIGN KEY ("finishedStockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
