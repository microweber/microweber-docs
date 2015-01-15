## url_param

url_param — get a parameter from the URL

### Summary

    url_param($param_name, $skip_ajax = false);

### Return Values

`String` with the url parameter value or `false` if the parameter is not found

### Usage
```php
// If you are on URL http://localhost/my-page/state:California
// or on URL http://localhost/my-page/?state=California

$url_param = url_param('state');
var_dump($url_param);

//return "California" or false if nothing found

```
