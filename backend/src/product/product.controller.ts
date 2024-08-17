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

  @Get(':id/related')
  async getRelatedProducts(
    @Param('id') id: string,
    @Query('quantity') quantity: number = 4,
  ) {
    return this.productService.getRelatedProducts(id, quantity);
  }

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

  @Get()
  getProducts(
    @Query() pages: number,
    @Query() limit: number,
    @Query() filter: any,
  ) {
    return this.productService.getProducts(pages, limit, filter);
  }

  @Delete('deleteAll')
  async deleteAllProducts() {
    await this.productService.deleteAllProducts();
  }
}
