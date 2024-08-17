import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TagsService, PrismaService],
  controllers: [TagsController],
})
export class TagsModule {}
