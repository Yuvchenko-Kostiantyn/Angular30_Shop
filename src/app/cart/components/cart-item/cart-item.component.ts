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
  @Output() increaseQuantity = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemRemove(id: number): void {
    this.removeItem.emit(id);
  }

  onQuantityIncrease(id: number): void {
      this.increaseQuantity.emit(id);
  }

  onQuantityDecrease(id: number): void {
      this.decreaseQuantity.emit(id);
  }
}
