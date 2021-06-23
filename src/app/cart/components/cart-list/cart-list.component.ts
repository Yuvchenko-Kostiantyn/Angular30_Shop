import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { combineLatest, Observable, Subject } from "rxjs";
import { retry, takeUntil } from "rxjs/operators";
import { AppSettingsModel } from "src/app/core/models/app-settings.model";
import { SortOptions } from "src/app/core/models/sort-options.model";
import { AppSettingsService } from "src/app/core/services";
import { CartItemModel } from "src/app/shared/models/cartItem.model";
import { CartService } from "../../services";


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: Observable<CartItemModel[]>;
  itemsInCart: Observable<number>
  totalSum: Observable<number>
  properties = [ 'price', 'name', 'quantity'];
  sortOptions: SortOptions;
  takeUntil$ = new Subject();


  constructor(private cartService: CartService, private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.getSettings().pipe(
      takeUntil(this.takeUntil$),
    ).subscribe((settings: AppSettingsModel) => {
      // Дані ніби з жсон-файлу приходять нормально, але все одно помилка
      // так і не зміг розібратися чому
      this.sortOptions = settings.sortOptions
    })
    this.updateData();
  }

  ngOnDestroy(){
    this.appSettingsService.updateSotringOptions(this.sortOptions);
    this.takeUntil$.next();
    this.takeUntil$.complete();
  }

  onIncreaseQuantity(item: CartItemModel): void {
      this.cartService.increaseQuantity$(item).subscribe();
      this.updateData();
  }

  onDecreaseQuantity(item: CartItemModel): void {
   this.cartService.decreaseQuantity$(item).subscribe();
   this.updateData();
  }

  onRemoveItem(id: number): void {
    this.cartService.removeProduct(id).subscribe();
    this.updateData()
  }

  updateData(){
    this.cartItems = this.cartService.getProducts$();
    this.totalSum = this.cartService.getTotalPrice();
    this.itemsInCart = this.cartService.getNumberOfItems();
  }
}
