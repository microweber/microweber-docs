## mw.reload_module
 `mw.reload_module` - reloads all modules that match given selector 
### Summary

```mw.reload_module(module, callback);```

### Return Values 
 This function makes Ajax calls and reloads all modules HTML 
### Example Usage 
`mw.reload_module('posts');`
 
 
```js

mw.reload_module('comments'); //reload by module type
mw.reload_module('#my_module_id'); //reload by id
mw.reload_module('.my_module_class'); //reload by class

```


## mw.reload_module_parent
 `mw.reload_module_parent` - reloads a module in the parent window (useful in the settings popup when you want to reload the edited module)
### Summary

 
```js

mw.reload_module_parent('comments'); //reload by module type
mw.reload_module_parent('#my_module_id'); //reload by id
mw.reload_module_parent('.my_module_class'); //reload by class

```


## mw.on.moduleReload

```js
mw.on.moduleReload("#my_module", function () {
alert('Module was reloaded')
});
```
