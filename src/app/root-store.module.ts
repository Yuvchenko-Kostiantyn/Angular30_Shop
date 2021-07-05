import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as cartState from './cart/store'
import * as productsState from './products/store'
import { EffectsModule } from '@ngrx/effects';
import { stateReducers, stateMetaReducers } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      cartState.cartFeatureKey, 
      cartState.cartReducers, 
      { metaReducers: cartState.cartMetaReducers }
    ),

    StoreModule.forFeature(
      productsState.productsFeatureKey, 
      productsState.productsReducers, 
      { metaReducers: productsState.metaReducers }
    ),

    StoreModule.forRoot(stateReducers, {
      metaReducers: stateMetaReducers
    }),
    EffectsModule.forRoot([]),
  
  ]  
})
export class RootStoreModule { }
