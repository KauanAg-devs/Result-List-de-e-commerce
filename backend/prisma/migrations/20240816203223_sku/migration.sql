/*
  Warnings:

  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductColor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSize` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sku` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sku" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProductCategory";

-- DropTable
DROP TABLE "ProductColor";

-- DropTable
DROP TABLE "ProductSize";

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
