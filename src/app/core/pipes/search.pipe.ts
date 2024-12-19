import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, searchText: string): Array<any> {
    if (!value || !searchText) {
      return value;
    }
    return value.filter(item => Object.values(item).some(val => val?.toString().toLowerCase().includes(searchText)));
  }

}
