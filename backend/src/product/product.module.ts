import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { SkuService } from 'src/sku/sku.service';
import { CategoryService } from 'src/category/category.service';
import { TagsService } from 'src/tags/tags.service';

@Module({
  providers: [
    ProductService,
    PrismaService,
    SkuService,
    CategoryService,
    TagsService,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
