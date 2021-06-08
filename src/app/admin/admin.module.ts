import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {
    AddProductComponent,
    AdminComponent, EditComponent,
    OrdersComponent,
    ProductsComponent,
} from './components';


@NgModule({
  declarations: [ AddProductComponent, AdminComponent, ProductsComponent, EditComponent, OrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
