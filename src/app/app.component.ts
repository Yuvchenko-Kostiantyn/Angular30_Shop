import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { CartService } from './cart/services';
import * as CartActions from './cart/store/cart.actions';
import { LocalStorageService } from './core/services';
import { AppState } from './reducers';
import { Roles } from './shared/models/roles';
import { UserDataModel } from './shared/models/user-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('appTitle')title: ElementRef<HTMLHeadingElement>;
  adminUser: UserDataModel =  {
      name: 'admin',
      role: Roles.ADMIN,
  };
  regularUser: UserDataModel = {
      name: 'user',
      role: Roles.USER,
  };
  takeUntil$ = new Subject();

  constructor(
      private storageService: LocalStorageService,
      private store: Store<AppState>,
      private cartService: CartService,
  ) {}

  ngOnInit(): void {
      this.storageService.setItem('currentUser', this.adminUser);
      this.initCart();
  }

  ngAfterViewInit(): void {
   this.title.nativeElement.textContent = 'ShopName';
  }

  ngOnDestroy(): void {
      this.takeUntil$.next();
      this.takeUntil$.complete();
  }

  private initCart(): void{
      this.cartService.getCart().pipe(
          takeUntil(this.takeUntil$),
          tap((items) => {
              this.store.dispatch(CartActions.addItems({items}));
          })
      ).subscribe();
  }
}
