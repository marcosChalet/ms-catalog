import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('all')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('deals')
  getDeals() {
    return this.productsService.getDeals();
  }
}
