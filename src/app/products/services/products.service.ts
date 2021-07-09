import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../reducers';
import { ProductModel } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000/products';

  constructor(
      private http: HttpClient,
      private store: Store<AppState>
  ) { }

  get products$(): Observable<ProductModel[]>{
      return this.store.select(state => state.products.data);
  }

  getProducts$(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }

  getProductById(id: string): Observable<ProductModel> {
      const params = new HttpParams().append('id', id);
      return this.http.get<ProductModel>(this.url, { params });
  }
}
