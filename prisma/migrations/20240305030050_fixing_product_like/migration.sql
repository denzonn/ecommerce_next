-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "like" DROP NOT NULL,
ALTER COLUMN "like" SET DEFAULT 0;
