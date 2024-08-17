import {
  IsString,
  IsOptional,
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsNumber,
} from 'class-validator';

export class ProductDto {
  //product
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  discount?: number;

  //product details
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  categoryName: string;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  size?: string;
}
