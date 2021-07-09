import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../shared/models/product.model';

export const getProducts = createAction(
  '[Products] Get Products'
);

export const setProducts = createAction(
  '[Products] Set Products',
);

export const getProductsSuccess = createAction(
  '[Products] Get Products Success',
  props<{products: ProductModel[]}>(),
);




