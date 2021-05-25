import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {
  cartItems: Observable<CartItemModel[]>;
  itemsInCart: number;
  totalSum: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts$();
  }

  ngDoCheck(): void {
    this.itemsInCart = this.cartService.totalQuantity;
    this.totalSum = this.cartService.totalSum;
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
}
