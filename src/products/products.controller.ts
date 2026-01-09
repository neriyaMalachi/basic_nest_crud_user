import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('')
  getAll() {
    return this.productsService.getAllData();
  }
  @Post('addProducts')
  createProduct(@Body() body: { name: string; price: number }) {
    return this.productsService.createProduct(body);
  }
}
