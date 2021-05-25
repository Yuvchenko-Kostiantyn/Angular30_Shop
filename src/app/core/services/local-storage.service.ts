export class LocalStorageService {
    constructor() {}

    getItem(key): string {
        return window.localStorage.getItem(key);
    }

    setItem(key: string, value): void {
        window.localStorage.setItem(key, value);
    }
}
