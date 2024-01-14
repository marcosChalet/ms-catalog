/*
  Warnings:

  - You are about to drop the `Catalog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Catalog";

-- DropTable
DROP TABLE "Deals";

-- CreateTable
CREATE TABLE "catalog" (
    "id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deals" (
    "id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "catalog_product_code_key" ON "catalog"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "deals_product_code_key" ON "deals"("product_code");
