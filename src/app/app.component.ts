import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { LocalStorageService } from './core/services';
import { AppState } from './store';
import { Roles } from './shared/models/roles';
import { UserDataModel } from './shared/models/user-data.model';
import * as CartActions from './cart/store/cart.actions';
import * as ProductsActions from './products/store/products.actions';

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
  ) {}

  ngOnInit(): void {
      this.storageService.setItem('currentUser', this.adminUser);
      this.initStore();
  }

  ngAfterViewInit(): void {
   this.title.nativeElement.textContent = 'ShopName';
  }

  ngOnDestroy(): void {
      this.takeUntil$.next();
      this.takeUntil$.complete();
  }

  private initStore(): void{
      this.store.dispatch(CartActions.getCart());
      this.store.dispatch(ProductsActions.getProducts());
  }
}
