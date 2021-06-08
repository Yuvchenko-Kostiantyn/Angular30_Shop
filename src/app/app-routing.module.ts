import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart/components';
import { ProductListComponent, ProductViewComponent } from './products/components';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products-list' },
    { path: 'products-list', component: ProductListComponent },
    { path: 'product/:id', component: ProductViewComponent },
    { path: 'cart', component: CartListComponent},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
