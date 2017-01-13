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
    filter = filter.toLowerCase();
    return value => {
      return !filter || value.toLowerCase().indexOf(filter) !== -1;
    }
  }

  private filterByBoolean(filter) {
    return value => {
      return Boolean(value) === filter;
    }
  }

  private filterByObject(filter) {
    return value => {
      for (let key in filter) {

        if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
          return false;
        }

        let val = this.getValue(value, key);
        const type = typeof filter[key];
        let isMatching;

        if (type === 'boolean') {
          isMatching = this.filterByBoolean(filter[key])(val);
        } else if (type === 'string') {
          isMatching = this.filterByString(filter[key])(val);
        } else if (type === 'object') {
          isMatching = this.filterByObject(filter[key])(val);
        } else {
          isMatching = this.filterDefault(filter[key])(val);
        }

        if (!isMatching) {
          return false;
        }
      }

      return true;
    }
  }

  /**
   * Checks function's value if type is function otherwise same value
   * @param value
   * @returns {any}
   */
  /**
   *
   * @param object
   * @param key
   * @returns {any|void|(()=>any)|_Chain<T>|Function}
   */
  private getValue(object: any, key: any) {
    if (typeof object[key] !== 'function') {
      return object[key];
    }

    // object[key] = object[key].bind(object);
    return object[key]();
  }

  /**
   * Defatul filterDefault function
   *
   * @param filter
   * @returns {(value:any)=>boolean}
   */
  private filterDefault(filter) {
    return value => {
      return !filter || filter == value;
    }
  }

  private isNumber(value) {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }

  transform(array: any[], filter: any): any {
    const type = typeof filter;

    if (!array) {
      return array;
    }

    if (type === 'boolean') {
      return array.filter(this.filterByBoolean(filter));
    }

    if (type === 'string') {
      if (this.isNumber(filter)) {
        return array.filter(this.filterDefault(filter));
      }

      return array.filter(this.filterByString(filter));
    }

    if (type === 'object') {
      return array.filter(this.filterByObject(filter));
    }

    return array.filter(this.filterDefault(filter));
  }
}