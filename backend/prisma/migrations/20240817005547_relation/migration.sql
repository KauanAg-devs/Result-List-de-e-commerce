/*
  Warnings:

  - You are about to drop the column `detailsId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productid` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_productid_fkey";

-- DropIndex
DROP INDEX "Product_detailsId_key";

-- DropIndex
DROP INDEX "ProductDetails_productid_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "detailsId";

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "productid";

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
