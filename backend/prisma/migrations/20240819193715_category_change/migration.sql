/*
  Warnings:

  - You are about to drop the column `categoryId` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_categoryId_fkey";

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT;

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE SET NULL ON UPDATE CASCADE;
