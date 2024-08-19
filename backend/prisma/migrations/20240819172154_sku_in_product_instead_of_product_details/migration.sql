/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductDetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sku` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_productId_fkey";

-- DropIndex
DROP INDEX "ProductDetails_productId_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sku" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "productId";

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sku_fkey" FOREIGN KEY ("sku") REFERENCES "ProductDetails"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
