import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AdminComponent,
    ProductsComponent,
    AddProductComponent,
    EditComponent,
    OrdersComponent,
} from './components';
import { ProductResolver } from './guards/product.resolver';

const routes: Routes = [
    { path: '', component: AdminComponent },
    {
        path: 'products',
        children: [
            { path: '', component: ProductsComponent },
            { path: 'add', component: AddProductComponent },
            {
                path: 'edit/:id',
                component: EditComponent,
                resolve: {
                    product: ProductResolver,
                },
            },
        ]
    },
    {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductResolver],
})
export class AdminRoutingModule { }
