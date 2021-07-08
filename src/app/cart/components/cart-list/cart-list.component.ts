import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppSettingsService } from 'src/app/core/services';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { AppState } from '../../../reducers';
import { CartService } from '../../services';
import * as CartActions from '../../store/cart.actions';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: Observable<CartItemModel[]>;
  itemsInCart: Observable<number>;
  totalSum: Observable<number>;
  properties = [ 'price', 'name', 'quantity'];
  sortOptions = {
    sortingKey: 'price',
    sortingOrder: false,
  };


  constructor(
      private cartService: CartService,
      private appSettingsService: AppSettingsService,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.itemsInCart = this.cartService.totalQuantity;
    this.totalSum = this.cartService.totalSum;
  }

  ngOnDestroy(): void{
    this.appSettingsService.updateSortingOptions(this.sortOptions);
  }

  onIncreaseQuantity(item: CartItemModel): void {
      this.cartService.increaseQuantity$(item);
  }

  onDecreaseQuantity(item: CartItemModel): void {
      this.cartService.decreaseQuantity$(item);
  }

  onRemoveItem(id: number): void {
   this.cartService.removeProduct$(id);
  }
}
