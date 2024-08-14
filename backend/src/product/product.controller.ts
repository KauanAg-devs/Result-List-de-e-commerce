import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async createProduct(@Body() product: Product) {
    const { name, description, discount, image, price } = product;

    if (!discount) {
      return this.productService.createProduct({
        name,
        description,
        price,
        image,
      });
    }

    return this.productService.createProduct({
      name,
      description,
      price,
      image,
      discount,
    });
  }
  @Delete()
  async deleteProduct(@Body() product: Product) {
    const { id } = product;
    return this.productService.deleteProduct({ id });
  }
  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }
}
