import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItemModel } from '../../shared/models/cartItem.model';
import { CartState } from './index';

export const cartFeatSelector = createFeatureSelector('cart');

export const cartSelector = createSelector(
    cartFeatSelector,
    (state: CartState) => state.items
);

export const totalQuantity = createSelector(
    cartSelector,
    (items: CartItemModel[]) => {
        return items.reduce((total , item) => total + item.quantity, 0);
    },
);

export const totalSum = createSelector(
    cartSelector,
    (items: CartItemModel[]) => {
        return items.map(item => item.price * item.quantity)
            .reduce((prev, next) => prev + next, 0);
    },
);

export const cartEmptySelector = createSelector(
    cartSelector,
    (items) => {
        return !!items.length;
    }
)
