import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { CategoryService } from 'src/category/category.service';
import { SkuService } from 'src/sku/sku.service';
import { TagsService } from 'src/tags/tags.service';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private skuService: SkuService,
    private tagsService: TagsService,
  ) {}

  @Post()
  async createProduct(@Body() productDto: ProductDto) {
    const { name, color, size, categoryName, tags } = productDto;
    const category =
      await this.categoryService.findOrCreateCategory(categoryName);

    const resolvedTags = tags
      ? await this.tagsService.findOrCreateTags(tags)
      : [];

    const sku = this.skuService.generateSku(name, color, size);

    return this.productService.createProduct(
      productDto,
      category,
      sku,
      resolvedTags,
    );
  }

  @Get('details/:sku')
  getProductDetails(@Param() sku: { sku: string }) {
    return this.productService.getProductDetails(sku.sku);
  }

  @Get('getProductsByCategory/:categoryId')
  async getProductsByCategory(@Param() categoryId: { categoryId: string }) {
    const products = await this.productService.getProductsByCategory(
      categoryId.categoryId,
    );
    return products;
  }

  @Get()
  async getProducts(
    @Query('pages', ParseIntPipe) pages?: number,
    @Query('limit', ParseIntPipe) limit?: number,
    @Query('orderBy') orderBy?: 'price' | 'discount' | 'name',
    @Query('order') order?: 'asc' | 'desc',
  ) {
    const { products, totalProducts } = await this.productService.getProducts(
      pages,
      limit,
      orderBy,
      order,
    );

    return { products, totalProducts };
  }

  @Delete('deleteAll')
  async deleteAllProducts() {
    await this.productService.deleteAllProducts();
  }
}
