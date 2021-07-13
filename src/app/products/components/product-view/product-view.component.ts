import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import * as ProductSelectors from '../../store/products.selectors';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.product = this.store.select(ProductSelectors.combinedSelector);
  }

}
