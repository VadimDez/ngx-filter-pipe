# Angular2 filter pipe

> Filter arrays
 
Angular 2 pipeline for filtering arrays.

##### [Demo Page](https://vadimdez.github.io/ng2-filter-pipe/)

### Install

```
npm install ng2-filter-pipe --save
```

### Usage

In your `system.config.js`

Append to `map`

```js
var map = {
    ...
    'ng2-filter-pipe': 'node_modules/ng2-filter-pipe'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ng2-filter-pipe': { main: 'ng2-filter-pipe.min.js' }
}
````

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
