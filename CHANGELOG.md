# Changelog

## 3.0.1 - 08.09.2024

- [[#158](https://github.com/VadimDez/ngx-filter-pipe/issues/158)] - Limited to only 20.4.0 node version
- [[#162](https://github.com/VadimDez/ngx-filter-pipe/pull/162)] - Remove "engines" to fix #158

## 3.0.0 - 16.05.2024

- [[#154](https://github.com/VadimDez/ngx-filter-pipe/pull/154)] - Update to Angular 17 & Ivy
- [[#153](https://github.com/VadimDez/ngx-filter-pipe/issues/153)] - Impossible to use in Angular 16

## 2.1.3

- [[#77](https://github.com/VadimDez/ngx-filter-pipe/issues/77)] - Upgrade to Angular 8

## 2.1.2

- [[#65](https://github.com/VadimDez/ngx-filter-pipe/issues/65)] - Filter by two variables didn't work
- [[#69](https://github.com/VadimDez/ngx-filter-pipe/pull/69)] - fix filter with multiple fields

### Improvements

Now `$or` can filter with multiple predicates

```ts
class AppComponent {
  objects = [{ name: 'John' }, { firstName: 'John' }];

  constructor(private filter: FilterPipe) {
    let result = this.filter.transform(this.objects, {
      $or: [{ name: 'John' }, { firstName: 'John' }],
    });
    console.log(result); // [{ name: 'John' }, { firstName: 'John' }]
  }
}
```

## 2.1.1

- [[#67](https://github.com/VadimDez/ngx-filter-pipe/issues/67)] - Filtering Array with null Nested Objects
- [[#68](https://github.com/VadimDez/ngx-filter-pipe/pull/68)] - fix filter when nested object is null

## 2.1.0

- [[#55](https://github.com/VadimDez/ngx-filter-pipe/pull/55)] - Made pipe impure to detect changes in arrays and objects
- [[#54](https://github.com/VadimDez/ngx-filter-pipe/issues/54)] - Change detection not firing with object

## 2.0.0

- [[#51](https://github.com/VadimDez/ngx-filter-pipe/pull/51)] - Restructure
- [[#42](https://github.com/VadimDez/ngx-filter-pipe/issues/42)] - AOT support
- [[#44](https://github.com/VadimDez/ngx-filter-pipe/issues/44)] - Angular 5

### Breaking change

_Bundle location is changed, therefore SYSTEMJS config should be updated_

Append to `map`

```js
var map = {
    ...
    'ngx-filter-pipe': 'node_modules/ngx-filter-pipe/bundles'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ngx-filter-pipe': { defaultExtension: 'js' }
}
```

## 1.0.2

- [[#50](https://github.com/VadimDez/ngx-filter-pipe/issues/50)] - How to call filterPipe transform from Component ?

### Use FilterPipe in a component

Inject `FilterPipe` into your component and use it:

```ts
class AppComponent {
  objects = [{ name: 'John' }, { name: 'Nick' }, { name: 'Jane' }];

  constructor(private filter: FilterPipe) {
    let result = this.filter.transform(this.objects, { name: 'J' });
    console.log(result); // [{ name: 'John' }, { name: 'Jane' }]
  }
}
```

## 1.0.1

- [[#46](https://github.com/VadimDez/ngx-filter-pipe/issues/46)] - Filter by property/method on prototype chain.
- [[#47](https://github.com/VadimDez/ngx-filter-pipe/pull/47)] - walk the prototype chain to check if field/property exists.

## 1.0.0

- [[#36](https://github.com/VadimDez/ngx-filter-pipe/issues/36)] - Changed name tp `ngx-filter-pipe`.
- [[#38](https://github.com/VadimDez/ngx-filter-pipe/issues/38)] - Added UMD bundle.

### Breaking changes

- Module name was changed from `Ng2FilterPipeModule` to `FilterPipeModule`.
- UMD bundle for `SYSTEMJS` was added. Use `/dist/bundles/ngx-filter-pipe.umd.js` instead of `/dist/index.js`.

## 0.1.10

- [[#31](https://github.com/VadimDez/ng2-filter-pipe/issues/31)] - How to filter by two variables of the same array.
- [[#4](https://github.com/VadimDez/ng2-filter-pipe/issues/4)] - Add \$or operator.

## 0.1.9

- [[#32](https://github.com/VadimDez/ng2-filter-pipe/issues/32)] - Filter fails when filter value is zero

## 0.1.8

- Removed warning in Angular 4+

## 0.1.7

- [[#28](https://github.com/VadimDez/ng2-filter-pipe/issues/28)] - Filter number by string
- Removed post install script

## 0.1.6

- [[#24](https://github.com/VadimDez/ng2-filter-pipe/pull/24)] - Ability to pass in a function as a filter

## 0.1.5

- [[#15](https://github.com/VadimDez/ng2-filter-pipe/issues/15)] - Filter by object key which can be equals null

## 0.1.4

- [[#17](https://github.com/VadimDez/ng2-filter-pipe/issues/17)] - Can't filter by getter properties of classes

## 0.1.3

- [[#14](https://github.com/VadimDez/ng2-filter-pipe/issues/14)] - sh: typings: command not found

## 0.1.2

- [[#11](https://github.com/VadimDez/ng2-filter-pipe/issues/11)] - Fix filter by object bug

## 0.1.1

- [[#7](https://github.com/VadimDez/ng2-filter-pipe/issues/7)] - Fails if trying to filter null

## 0.1.0

- [[#9](https://github.com/VadimDez/ng2-filter-pipe/issues/9)] - Update dependencies
- [[#10](https://github.com/VadimDez/ng2-filter-pipe/issues/10)] - Added filter by boolean

### Breaking changes

Now instead of declaring pipe you need to import `Ng2FilterPipeModule` to your module

```ts
@NgModule({
  imports: [BrowserModule, Ng2FilterPipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
```

## 0.0.4

- [[#6](https://github.com/VadimDez/ng2-filter-pipe/issues/6)] - Update to Angular RC6
- Removed version lock from peer dependency `@angular/core`

## 0.0.3

- [[#2](https://github.com/VadimDez/ng2-filter-pipe/issues/2)] - updated @angular/core to RC.5

## 0.0.2

- Case insensitive string filtering
- Added simple typings file
- Changed main file in package
