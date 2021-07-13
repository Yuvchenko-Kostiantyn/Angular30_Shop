import { routerReducer, RouterState } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { cartReducers, CartState } from '../cart/store';
import { productsReducers, ProductsState } from '../products/store';
import { RouterStateUrl } from './router.serializer';

export interface AppState {
  products: ProductsState;
  cart: CartState;
  router: RouterStateUrl;
}

export const stateReducers: ActionReducerMap<AppState> = {
  products: productsReducers,
  cart: cartReducers,
  router: routerReducer
};


export const stateMetaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
