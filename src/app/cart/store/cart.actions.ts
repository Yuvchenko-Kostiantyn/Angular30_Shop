import { createAction, props } from '@ngrx/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';

export const getCart = createAction(
  '[Cart] Get Cart'
);

export const emptyCart = createAction(
    '[Cart] Empty Cart'
);

export const addItems = createAction(
  '[Cart] Add Items',
  props<{items: CartItemModel[]}>(),
);

export const addItem = createAction(
  '[Cart] Add Item',
  props<{item: CartItemModel}>(),
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{id: number}>(),
);

export const increaseQuantity = createAction(
    '[Cart] Increase Quantity',
    props<{id: number}>(),
);

export const decreaseQuantity = createAction(
    '[Cart] Decrease Quantity',
    props<{id: number}>(),
);




