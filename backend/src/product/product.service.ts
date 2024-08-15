import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: {
    name: string;
    title: string;
    price: string;
    image: string | null;
    discount?: string;
  }): Promise<Product> {
    const { name, title, price, image, discount } = data;
    if (!name || !title || !price) {
      throw new Error('Required fields are missing');
    }

    return this.prisma.product.create({
      data: {
        name,
        title,
        price,
        image,
        discount,
      },
    });
  }

  async deleteProduct(where: { id: string }): Promise<Product> {
    return this.prisma.product.delete({
      where,
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
}
