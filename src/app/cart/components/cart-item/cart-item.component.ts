import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItemModel;
  @Output() removeItem = new EventEmitter<number>();
  @Output() increaseQuantity = new EventEmitter<CartItemModel>();
  @Output() decreaseQuantity = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemRemove(id: number): void {
    this.removeItem.emit(id);
  }

  onQuantityIncrease(item: CartItemModel): void {
      this.increaseQuantity.emit(item);
  }

  onQuantityDecrease(item: CartItemModel): void {
      this.decreaseQuantity.emit(item);
  }
}
