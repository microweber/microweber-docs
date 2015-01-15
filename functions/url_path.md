## url_path

url_path — returns the relative URL path

### Summary

    url_path($skip_ajax = false);

### Return Values

`String` with the url path relative to the site URL

### Usage
```php
// if you are on URL http://localhost/blog/post-title

$url_string = url_path();
print $url_string;

//prints "blog/post-title"
```


 