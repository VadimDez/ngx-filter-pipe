# Changelog

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