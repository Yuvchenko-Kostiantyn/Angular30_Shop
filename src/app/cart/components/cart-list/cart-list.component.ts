import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {
  cartItems: Observable<CartItemModel[]>;
  itemsInCart: number;
  totalSum: number;
  properties = [ 'price', 'name', 'quantity'];
  sortOptions = {
      sortingKey: 'price',
      sortingOrder: false,
  };


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts$();
    this.updateData();
  }

  ngDoCheck(): void {
    this.updateData();
  }

  onIncreaseQuantity(id: number): void {
      this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
      this.cartService.decreaseQuantity(id);
  }

  onRemoveItem(id: number): void {
    this.cartService.removeProduct(id);
  }

  private updateData(): void {
      this.itemsInCart = this.cartService.totalQuantity;
      this.totalSum = this.cartService.totalSum;
  }
}
