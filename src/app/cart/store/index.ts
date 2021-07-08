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
      on(CartActions.getCart, state => {
        return { ...state };
      }),
      on(CartActions.addItems, (state: CartState, action) => {
        return { ...state, items: [...state.items, ...action.items] };
      }),
      on(CartActions.addItem, (state: CartState, action) => {
        return { ...state, items: [...state.items, action.item]};
      }),
      on(CartActions.removeItem, (state: CartState, action) => {
        return {
         ...state,
         items: state.items.filter(item => item.id !== action.id)
        };
      }),
    on(CartActions.increaseQuantity, (state: CartState, action) => {
        const item = state.items.find(cartItem => cartItem.id === action.id);
        return {
            ...state,
            items: [
                ...state.items.filter(cartItem => cartItem.id !== action.id),
                {...item, quantity: item.quantity + 1}
            ]
        };
    }),
    on(CartActions.decreaseQuantity, (state: CartState, action) => {
        const item = state.items.find(cartItem => cartItem.id === action.id);
        return {
            ...state,
            items: [
                ...state.items.filter(cartItem => cartItem.id !== action.id),
                {...item, quantity: item.quantity - 1}
            ]
        };
    })
);


export const cartMetaReducers: MetaReducer<CartState>[] = !environment.production ? [] : [];
