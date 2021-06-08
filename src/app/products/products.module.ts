import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, ProductListComponent } from './components';




@NgModule({
  declarations: [
      ProductComponent,
      ProductListComponent,
  ],
  imports: [
      SharedModule,
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductsModule { }
