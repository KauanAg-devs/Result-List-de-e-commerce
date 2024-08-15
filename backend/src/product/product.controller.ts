import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import multerConfig from 'src/multer.config';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async createProduct(
    @Body()
    productData: {
      name: string;
      title: string;
      price: string;
      discount?: string;
    },
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { name, title, discount, price } = productData;
    console.log('Uploaded File:', file);

    const imagePath = file ? `/uploads/${file.filename}` : null;

    if (!name || !title || !price) {
      throw new Error('Required fields are missing');
    }

    return this.productService.createProduct({
      name,
      title,
      price,
      image: imagePath,
      discount,
    });
  }

  @Delete()
  async deleteProduct(@Body() product: { id: string }) {
    const { id } = product;
    return this.productService.deleteProduct({ id });
  }

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }
}
