import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../backend.types';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'test',
      description: 'hello world',
      quantity: 20,
    },
  ];
  private id = 1;

  public create(createProductDto: CreateProductDto) {
    this.id += 1;
    this.products.push({ ...createProductDto, id: this.id });
  }

  public remove(id: number) {
    this.products = this.products.filter(v => v.id !== id);
  }

  public update(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.map(p => {
      if (p.id === id) {
        return {
          ...p,
          ...updateProductDto,
        };
      }
    });
  }

  public findAll() {
    return this.products;
  }

  public findOne(id: number) {
    return this.products.find(v => v.id == id);
  }
}
