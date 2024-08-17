import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get(':id/related')
  async getRelatedProducts(
    @Param('id') id: string,
    @Query('quantity') quantity: number = 4,
  ) {
    return this.productService.getRelatedProducts(id, quantity);
  }

  @Post()
  async createProduct(@Body() productDto: ProductDto) {
    return await this.productService.createProduct(productDto);
  }
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
  @Delete('deleteAll')
  async deleteAllProducts() {
    await this.productService.deleteAllProducts();
  }
}
