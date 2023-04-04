/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `name` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "name",
ADD COLUMN     "name" "InventoryType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stock_name_key" ON "Stock"("name");
