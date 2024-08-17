import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SkuModule } from './sku/sku.module';
import { CategoryModule } from './category/category.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ProductModule,
    SkuModule,
    CategoryModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
