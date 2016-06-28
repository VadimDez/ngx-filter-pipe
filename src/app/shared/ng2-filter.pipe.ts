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

  transform(array: any[], filter: any): any {
    return array.filter(value => {
      for (let key in filter) {
        if (value[key] !== filter[key]) {
          return false;
        }
      }

      return true;
    });
  }
}