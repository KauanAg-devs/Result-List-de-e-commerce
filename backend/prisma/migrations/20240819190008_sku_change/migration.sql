/*
  Warnings:

  - You are about to drop the column `customerCount` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `fiveStarCount` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "customerCount",
DROP COLUMN "fiveStarCount";
