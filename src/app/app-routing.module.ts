import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart/components';
import { ProcessOrderComponent } from './orders/components';
import { ProductListComponent, ProductViewComponent } from './products/components';
import { PageForbiddenComponent, PageNotFoundComponent } from './shared/components';
import { IsAdminGuard } from './shared/guards/is-admin.guard';
import { IsCartEmptyGuard } from './shared/guards/is-cart-empty.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products-list' },
    { path: 'products-list', component: ProductListComponent },
    { path: 'product/:id', component: ProductViewComponent },
    { path: 'cart', component: CartListComponent},
    { path: 'order', component: ProcessOrderComponent, canActivate: [ IsCartEmptyGuard ] },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [ IsAdminGuard ] },
    { path: 'forbidden', component: PageForbiddenComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
