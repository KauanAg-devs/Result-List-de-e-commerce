import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SkuService } from 'src/sku/sku.service';
import { ProductDto } from './product.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly skuService: SkuService,
    private readonly categoryService: CategoryService,
  ) {}

  async createProduct(productDto: ProductDto) {
    try {
      const {
        name,
        image,
        title,
        price,
        discount,
        color,
        size,
        categoryName,
        tagIds,
        description,
      } = productDto;

      let category = await this.categoryService.findOne(categoryName);
      if (!category) {
        category = await this.categoryService.create({ name: categoryName });
      }

      const sku = this.skuService.generateSku(name, color, size);

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
              category: category.id
                ? { connect: { id: category.id } }
                : undefined,
              tags: tagIds
                ? { connect: tagIds.map((id) => ({ id })) }
                : undefined,
              customerCount: 0,
              fiveStarCount: 0,
            },
          },
        },
        include: {
          details: true,
        },
      });

      await this.prisma.productDetails.update({
        where: { id: product.details.id },
        data: { productId: product.id },
      });

      const updatedProduct = await this.prisma.product.findUnique({
        where: { id: product.id },
        include: {
          details: true,
        },
      });

      return updatedProduct;
    } catch (error) {
      console.error(error);
      throw new Error(`Error creating product: ${error.message}`);
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
