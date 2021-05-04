import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { Categories } from '../../shared/models/categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = [
    {
      id: 3,
      name: 'Product1',
      description: 'Description 1',
      price: 10,
      category: Categories.CONSUMABLES,
      isAvailable: true,
    },
    {
      id: 4,
      name: 'Product2',
      description: 'Description 2',
      price: 22,
      category: Categories.ELECTRONICS,
      isAvailable: false,
    },
    {
      id: 5,
      name: 'Product3',
      description: 'Description 3',
      price: 3,
      category: Categories.FOOD,
      isAvailable: false,
    },
    {
      id: 6,
      name: 'Product4',
      description: 'Description 4',
      price: 18,
      category: Categories.CONSUMABLES,
      isAvailable: true,
    }
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
