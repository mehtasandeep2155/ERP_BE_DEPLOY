-- CreateEnum
CREATE TYPE "POStatus" AS ENUM ('initiated', 'processed', 'finished');

-- AlterTable
ALTER TABLE "Purchase_order" ADD COLUMN     "status" "POStatus" NOT NULL DEFAULT 'initiated';
