-- CreateTable
CREATE TABLE "Catalog" (
    "id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deals" (
    "id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "Deals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Catalog_product_code_key" ON "Catalog"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "Deals_product_code_key" ON "Deals"("product_code");
