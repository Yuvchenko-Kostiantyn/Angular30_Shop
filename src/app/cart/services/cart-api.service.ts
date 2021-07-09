import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItemModel } from '../../shared/models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  url = 'http://localhost:3000/cart';
  constructor(private http: HttpClient) { }

  getCart(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.url);
  }

  addItem(item: CartItemModel): Observable<CartItemModel>{
    // Жсон-сервер не вміє в перевірку на існуючий айді
    // і тут як не викручуйся все одно буде сейвити окремо вже існуючий об'єкт
    return this.http.post<CartItemModel>(this.url, item);
  }

  increaseItemQuantity$(item: CartItemModel): Observable<CartItemModel>{
      return this.http.patch<CartItemModel>(`${this.url}/${item.id}`, {quantity: item.quantity + 1});
  }

  decreaseItemQuantity$(item: CartItemModel): Observable<CartItemModel>{
      return this.http.patch<CartItemModel>(`${this.url}/${item.id}`, {quantity: item.quantity - 1});
  }

  removeProduct(itemId: number): Observable<any>{
      return this.http.delete(`${this.url}/${itemId}`);
  }
}
