import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(
    productDto: ProductDto,
    category: { id: string },
    sku: string,
    tags?: { name: string }[] | undefined,
  ) {
    const { name, image, title, price, discount, description } = productDto;

    try {
      const product = await this.prisma.product.create({
        data: { sku, name, image, title, price, discount },
      });

      await this.prisma.productDetails.create({
        data: {
          description,
          sku: product.sku,
          categoryId: category.id,
          tags: { connect: tags },
        },
      });

      return product;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        `Error creating product: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getProducts(
    page: number = 1,
    limit: number = 16,
    sortBy: 'name' | 'discount' | 'price' = 'price',
    order: 'asc' | 'desc' = 'asc',
    categoryId?: string,
  ) {
    const totalProductsInCategory = await this.prisma.productDetails.count({
      where: categoryId ? { categoryId } : undefined,
    });

    const productDetails = await this.prisma.productDetails.findMany({
      where: categoryId ? { categoryId } : undefined,
      take: limit,
      skip: (page - 1) * limit,
    });

    const skus = productDetails.map((detail) => detail.sku);

    const products = await this.prisma.product.findMany({
      where: { sku: { in: skus } },
      orderBy: {
        [sortBy]: order,
      },
    });

    if (products.length === 0 && page > 1) {
      return this.getProducts(1, limit, sortBy, order, categoryId);
    }

    return {
      products,
      totalProducts: totalProductsInCategory,
    };
  }

  getProductDetails(sku: string) {
    return this.prisma.productDetails.findUnique({
      where: { sku: sku },
      include: { tags: true, category: true },
    });
  }

  async getProductsByCategory(categoryId: string) {
    const productDetails = await this.prisma.productDetails.findMany({
      where: { categoryId },
      take: 4,
    });

    if (productDetails.length === 0) return [];
    const skus = productDetails.map((product) => product.sku);

    const products = await this.prisma.product.findMany({
      where: { sku: { in: skus } },
    });

    return products;
  }

  async getProductsByTags(tags: string[], skip: number = 0) {
    const productsDetails = await this.prisma.productDetails.findMany({
      where: {
        tags: { some: { name: { in: tags } } },
      },
      include: { product: true },
      take: 4,
      skip,
    });

    return productsDetails.map((product) => product.product);
  }

  async deleteAllProducts() {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.productDetails.deleteMany();
      await prisma.product.deleteMany();
    });
  }
}
