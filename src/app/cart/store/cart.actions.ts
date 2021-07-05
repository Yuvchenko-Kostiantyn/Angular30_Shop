import { createAction, props } from '@ngrx/store';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';

export const getCart = createAction(
  '[Cart] Get Cart'
);

export const addItems = createAction(
  '[Cart] Add Items',
  props<{items: CartItemModel[]}>(),
)

export const addItem = createAction(
  '[Cart] Add Item',
  props<{cartItem: CartItemModel}>(),
)



