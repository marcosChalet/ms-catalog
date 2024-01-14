import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProducts() {
    return await this.prismaService.catalog.findMany();
  }

  async getDeals() {
    return await this.prismaService.deals.findMany();
  }
}
