import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductsService } from '../../products/services';
import { ProductModel } from '../../shared/models/product.model';

@Injectable()
export class ProductResolver implements Resolve<ProductModel>{
    id = 'id';
    constructor(private productsService: ProductsService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<ProductModel> | ProductModel {
        return this.productsService.getProductById(route.params[this.id])
            .pipe(take(1));
    }
}
