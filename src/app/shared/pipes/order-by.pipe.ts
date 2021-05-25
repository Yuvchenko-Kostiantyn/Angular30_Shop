import { Pipe, PipeTransform } from '@angular/core';
import { CartItemModel } from '../models/cartItem.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: CartItemModel[], key: string, isAsc: boolean): unknown {
    return items.sort((a, b) => isAsc ? a[key] - b[key] : b[key] - a[key]);
  }

}
