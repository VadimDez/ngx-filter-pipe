<h1 align="center">Angular5+ Filter Pipe</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ngx-filter-pipe">
    <img src="https://img.shields.io/npm/dm/ngx-filter-pipe.svg?style=flat" alt="downloads">
  </a>
  
  <a href="https://www.npmjs.com/package/ng2-filter-pipe">
    <img src="https://img.shields.io/npm/dm/ng2-filter-pipe.svg?style=flat" alt="downloads">
  </a>
  
  <a href="https://badge.fury.io/js/ngx-filter-pipe">
    <img src="https://badge.fury.io/js/ngx-filter-pipe.svg" alt="npm version" height="18">
  </a>
  
  <a href="https://david-dm.org/vadimdez/ngx-filter-pipe" title="dependencies status">
    <img src="https://david-dm.org/vadimdez/ngx-filter-pipe.svg" height="18">
  </a>
  
  <a href="https://greenkeeper.io/" title="Greenkeeper badge">
    <img src="https://badges.greenkeeper.io/VadimDez/ngx-filter-pipe.svg" alt="Greenkeeper badge" />
  </a>
  
  <a href="https://www.paypal.me/vadimdez" title="Donate to this project using Paypal">
    <img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" />
  </a>
</p>

> Filter arrays
 
Angular 5+ pipeline for filtering arrays.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3748453/23809236/3276cf26-05cd-11e7-94f7-b4078104adbd.gif" width="300">
</p>

### Demo Page

[https://vadimdez.github.io/ngx-filter-pipe/](https://vadimdez.github.io/ngx-filter-pipe/)

or see demo code

[https://stackblitz.com/edit/ngx-filter-pipe](https://stackblitz.com/edit/ngx-filter-pipe)

### Usage

##### In HTML template

```
{{ collection | filterBy: searchTerm }}
```

### Arguments

| Param | Type | Details |
| --- | --- | --- |
| collection | `array` | The collection to filter |
| searchTerm  | `string` or `number` or `object` or `array` or `function` | Predicate used to filter items from `collection` |

## Install

```
npm install ngx-filter-pipe --save
```
*For Angular lower than 5 use version `1.0.2`*

## Setup

In case you're using ```SystemJS``` - see configuration [here](https://github.com/VadimDez/ngx-filter-pipe/blob/master/SYSTEMJS.md).

## Usage

Import `FilterPipeModule` to your module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
 
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, FilterPipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

And use pipe in your component
```ts
import { Component } from '@angular/core';
 
@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="userFilter.name" placeholder="name">
        <ul>
          <li *ngFor="let user of users | filterBy: userFilter">{{ user.name }}</li>
          
          <!-- in case you want to show empty message -->
          <li *ngIf="(users | filterBy: userFilter).length === 0">No matching elements</li>
        </ul>
    </div>  
  `
})
 
export class AppComponent {
  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  userFilter: any = { name: '' };
}
```

### $or matching
Use `$or` to filter by more then one values.

`$or` expects an `Array`.

In your component:
```ts
// your array
const languages = ['English', 'German', 'Russian', 'Italian', 'Ukrainian'];
// your $or filter
const filter = { $or: ['German', 'English'] };
```

In your template:
```html
<div *ngFor="let language of languages | filterBy: filter">
  {{ language }}
</div>
```

Result will be:
```html
<div>English</div>
<div>German</div>
```

#### $or example with nessted values
In your component:
```ts
// your array
const languages = [
  { language: 'English' },
  { language: 'German' },
  { language: 'Italian' }
];

// your $or filter
const filter = {
  language: {
    $or: ['Italian', 'English']
  }
};
```

In your template:
```html
<div *ngFor="let object of languages | filterBy: filter">
  {{ object.language }}
</div>
```

Result:
```html
<div>English</div>
<div>Italian</div>
```

#### $or example with multiple predicates

```
const objects = [
  { name: 'John' },
  { firstName: 'John' }
]

const filter = { $or: [{ name: 'John' }, { firstName: 'John' }] }
```
In your template:
```html
<div *ngFor="let object of objects | filterBy: filter">
  {{ object | json }}
</div>
```

Result:
```html
<div>{ name: 'John' }</div>
<div>{ firstName: 'John' }</div>
```

### Use FilterPipe in a component

Inject `FilterPipe` into your component and use it:

```ts
class AppComponent {
  objects = [
    { name: 'John' },
    { name: 'Nick' },
    { name: 'Jane' }
  ];
  
  constructor(private filter: FilterPipe) {
    let result = this.filter.transform(this.objects, { name: 'J' });
    console.log(result); // [{ name: 'John' }, { name: 'Jane' }]
  }
}
```

## Test

Run tests

```
npm test
```

## Contribute

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
