import { Injectable } from '@angular/core';
import { Categories } from 'src/app/shared/models/categories';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ProductModel[] = [
      {
        name: 'CartProduct1',
        description: 'Description 1',
        price: 3,
        category: Categories.FOOD,
        isAvailable: true,
      },
      {
        name: 'CartProduct2',
        description: 'Description 2',
        price: 18,
        category: Categories.CONSUMABLES,
        isAvailable: true,
      }
  ];

  constructor() { }

  getCartItems(): ProductModel[] {
    return this.cartItems;
  }
}
