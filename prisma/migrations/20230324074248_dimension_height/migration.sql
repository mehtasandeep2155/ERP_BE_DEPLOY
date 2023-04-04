/*
  Warnings:

  - A unique constraint covering the columns `[height]` on the table `Product_dimension` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_dimension_height_key" ON "Product_dimension"("height");
