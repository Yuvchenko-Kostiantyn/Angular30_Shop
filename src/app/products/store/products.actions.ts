import { createAction, props } from '@ngrx/store';

export const getProducts = createAction(
  '[Products] Get Products'
);

export const getProduct = createAction(
  '[Products] Get Products',
  props<{productId: number}>(),
);




