import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':idorname')
  findOne(@Param('id') id?: string, @Param('name') name?: string) {
    return this.categoryService.findOne(id || name);
  }
}
