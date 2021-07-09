import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ProductsService } from '../services';
import * as ProductsActions from './products.actions';



@Injectable()
export class ProductsEffects {

  constructor(
      private actions$: Actions,
      private productsService: ProductsService,
  ) {}

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.getProducts),
        mergeMap(() => this.productsService.getProducts$().pipe(
            map((products) => ProductsActions.getProductsSuccess({products}))
        ))
    ));

}
