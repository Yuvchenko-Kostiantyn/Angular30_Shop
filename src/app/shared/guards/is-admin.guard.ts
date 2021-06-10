import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { LocalStorageService } from '../../core/services';
import { Roles } from '../models/roles';
import { UserDataModel } from '../models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard implements CanActivate {
    constructor(private storageService: LocalStorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
      const userData = this.storageService.getItem('currentUser') as UserDataModel;
      return userData?.role === Roles.ADMIN ? true : this.router.parseUrl('/forbidden');
  }
}
