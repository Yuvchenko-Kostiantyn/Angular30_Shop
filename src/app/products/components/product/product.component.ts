import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {

  }

  onAddToCart(product /* type? */ ): void {
    this.addToCart.emit(product);
  }
}
