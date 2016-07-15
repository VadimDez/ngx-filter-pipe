import { Component } from '@angular/core';
import { Ng2FilterPipe } from './shared/ng2-filter.pipe';
import { MDL } from './shared/mdl';

@Component({
  moduleId: module.id,
  selector: 'ng2-filter-pipe-app',
  templateUrl: 'ng2-filter-pipe.component.html',
  styleUrls: ['ng2-filter-pipe.component.css'],
  directives: [MDL],
  pipes: [Ng2FilterPipe]
})

export class Ng2FilterPipeAppComponent {

  objectsFilter = { test: 'value', num: 1, nested: { val: 1 } };
  objects = [
    {
      test: 'value',
      num: 1,
      nested: {
        val: 1
      }
    },
    {
      test: 'value1',
      num: 12
    },
    {
      test: 'value2',
      num: 25
    },
    {
      test: 'value3',
      num: 111,
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
  ]
}
