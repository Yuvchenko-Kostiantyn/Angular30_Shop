import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from '../../shared/models/product.model';
import { AppState } from '../../store';
import { RouterStateUrl } from '../../store/router.serializer';
import { ProductsState } from './index';

const selectRouter = createFeatureSelector<{ state: RouterStateUrl }>('router');
export const productsSelector = createSelector(
    (state: AppState) => state.products,
    (state: ProductsState) => state.data,
);

export const combinedSelector = createSelector(
    productsSelector,
    selectRouter,
    (items: ProductModel[], router) => {
        console.log(router.state.params.id);
        return items.find(item => item.id.toString() === router.state.params.id);
    },
);
