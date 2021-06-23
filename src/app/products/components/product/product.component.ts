import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() { }

  onAddToCart(product: ProductModel): void {
    this.addToCart.emit(product);
  }
}
