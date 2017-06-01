# Changelog

## 0.1.10
* [[#31](https://github.com/VadimDez/ng2-filter-pipe/issues/31)] - How to filter by two variables of the same array.
* [[#4](https://github.com/VadimDez/ng2-filter-pipe/issues/4)] - Add $or operator.

## 0.1.9
* [[#32](https://github.com/VadimDez/ng2-filter-pipe/issues/32)] - Filter fails when filter value is zero

## 0.1.8
* Removed warning in Angular 4+

## 0.1.7
* [[#28](https://github.com/VadimDez/ng2-filter-pipe/issues/28)] - Filter number by string
* Removed post install script

## 0.1.6
* [[#24](https://github.com/VadimDez/ng2-filter-pipe/pull/24)] - Ability to pass in a function as a filter

## 0.1.5
* [[#15](https://github.com/VadimDez/ng2-filter-pipe/issues/15)] - Filter by object key which can be equals null

## 0.1.4
* [[#17](https://github.com/VadimDez/ng2-filter-pipe/issues/17)] - Can't filter by getter properties of classes

## 0.1.3
* [[#14](https://github.com/VadimDez/ng2-filter-pipe/issues/14)] - sh: typings: command not found

## 0.1.2
* [[#11](https://github.com/VadimDez/ng2-filter-pipe/issues/11)] - Fix filter by object bug

## 0.1.1
* [[#7](https://github.com/VadimDez/ng2-filter-pipe/issues/7)] - Fails if trying to filter null

## 0.1.0
* [[#9](https://github.com/VadimDez/ng2-filter-pipe/issues/9)] - Update dependencies
* [[#10](https://github.com/VadimDez/ng2-filter-pipe/issues/10)] - Added filter by boolean

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

* [[#6](https://github.com/VadimDez/ng2-filter-pipe/issues/6)] - Update to Angular RC6
* Removed version lock from peer dependency `@angular/core`


## 0.0.3

* [[#2](https://github.com/VadimDez/ng2-filter-pipe/issues/2)] - updated @angular/core to RC.5

## 0.0.2

* Case insensitive string filtering
* Added simple typings file
* Changed main file in package