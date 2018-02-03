import { Component } from '@angular/core';
import { FilterPipe } from './shared/ngx-filter-pipe/ngx-filter.pipe';

class User {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;

    // you have to bind function in case you want to filter by getName function
    this.getName = this.getName.bind(this);
  }

  getName() {
    return `${ this.firstName } ${ this.lastName }`;
  }

  get name() {
    return `${ this.firstName } ${ this.lastName }`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  objectsFilter = { test: 'value', num: 1, bool: true, nested: { val: 1 } };
  objects = [
    {
      test: 'value',
      num: 1,
      bool: true,
      nested: {
        val: 1
      }
    },
    {
      test: 'value1',
      num: 12,
      bool: false
    },
    {
      test: 'value2',
      num: 25,
      bool: true
    },
    {
      test: 'value3',
      num: 111,
      bool: false,
      nested: {
        val: 2
      }
    }
  ];

  stringsFilter = 'a';
  strings = [
    'asd',
    'qwe',
    'zxc'
  ];

  numbersFilter = 1;
  numbers = [
    1,
    2,
    3,
    12,
    30,
    21,
    111
  ];

  boolFilter = true;
  booleans = [true, false];

  objectsWithGetters: User[] = [
    new User('first', 'last'),
    new User('firstName', 'lastName'),
    new User('Mario', 'Rossi')
  ];
  objectsWithGettersFilter: any = { name: null };

  constructor(private filter: FilterPipe) {
    // Use filter pipe in your component
    console.log(filter.transform(this.objects, { test: 'value' }));
  }
}
