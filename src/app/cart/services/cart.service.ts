import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { Categories } from 'src/app/shared/models/categories';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItemModel[] = [
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

  totalSum = 0;
  totalQuantity = 0;

  cartItems$ = new BehaviorSubject<CartItemModel[]>(this.cartItems);

  constructor() { }

  addProduct(newItem: CartItemModel): void{
    const matchingItem = this.cartItems.find(item => item.id === newItem.id);
    if (matchingItem){
     this.increaseQuantity(matchingItem.id);
    } else {
      this.cartItems = [...this.cartItems, newItem];
      this.updateCartData();
    }
  }

  increaseQuantity(itemId: number): void {
      const targetItem = this.cartItems.find(item => item.id === itemId);
      const newArray = this.cartItems.filter(item => item.id !== itemId);

      this.cartItems = [...newArray, { ...targetItem, quantity: targetItem.quantity += 1}];

      this.updateCartData();
  }

  decreaseQuantity(itemId: number): void {
      const targetItem = this.cartItems.find(item => item.id === itemId);
      const newArray = this.cartItems.filter(item => item.id !== itemId);

      if (targetItem.quantity <= 1) {
          this.cartItems = [...newArray];
      } else {
          targetItem.quantity--;
          this.cartItems = [...newArray, targetItem];
      }

      this.updateCartData();
  }

  removeProduct(itemId: number): void{
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.updateCartData();
  }

  removeAllProducts(): void {
      this.cartItems = [];
      this.updateCartData();
  }

  isEmptyCart(): boolean {
      return !!this.cartItems.length;
  }

  updateCartData(): void {
      console.log('update');
      this.getTotalPrice();
      this.getNumberOfItems();
      this.cartItems$.next(this.cartItems);
  }

  private getTotalPrice(): void {
      this.totalSum = this.cartItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next, 0);
  }

  private getNumberOfItems(): void {
      this.totalQuantity = this.cartItems.reduce((total , item) => total + item.quantity, 0);
  }
}
