/*
  Warnings:

  - You are about to drop the column `sku` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_ProductTags` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[detailsId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productid]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sku` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_productId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductTags" DROP CONSTRAINT "_ProductTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductTags" DROP CONSTRAINT "_ProductTags_B_fkey";

-- DropIndex
DROP INDEX "Product_sku_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sku",
ADD COLUMN     "detailsId" TEXT;

-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "productid" TEXT,
ADD COLUMN     "sku" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProductTags";

-- CreateTable
CREATE TABLE "_ProductDetailsTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductDetailsTags_AB_unique" ON "_ProductDetailsTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductDetailsTags_B_index" ON "_ProductDetailsTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Product_detailsId_key" ON "Product"("detailsId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_sku_key" ON "ProductDetails"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productid_key" ON "ProductDetails"("productid");

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductDetailsTags" ADD CONSTRAINT "_ProductDetailsTags_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductDetailsTags" ADD CONSTRAINT "_ProductDetailsTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
