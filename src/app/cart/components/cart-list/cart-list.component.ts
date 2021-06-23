import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
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
export class CartListComponent implements OnInit, DoCheck, OnDestroy {
  cartItems: Observable<CartItemModel[]>;
  itemsInCart: number;
  totalSum: number;
  properties = [ 'price', 'name', 'quantity'];
  sortOptions: SortOptions;
  takeUntil$ = new Subject();


  constructor(private cartService: CartService, private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.getSettings().pipe(
      takeUntil(this.takeUntil$),
    ).subscribe((settings: AppSettingsModel) => {
      this.sortOptions = settings.sortOptions
    })

    this.cartItems = this.cartService.getProducts$();
    this.updateData();
  }

  ngDoCheck(): void {
    this.updateData();
  }

  ngOnDestroy(){
    this.appSettingsService.updateSotringOptions(this.sortOptions);
    this.takeUntil$.next();
    this.takeUntil$.complete();
  }

  onIncreaseQuantity(id: number): void {
      this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
      this.cartService.decreaseQuantity(id);
  }

  onRemoveItem(id: number): void {
    this.cartService.removeProduct(id);
  }

  private updateData(): void {
      this.itemsInCart = this.cartService.totalQuantity;
      this.totalSum = this.cartService.totalSum;
  }
}
