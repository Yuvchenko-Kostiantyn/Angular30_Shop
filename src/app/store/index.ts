import { RouterState } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { cartReducers, CartState } from '../cart/store';
import { productsReducers, ProductsState } from '../products/store';

export interface AppState {
  products: ProductsState;
  cart: CartState;
  router: RouterState;
}

export const stateReducers: ActionReducerMap<AppState> = {
  products: productsReducers,
  cart: cartReducers,
  router: routerReducer
};


export const stateMetaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
