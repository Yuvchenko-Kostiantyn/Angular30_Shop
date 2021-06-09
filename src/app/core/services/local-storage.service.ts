import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    getItem(key): object {
        return JSON.parse(window.localStorage.getItem(key));
    }

    setItem(key: string, value): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}
