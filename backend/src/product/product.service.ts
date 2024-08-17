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
        data: {
          image,
          name,
          title,
          price,
          discount: discount || undefined,
          details: {
            create: {
              sku,
              description: description || '',
              category: { connect: { id: category.id } },
              tags: tags
                ? { connect: tags.map((tag) => ({ id: tag.id })) }
                : undefined,
              customerCount: 0,
              fiveStarCount: 0,
            },
          },
        },
        include: {
          details: {
            include: {
              tags: true,
            },
          },
        },
      });

      await this.prisma.productDetails.update({
        where: { id: product.details.id },
        data: { productId: product.id },
      });

      return this.prisma.product.findUnique({
        where: { id: product.id },
        include: {
          details: {
            include: {
              tags: true,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(
        `Error creating product: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async getProducts(page: number = 1, limit: number = 16, filters?: any) {
    const products = this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: filters,
      include: {
        details: {
          include: {
            category: true,
            tags: true,
          },
        },
      },
    });
    const totalProducts = await this.prisma.product.count({ where: filters });
    return { products, totalProducts };
  }

  async orderProducts(
    parameter: 'name' | 'discount' | 'price',
    order: 'asc' | 'desc',
  ) {
    return this.prisma.product.findMany({
      orderBy: {
        [parameter]: order,
      },
      include: {
        details: {
          include: {
            category: true,
            tags: true,
          },
        },
      },
    });
  }

  async getRelatedProducts(productId: string, quantity: number = 4) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        details: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!product || !product.details?.category) {
      return [];
    }

    return this.prisma.product.findMany({
      take: quantity,
      where: {
        details: {
          category: {
            id: product.details.category.id,
          },
        },
        id: {
          not: productId,
        },
      },
      include: {
        details: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  async deleteAllProducts() {
    return Promise.all([
      this.prisma.productDetails.deleteMany(),
      this.prisma.product.deleteMany(),
    ]);
  }
}
