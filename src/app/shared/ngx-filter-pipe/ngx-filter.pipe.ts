/**
 * Created by vadimdez on 28/06/16.
 */
import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  static isFoundOnWalking(value: any, key: any) {
    let walker = value;
    let found = false;
    do {
      if (
        walker.hasOwnProperty(key) ||
        Object.getOwnPropertyDescriptor(walker, key)
      ) {
        found = true;
        break;
      }
    } while ((walker = Object.getPrototypeOf(walker)));

    return found;
  }

  static isNumber(value: any) {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }

  /**
   * Checks function's value if type is function otherwise same value
   */
  static getValue(value: any): any {
    return typeof value === 'function' ? value() : value;
  }

  private filterByString(filter: string) {
    if (filter) {
      filter = filter.toLowerCase();
    }
    return (value: any) =>
      !filter ||
      (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
  }

  private filterByBoolean(filter: boolean) {
    return (value: any) => Boolean(value) === filter;
  }

  private filterByObject(filter: any) {
    return (value: any) => {
      for (const key in filter) {
        if (key === '$or') {
          if (!this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
            return false;
          }
          continue;
        }

        if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
          return false;
        }

        if (!this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
          return false;
        }
      }

      return true;
    };
  }

  private isMatching(filter: any, val: any) {
    switch (typeof filter) {
      case 'boolean':
        return this.filterByBoolean(filter)(val);
      case 'string':
        return this.filterByString(filter)(val);
      case 'object':
        return this.filterByObject(filter)(val);
    }
    return this.filterDefault(filter)(val);
  }

  /**
   * Filter value by $or
   */
  private filterByOr(filter: any[]): (value: any) => boolean {
    return (value: any) => {
      const length = filter.length;

      const arrayComparison = (i: any) => value.indexOf(filter[i]) !== -1;
      const otherComparison = (i: any) => this.isMatching(filter[i], value);
      const comparison = Array.isArray(value)
        ? arrayComparison
        : otherComparison;

      for (let i = 0; i < length; i++) {
        if (comparison(i)) {
          return true;
        }
      }

      return false;
    };
  }

  /**
   * Default filterDefault function
   */
  private filterDefault(filter: any): (value: any) => boolean {
    return (value: any) => filter === undefined || filter == value;
  }

  transform(array: any[], filter: any): any {
    if (!array) {
      return array;
    }

    switch (typeof filter) {
      case 'boolean':
        return array.filter(this.filterByBoolean(filter));
      case 'string':
        if (FilterPipe.isNumber(filter)) {
          return array.filter(this.filterDefault(filter));
        }
        return array.filter(this.filterByString(filter));
      case 'object':
        return array.filter(this.filterByObject(filter));
      case 'function':
        return array.filter(filter);
    }
    return array.filter(this.filterDefault(filter));
  }
}
