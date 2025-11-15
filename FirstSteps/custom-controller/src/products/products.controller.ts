import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(): string[] {
    return ['Product 1', 'Product 2', 'Product 3'];
  }

  @Post()
  create(@Body() body: { product: string }): string {
    return `Product ${body.product} created successfully!`;
  }

  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `Product with ID: ${id}`;
  }
}
