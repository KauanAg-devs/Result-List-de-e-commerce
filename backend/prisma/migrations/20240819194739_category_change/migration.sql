/*
  Warnings:

  - You are about to drop the column `categoryName` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_categoryName_fkey";

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "categoryName",
ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
