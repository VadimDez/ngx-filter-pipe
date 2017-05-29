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
    if (filter) {
      filter = filter.toLowerCase();
    }
    return value => {
      return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
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

        let val = this.getValue(value[key]);
        const filterType = typeof filter[key];
        let isMatching;

        if (filterType === 'boolean') {
          isMatching = this.filterByBoolean(filter[key])(val);
        } else if (filterType === 'string') {
          isMatching = this.filterByString(filter[key])(val);
        } else if (filterType === 'object') {
          isMatching = filter[key].hasOwnProperty('$or') ? this.filterByOr(filter[key])(val) : this.filterByObject(filter[key])(val);
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

  private filterByOr(filter: { $or: any[] }) {
    return (value: any) => {
      let hasMatch = false;
      const length = filter.$or.length;
      const isArray = value instanceof Array;

      const arrayComparison = (i) => {
        return value.indexOf(filter.$or[i]) !== -1;
      };
      const otherComparison = (i) => {
        return value === filter.$or[i];
      };
      const comparison = isArray ? arrayComparison : otherComparison;

      for (let i = 0; i < length; i++) {
        if (comparison(i)) {
          hasMatch = true;
          break;
        }
      }

      return hasMatch;
    };
  }

  /**
   * Checks function's value if type is function otherwise same value
   * @param value
   * @returns {any}
   */
  private getValue(value: any) {
    return typeof value === 'function' ? value() : value;
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

    if (type === 'function') {
      return array.filter(filter);
    }

    return array.filter(this.filterDefault(filter));
  }
}