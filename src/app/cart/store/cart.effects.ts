import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { CartApiService } from '../services/cart-api.service';
import * as CartActions from '../store/cart.actions';



@Injectable()
export class CartEffects {

  constructor(
      private actions$: Actions,
      private cartApiService: CartApiService
  ) {}

    loadCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.getCart),
        // я вам давал комментарий по поводу использования switchMap и concatMap
        mergeMap(() => this.cartApiService.getCart().pipe(
            map((items) => CartActions.getCartSuccess({items}))
        ))
    ));

    addItem$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.addItem),
        mergeMap((action) => this.cartApiService.addItem(action.item).pipe(
            map(item => CartActions.addItemSuccess({ item })),
        )),
    ));

    increaseQuantity$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.increaseQuantity),
        mergeMap((action) => this.cartApiService.increaseItemQuantity$(action.item).pipe(
            map(item => CartActions.increaseQuantitySuccess({ item })),
        )),
    ));

    decreaseQuantity$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.decreaseQuantity),
        mergeMap((action) => this.cartApiService.decreaseItemQuantity$(action.item).pipe(
            map(item => CartActions.decreaseQuantitySuccess({ item })),
        )),
    ));

    removeItem$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.removeItem),
        mergeMap((action) => this.cartApiService.removeProduct(action.id).pipe(
            map(item => CartActions.removeItemSuccess({ id: action.id })),
        )),
    ));
}
