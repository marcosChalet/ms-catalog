import { ProductsModule } from './products/products.module';
import { CacheModule } from '@nestjs/cache-manager';

export const featureModules = [ProductsModule, CacheModule.register()];
