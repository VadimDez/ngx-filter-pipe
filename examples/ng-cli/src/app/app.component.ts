import { Component } from '@angular/core';

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
}
