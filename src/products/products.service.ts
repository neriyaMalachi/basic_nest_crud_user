import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  getAllData() {
    return this.prisma.product.findMany();
  }
  async GetById(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('products not found');
    }
  }
  createProduct(data: { name: string; price: number }) {
    return this.prisma.product.create({ data });
  }
}
