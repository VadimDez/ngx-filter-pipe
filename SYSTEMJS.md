## SystemJS

In your `system.config.js`

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
````
