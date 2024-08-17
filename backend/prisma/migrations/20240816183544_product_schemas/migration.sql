-- CreateTable
CREATE TABLE "ProductSize" (
    "id" TEXT NOT NULL,
    "P" TEXT NOT NULL,
    "M" TEXT NOT NULL,
    "G" TEXT NOT NULL,
    "GG" TEXT NOT NULL,

    CONSTRAINT "ProductSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);
