import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(n: number): string {
      const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for ( let i = 0; i < n; i++ ) {
          result += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length));
      }
      return result;
  }
}
