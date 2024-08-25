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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private skuService: SkuService,
    private tagsService: TagsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiResponse({
    status: 201,
    description: `The product has been successfully created`,
    type: ProductDto,
  })
  async createProduct(@Body() productDto: ProductDto) {
    const { name, color, size, categoryName, tags } = productDto;
    const category =
      await this.categoryService.findOrCreateCategory(categoryName);

    const resolvedTags = tags
      ? await this.tagsService.findOrCreateTags(tags)
      : [];

    const sku = this.skuService.generateSku(name, categoryName, color, size);

    return this.productService.createProduct(
      productDto,
      category,
      sku,
      resolvedTags,
    );
  }

  @ApiOperation({ summary: 'Get product details' })
  @ApiResponse({
    status: 200,
    description: 'Return the product details',
  })
  @Get('details/:sku')
  getProductDetails(@Param() sku: { sku: string }) {
    return this.productService.getProductDetails(sku.sku);
  }

  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({
    status: 200,
    description: 'Return the products by category',
  })
  @Get('getProductsByCategory/:categoryId')
  async getProductsByCategory(@Param() categoryId: { categoryId: string }) {
    const products = await this.productService.getProductsByCategory(
      categoryId.categoryId,
    );
    return products;
  }

  @ApiOperation({ summary: 'Get products by tags' })
  @ApiResponse({
    status: 200,
    description: 'Return the products by tags',
  })
  @Get('getProductsByTags/:tags')
  async getProductsByTags(
    @Param('tags') tags: string,
    @Query('skip') skip: string = '0',
  ) {
    const tagsArray = tags.split(',');
    const skipNumber = parseInt(skip, 10);

    const products = await this.productService.getProductsByTags(
      tagsArray,
      isNaN(skipNumber) ? 0 : skipNumber,
    );
    return products;
  }

  @ApiOperation({ summary: 'Get products' })
  @ApiResponse({
    status: 200,
    description: 'Return the products',
  })
  @Get()
  async getProducts(
    @Query('pages', ParseIntPipe) pages?: number,
    @Query('limit', ParseIntPipe) limit?: number,
    @Query('orderBy') orderBy?: 'price' | 'discount' | 'name',
    @Query('order') order?: 'asc' | 'desc',
    @Query('categoryId') categoryId?: string,
  ) {
    const { products, totalProducts } = await this.productService.getProducts(
      pages,
      limit,
      orderBy,
      order,
      categoryId,
    );

    return { products, totalProducts };
  }

  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted',
  })
  @Delete('deleteAll')
  async deleteAllProducts() {
    await this.productService.deleteAllProducts();
  }
}
