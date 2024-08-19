import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CategoryService, PrismaService],
  controllers: [],
})
export class CategoryModule {}
