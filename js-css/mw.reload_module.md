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



 