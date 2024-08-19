-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "customerCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "fiveStarCount" INTEGER NOT NULL DEFAULT 0;
