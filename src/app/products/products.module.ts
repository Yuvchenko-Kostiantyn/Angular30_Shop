import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, ProductListComponent, ProductViewComponent } from './components';




@NgModule({
  declarations: [
      ProductComponent,
      ProductListComponent,
      ProductViewComponent,
  ],
  imports: [
      SharedModule,
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductsModule { }
