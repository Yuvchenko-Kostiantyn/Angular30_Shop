import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { ProductModel } from 'src/app/shared/models/product.model';
import { environment } from '../../../environments/environment';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export interface ProductsState {
  data: ReadonlyArray<ProductModel> 
}

const initialState: ProductsState = {
  data: [],
}

export const productsReducers = createReducer(initialState, 
  on(ProductsActions.getProducts, state => {
    return { ...state }
  })
);


export const metaReducers: MetaReducer<ProductsState>[] = !environment.production ? [] : [];
