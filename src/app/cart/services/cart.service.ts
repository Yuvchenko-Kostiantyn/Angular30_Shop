import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { CartItemModel } from 'src/app/shared/models/cartItem.model';
import * as CartActions from '../store/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Костиль на костилі, але працює, хоч і криво. 
  // Основна проблема була з removeProduct, чомусь якщо робити світч 
  // щоб кинути запит для отримання оновленого кошика delete повертав 404,
  // але загалом погано що не неможливо нормально вибрати що саме поверне запит.
  url = 'http://localhost:3000/cart'
  

  totalSum = 0;
  totalQuantity = 0;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getProducts$(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.url);
  }

  addProduct$(newItem: CartItemModel):  Observable<any>{
    //   тут происходит увеличение количества, так как этот объект передается по ссылке
        return this.increaseQuantity$(newItem).pipe(
            // Такой подход приводит к тому, что у вас при добавлении товара,
            // сразу количество устанавливается в 2шт.
            // На мой взгляд, это плохое решение, когда совмещают апдейт и вставку да и еще через catchError
            catchError(() => {
                // а потом тут увеличенное количество вставляется
            return this.http.post(this.url, newItem);
          })
        )
  }

  increaseQuantity$(item: CartItemModel): Observable<any> {
    return this.http.put(`${this.url}/${item.id}`,{...item, quantity:  item.quantity + 1 }) // тут устанавливалось сразу 2шт
  }

  decreaseQuantity$(item: CartItemModel): Observable<any> {
    return this.http.get(`${this.url}/${item.id}`).pipe(
      switchMap((item: CartItemModel) => {
        if(item.quantity > 1){
          return this.http.patch(`${this.url}/${item.id}`,{...item, quantity:  item.quantity -=1 });
        } else {
          return this.removeProduct(item.id);
        }
      })
    )
  }

  removeProduct(itemId: number): Observable<any>{
    return this.http.delete(`${this.url}/${itemId}`);
  }

  removeAllProducts(): Observable<CartItemModel[]> {
    // Не працює
    // Реализация зависит от бекенда
    // Если он поддерживает такую операцию, то должна работать, если нет, то извините
    return this.http.patch<CartItemModel[]>(this.url, []);
  }

  isEmptyCart(): Observable<boolean> {
      return this.getProducts$().pipe(
        map((cart: CartItemModel[]) => !!cart.length)
      )
  }

  getTotalPrice(): Observable<number> {
      return this.getProducts$().pipe(
        map(
          (cartItems: CartItemModel[]) => cartItems.map(item => item.price * item.quantity).reduce((prev, next) => prev + next, 0)
        )
      )
  }

  getNumberOfItems(): Observable<number> {
    return this.http.get(this.url).pipe(
      map((cartItems: CartItemModel[]) => cartItems.reduce((total , item) => total + item.quantity, 0))
    )
  }
}
