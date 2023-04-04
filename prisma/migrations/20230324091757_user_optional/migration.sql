-- AlterTable
ALTER TABLE "User" ALTER COLUMN "verified" DROP NOT NULL,
ALTER COLUMN "verified" SET DEFAULT false;
