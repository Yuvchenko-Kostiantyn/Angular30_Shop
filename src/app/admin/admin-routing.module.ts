import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AdminComponent,
    ProductsComponent,
    AddProductComponent,
    EditComponent,
    OrdersComponent,
} from './components';
import { DeactivateEditGuard } from './guards/deactivate-edit.guard';
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
                canDeactivate: [ DeactivateEditGuard ],
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
