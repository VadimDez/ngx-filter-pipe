# Angular2 filter pipe [![npm version](https://badge.fury.io/js/ng2-filter-pipe.svg)](https://badge.fury.io/js/ng2-filter-pipe) ![Dependencies](https://david-dm.org/vadimdez/ng2-filter-pipe.svg)

> Filter arrays
 
Angular 2 pipeline for filtering arrays.

##### [Demo Page](https://vadimdez.github.io/ng2-filter-pipe/)

### Install

```
npm install ng2-filter-pipe --save
```

### Usage

In case you're using ```systemjs``` - see configuration [here](https://github.com/VadimDez/ng2-filter-pipe/blob/master/SYSTEMJS.md).

Import pipe and use it in your component

```js
import { Component } from '@angular/core';
import { Ng2FilterPipe } from 'ng2-filter-pipe';

@Component({
  selector: 'example-app',
  pipes: [Ng2FilterPipe],
  template: `
    <div>
        <input type="text" [(ngModel)]="stringFilter">
        <ul>
          <li *ngFor="let item of array | filterBy: stringFilter"></li>
          
          <!-- in case you want to show empty message -->
          <li *ngIf="(array | filterBy: stringFilter).length === 0">No matching elements</li>
        </ul>
    </div>  
  `
})

export class AppComponent {
  array: string[] = ['one', 'two', 'three', 'four'];
  stringFilter: string = '';
}
```

### Test

Run tests

```
npm test
```

### License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
