## SystemJS

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