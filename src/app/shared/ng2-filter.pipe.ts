/**
 * Created by vadimdez on 28/06/16.
 */
import { Pipe, Injectable } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})

@Injectable()
export class Ng2FilterPipe {

  private filterByString(filter) {
    return value => {
      return value === filter;
    }
  }

  private filterByObject(filter) {
    return value => {
      for (let key in filter) {
        if (value[key] !== filter[key]) {
          return false;
        }
      }

      return true;
    }
  }

  transform(array: any[], filter: any): any {
    const type = typeof filter;
    let filterFunction;

    if (type === 'string') {
      return array.filter(this.filterByString(filter));
    }

    if (type === 'object') {
      return array.filter(this.filterByObject(filter));
    }

    return [];
  }
}