import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, retry, tap } from "rxjs/operators";
import { AppSettingsModel } from "../models/app-settings.model";
import { SortOptions } from "../models/sort-options.model";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  key = 'appSettings';


  constructor(private localStorageService: LocalStorageService, private http: HttpClient) { }

  getSettings(): Observable<AppSettingsModel> {
    const settings = <AppSettingsModel>this.localStorageService.getItem(this.key);
    if(settings){
      return of(settings)
    } else {
      return this.http.get<{defaultSettings: AppSettingsModel}>('../../../assets/app-settings.json')
      .pipe(
        map(data => data.defaultSettings),
        retry(2),
        catchError(err => of(err))
      )
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
