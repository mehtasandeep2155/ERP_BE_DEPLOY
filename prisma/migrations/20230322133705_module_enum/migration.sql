/*
  Warnings:

  - The values [Module,Color,Uom,Product_type,Product_dimension,Product_variant,Rate,Product,Purchase_order,Sub_company] on the enum `ModuleName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ModuleName_new" AS ENUM ('User', 'Company', 'Products', 'PurchaseOrders', 'Inventory');
ALTER TABLE "Module" ALTER COLUMN "name" TYPE "ModuleName_new" USING ("name"::text::"ModuleName_new");
ALTER TYPE "ModuleName" RENAME TO "ModuleName_old";
ALTER TYPE "ModuleName_new" RENAME TO "ModuleName";
DROP TYPE "ModuleName_old";
COMMIT;
