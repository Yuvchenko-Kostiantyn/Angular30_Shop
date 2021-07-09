import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import { environment } from '../../../environments/environment';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  items: Array<CartItemModel>;
}

const initialState: CartState = {
  items: [],
};

export const cartReducers = createReducer(initialState,
      on(CartActions.getCartSuccess, (state, action) => {
        return { ...state, items: action.items };
      }),
      on(CartActions.addItem, (state: CartState, action) => {
        return { ...state, items: [...state.items, action.item]};
      }),
      on(CartActions.removeItemSuccess, (state: CartState, action) => {
        return {
         ...state,
         items: state.items.filter(item => item.id !== action.id)
        };
      }),
      on(CartActions.increaseQuantitySuccess, (state: CartState, action) => {
        const item = state.items.find(cartItem => cartItem.id === action.item.id);
        return {
            ...state,
            items: [
                ...state.items.filter(cartItem => cartItem.id !== action.item.id),
                {...item, quantity: item.quantity + 1}
            ]
        };
      }),
      on(CartActions.decreaseQuantitySuccess, (state: CartState, action) => {
        const item = state.items.find(cartItem => cartItem.id === action.item.id);
        return {
            ...state,
            items: [
                ...state.items.filter(cartItem => cartItem.id !== action.item.id),
                {...item, quantity: item.quantity - 1}
            ]
        };
      }),
);


export const cartMetaReducers: MetaReducer<CartState>[] = !environment.production ? [] : [];
