## SystemJS

In your `system.config.js`

Append to `map`

```js
var map = {
    ...
    'ngx-filter-pipe': 'node_modules/ngx-filter-pipe'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ngx-filter-pipe': { main: 'dist/index.js' }
}
````
