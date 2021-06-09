import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from './core/services';
import { Roles } from './shared/models/roles';
import { UserDataModel } from './shared/models/user-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle')title: ElementRef<HTMLHeadingElement>;
  adminUser: UserDataModel =  {
      name: 'admin',
      role: Roles.ADMIN,
  };
  regularUser: UserDataModel = {
      name: 'user',
      role: Roles.USER,
  };

  constructor(private storageService: LocalStorageService) {}

  ngOnInit(): void {
      this.storageService.setItem('currentUser', this.adminUser);
  }

  ngAfterViewInit(): void {
   this.title.nativeElement.textContent = 'ShopName';
  }
}
