import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import * as CartActions from '../store/cart.actions';
import * as CartSelectors from '../store/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  get cartItems(): Observable<CartItemModel[]>{
      return this.store.select(CartSelectors.cartSelector);
  }

  get totalQuantity(): Observable<number>{
      return this.store.select(CartSelectors.totalQuantity);
  }

  get totalSum(): Observable<number>{
      return this.store.select(CartSelectors.totalSum);
  }

    isEmptyCart(): Observable<boolean> {
        return this.store.select(CartSelectors.cartEmptySelector);
    }

  addProduct$(item: CartItemModel): void{
    this.store.dispatch(CartActions.addItem({ item }));
  }

  increaseQuantity$(item: CartItemModel): void {
      this.store.dispatch(CartActions.increaseQuantity({ item }));
  }

  decreaseQuantity$(item: CartItemModel): void {
      if (item.quantity > 1){
          this.store.dispatch(CartActions.decreaseQuantity({item}));
      } else {
          this.removeProduct$(item.id);
      }
  }

  removeProduct$(id: number): void{
      this.store.dispatch(CartActions.removeItem({id}));
  }

  removeAllProducts$(): void {
    this.store.dispatch(CartActions.emptyCart());
  }
}
