import { createAction, props } from '@ngrx/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';

export const getCart = createAction(
  '[Cart] Get Cart'
);

export const getCartSuccess = createAction(
    '[Cart] Get Cart Success',
    props<{items: CartItemModel[]}>(),
);

export const emptyCart = createAction(
    '[Cart] Empty Cart'
);

export const addItem = createAction(
  '[Cart] Add Item',
  props<{item: CartItemModel}>(),
);

export const addItemSuccess = createAction(
  '[Cart] Add Item Success',
  props<{item: CartItemModel}>(),
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{id: number}>(),
);

export const removeItemSuccess = createAction(
    '[Cart] Remove Item Success',
    props<{id: number}>(),
);

export const increaseQuantity = createAction(
    '[Cart] Increase Quantity',
    props<{item: CartItemModel}>(),
);

export const increaseQuantitySuccess = createAction(
    '[Cart] Increase Quantity Success',
    props<{item: CartItemModel}>(),
);

export const decreaseQuantity = createAction(
    '[Cart] Decrease Quantity',
    props<{item: CartItemModel}>(),
);

export const decreaseQuantitySuccess = createAction(
    '[Cart] Decrease Quantity Success',
    props<{item: CartItemModel}>(),
);




