import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ICartItem } from 'src/app/shared/models/cartItem.model';
import { Categories } from 'src/app/shared/models/categories';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartItemComponent } from '../components/cart-item/cart-item.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICartItem[] = [
      {
        id: 1,
        name: 'CartProduct1',
        description: 'Description 1',
        price: 3,
        category: Categories.FOOD,
        isAvailable: true,
        quantity: 1,
      },
      {
        id: 2,
        name: 'CartProduct2',
        description: 'Description 2',
        price: 18,
        category: Categories.CONSUMABLES,
        isAvailable: true,
        quantity: 1,
      }
  ];

  cartItems$ = new BehaviorSubject<ICartItem[]>(this.cartItems);

  constructor() { }

  getTotalPrice(): number {
    // В этой строке выдает ошибку. Ругается на пропущеное стартовое значение, если добавлять и удалть товары в корзине
    return this.cartItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next);
  }

  getNumberOfItems(): number {
    return this.cartItems.reduce((total , item) => total + item.quantity, 0);
  }

  addToCart(newItem: ICartItem): void{
    // I really don't like this logic but it's the only way i managed to make it immutable
    const matchingItem = this.cartItems.find(item => item.id === newItem.id);
    if (matchingItem){
      const newArray = this.cartItems.filter(item => item.id !== matchingItem.id);
      this.cartItems = [...newArray, {...matchingItem, quantity: matchingItem.quantity + newItem.quantity}];
    } else {
      this.cartItems = [...this.cartItems, newItem];
    }
    this.cartItems$.next(this.cartItems);
  }

  removeFromCart(itemId: number): void{
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cartItems$.next(this.cartItems);
  }
}
