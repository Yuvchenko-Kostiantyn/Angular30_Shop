import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
    config: ConfigModel = {
        id: null,
        login: null,
        email: null,
    };

  constructor() { }

  getConfig(): ConfigModel{
    return this.config;
  }

  setConfig(configData: Partial<ConfigModel>): void {
      this.config = {...this.config, ...configData};
  }
}
