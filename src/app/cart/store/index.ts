import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { environment } from '../../../environments/environment';
import * as CartActions from './cart.actions'

export const cartFeatureKey = 'cart';

export interface CartState {
  items: ReadonlyArray<CartItemModel>
}

const initialState: CartState = {
  items: [],
}

export const cartReducers = createReducer(initialState,
  on(CartActions.getCart, state => {
    console.log('fromReducer')
    return { ...state }
  }),
  on(CartActions.addItems, (state: CartState, action) => {
    return { ...state, items: {...state.items, ...action.items} }
  }),
  on(CartActions.addItem, (state: CartState, action) => {
    console.log(action)
    return { ...state }
  })
)


export const cartMetaReducers: MetaReducer<CartState>[] = !environment.production ? [] : [];
