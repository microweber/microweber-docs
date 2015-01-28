#mw.reload_module

mw.reload_module - reloads all modules that match given selector. Selector can be id, class, module type, etc.

##Summary

`mw.reload_module(module, callback);`


This function makes Ajax calls and reloads all modules HTML

## Example Usage

mw.reload_module('posts');

## Usage

Reload modules by different selectors

```
mw.reload_module('comments'); //reload by module type 
mw.reload_module('#my_module_id'); //reload by id
mw.reload_module('.my_module_class'); //reload by class
```
 

