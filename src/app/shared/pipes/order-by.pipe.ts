import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], key: string, isAsc: boolean): any[] {
    return [...items].sort((a, b) => {
        if (isAsc) {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] > b[key] ? -1 : 1;
        }
    });

  }

}
