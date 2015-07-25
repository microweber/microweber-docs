# REST API


You can use the HTTP api to comunicate with the backend. This allows you to build external applications or save and get data via AJAX


## Adding API endpoint

You can add new api endpoint with the [api_expose](../functions/api_expose.md "api_expose") and [api_expose_admin](../functions/api_expose_admin.md "") 

*Example* `userfiles/modules/my_module/functions.php`
```php
api_expose('do_stuff');
function do_stuff($params=false){
var_dump($params);
}

api_expose_admin('do_admin_stuff');
function do_admin_stuff($params=false){
var_dump($params);
}
```

This will open public API endpoint at `example.com/api/do_stuff` and admin API endpoint at `example.com/api/do_admin_stuff`


# Getting available API endpoints

You can get all existing endpoints as array

```php
var_dump(api_index());
```