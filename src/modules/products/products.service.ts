import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async getAll() {
    return await this.repository.getAllProducts();
  }
}
