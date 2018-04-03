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

  private filterByString(filter, strict?) {
    if (filter) {
      filter = filter.toLowerCase();
    }

    if (strict) {
      return value => {
        return !filter || (value ? ('' + value).toLowerCase() == filter : false);
      }
    } else {
      return value => {
        return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
      }
    }

  }


  private filterByBoolean(filter) {
    return value => {
      return Boolean(value) === filter;
    }
  }

  private filterByObject(filter, strict?: boolean, fields?: Array<any>) {
    return value => {


      for (let key in filter) {

        if (fields) {
          if (fields.includes(key)) {
            if (key === '$or') {
              if (!this.filterByOr(filter.$or)(this.getValue(value))) {
                return false;
              }
              continue;
            }
  
            let walker = value;
            let found = false;
            do {
              if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
              }
            } while (walker = Object.getPrototypeOf(walker));
  
            if (!found) {
              return false;
            }
  
            let val = this.getValue(value[key]);
            const filterType = typeof filter[key];
            let isMatching;
  
            if (filterType === 'boolean') {
              isMatching = this.filterByBoolean(filter[key])(val);
            } else if (filterType === 'string') {
              isMatching = this.filterByString(filter[key], strict)(val);
            } else if (filterType === 'object') {
              isMatching = this.filterByObject(filter[key], strict, fields)(val);
            } else {
              isMatching = this.filterDefault(filter[key])(val);
            }
  
            if (!isMatching) {
              return false;
            }
          }


        } else {
          if (key === '$or') {
            if (!this.filterByOr(filter.$or)(this.getValue(value))) {
              return false;
            }
            continue;
          }

          let walker = value;
          let found = false;
          do {
            if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
              found = true;
              break;
            }
          } while (walker = Object.getPrototypeOf(walker));

          if (!found) {
            return false;
          }

          let val = this.getValue(value[key]);
          const filterType = typeof filter[key];
          let isMatching;

          if (filterType === 'boolean') {
            isMatching = this.filterByBoolean(filter[key])(val);
          } else if (filterType === 'string') {
            isMatching = this.filterByString(filter[key], strict)(val);
          } else if (filterType === 'object') {
            isMatching = this.filterByObject(filter[key], strict, fields)(val);
          } else {
            isMatching = this.filterDefault(filter[key])(val);
          }

          if (!isMatching) {
            return false;
          }
        }

      }

      return true;
    }
  }

  /**
   * Filter value by $or
   */
  private filterByOr(filter: any[]): (value: any) => boolean {
    return (value: any) => {
      let hasMatch = false;
      const length = filter.length;

      const arrayComparison = (i) => {
        return value.indexOf(filter[i]) !== -1;
      };
      const otherComparison = (i) => {
        return value === filter[i];
      };
      const comparison = Array.isArray(value) ? arrayComparison : otherComparison;

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
   */
  private getValue(value: any): any {
    return typeof value === 'function' ? value() : value;
  }

  /**
   * Default filterDefault function
   */
  private filterDefault(filter: any): (value: any) => boolean {
    return (value: any) => {
      return filter === undefined || filter == value;
    }
  }

  private isNumber(value) {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }

  transform(array: any[], filter: { searchTerm: any, strict?: boolean, fields?: Array<any> }): any {
    const type = typeof filter.searchTerm;

    if (!array) {
      return array;
    }

    if (type === 'boolean') {
      return array.filter(this.filterByBoolean(filter.searchTerm));
    }

    if (type === 'string') {
      //   if (this.isNumber(filter)) {
      //      return array.filter(this.filterDefault(filter));
      //   }

      return array.filter(this.filterByString(filter.searchTerm, filter.strict));

    }

    if (type === 'object') {
      return array.filter(this.filterByObject(filter.searchTerm, filter.strict, filter.fields));
    }

    if (type === 'function') {
      return array.filter(filter.searchTerm);
    }

    return array.filter(this.filterDefault(filter.searchTerm));
  }
}
