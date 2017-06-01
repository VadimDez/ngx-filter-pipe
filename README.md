<h1 align="center">Angular2+ Filter Pipe</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ng2-filter-pipe">
    <img src="https://img.shields.io/npm/dm/ng2-filter-pipe.svg?style=flat" alt="downloads">
  </a>

  <a href="https://travis-ci.org/VadimDez/ng2-filter-pipe" alt="build">
    <img src="https://travis-ci.org/VadimDez/ng2-filter-pipe.svg?branch=master" height="18">
  </a>
  
  <a href="https://badge.fury.io/js/ng2-filter-pipe">
    <img src="https://badge.fury.io/js/ng2-filter-pipe.svg" alt="npm version" height="18">
  </a>
  
  <a href="https://david-dm.org/vadimdez/ng2-filter-pipe" title="dependencies status">
    <img src="https://david-dm.org/vadimdez/ng2-filter-pipe.svg" height="18">
  </a>
</p>

> Filter arrays
 
Angular 2+ pipeline for filtering arrays.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3748453/23809236/3276cf26-05cd-11e7-94f7-b4078104adbd.gif" width="300">
</p>

### Demo Page

[https://vadimdez.github.io/ng2-filter-pipe/](https://vadimdez.github.io/ng2-filter-pipe/)

## Install

```
npm install ng2-filter-pipe --save
```

## Usage

In case you're using ```systemjs``` - see configuration [here](https://github.com/VadimDez/ng2-filter-pipe/blob/master/SYSTEMJS.md).

Import `Ng2FilterPipeModule` to your module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
 
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
 
@NgModule({
  imports: [BrowserModule, Ng2FilterPipeModule],
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
          <li *ngIf="(users | filterBy: stringFilter).length === 0">No matching elements</li>
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

Result:
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

## Test

Run tests

```
npm test
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
