import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/services';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {
  constructor(private cartService: CartService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.cartService.isEmptyCart();
  }
}
