import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(items: any, type): any {
    if (!items || !type) {
      return items;
    }
    return items.filter(item => item.type === type);
  }

}
