import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { AppSettingsModel } from "../models/app-settings.model";
import { SortOptions } from "../models/sort-options.model";
import { LocalStorageService } from "./index";
import * as settingsObject from '../../../assets/app-settings.json';



@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  key = 'appSettings';


  constructor(private localStorageService: LocalStorageService) { }

  getSettings(): Observable<AppSettingsModel> {
    const settings = <AppSettingsModel>this.localStorageService.getItem(this.key);
    if(settings){
      return of(settings)
    } else {
      return of(settingsObject.defaultSettings)
    }
  } 

  updateSotringOptions(sortOptions: SortOptions){
    this.getSettings().pipe(
      tap(settings => {
        const newSettings = {...settings, sortOptions};
        this.setSettings(newSettings)
      })
    )
  }

  private setSettings(settings: AppSettingsModel): void{
    this.localStorageService.setItem(this.key, settings);
  }
}
