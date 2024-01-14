import { Inject, Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
  constructor(
    private readonly repository: ProductsRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAll() {
    return await this.repository.getAllProducts();
  }

  async getDeals() {
    try {
      const dealsCached = await this.cacheManager.get<string>('@deals');
      if (dealsCached) {
        console.log('Returned from cache');
        return JSON.parse(dealsCached);
      }

      const dealsFromDb = await this.repository.getDeals();
      const dealsString = JSON.stringify(dealsFromDb);
      await this.cacheManager.set('@deals', dealsString);
      return dealsFromDb;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
