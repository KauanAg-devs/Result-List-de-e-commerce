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
    tags?: { id: string }[],
  ) {
    const { name, image, title, price, discount, description } = productDto;

    try {
      const product = await this.prisma.product.create({
        data: { sku, name, image, title, price, discount },
      });

      await this.prisma.productDetails.create({
        data: {
          description,
          tags: { connect: tags },
          sku: product.sku,
          categoryId: category.id,
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
  ) {
    const totalProducts = await this.prisma.product.count();

    const products = await this.prisma.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        [sortBy]: order,
      },
    });

    if (products.length === 0 && page > 1) {
      return this.getProducts(1, limit, sortBy, order);
    }
    return {
      products,
      totalProducts,
    };
  }

  getProductDetails(sku: string) {
    return this.prisma.productDetails.findUnique({
      where: { sku: sku },
    });
  }

  getProductsByCategory(categoryId: string) {
    return this.prisma.productDetails.findMany({
      where: { categoryId },
    });
  }

  getProductsByTags(tag: string) {
    return this.prisma.productDetails.findMany({
      where: { tags: { some: { name: tag } } },
    });
  }

  async deleteAllProducts() {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.productDetails.deleteMany();
      await prisma.product.deleteMany();
    });
  }
}
