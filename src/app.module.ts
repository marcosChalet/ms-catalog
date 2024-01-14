import { Module, ValidationPipe } from '@nestjs/common';
import { featureModules } from './modules';
import { globalModules } from './modules/global';
import { APP_PIPE } from '@nestjs/core';
import { RedisOptions } from './configs/products.contants';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ...globalModules,
    ...featureModules,
    CacheModule.registerAsync(RedisOptions),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
