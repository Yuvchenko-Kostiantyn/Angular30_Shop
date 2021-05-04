import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from 'src/app/shared/models/cartItem.model';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: ICartItem;
  @Output() removeItem = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onItemRemove(id: number): void {
    this.removeItem.emit(id)
  }
}
