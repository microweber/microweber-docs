## url_segment

url_segment — returns a segment of the URL

### Summary

    url_segment($seg_num,$page_url = false);

### Return Values

`String` with the url segment found or `false`

### Usage

```php
// By default this function will get segments from the current URL
// if you are on URL http://localhost/blog/post-title

$url_segment = url_segment(0);
print ($url_segment);
//prints "blog"

$url_segment = url_segment(1);
print ($url_segment);
//prints "post-title"
```


#### Get segments from custom URL
```php
//you can get URL segment from a string

$my_url = "http://localhost/shop/product-title";
$url_segment = url_segment(0, $my_url);
print ($url_segment);
//prints "shop"

$url_segment = url_segment(1, $my_url);
print ($url_segment);
//prints "product-title"
```

#### Get ALL segments as array
```php
// if you are on URL http://localhost/blog/post-title

$url_segments = url_segment(-1);
print_r($url_segments);
//prints array(2) { [0]=> string(4) "blog" [1]=> string(10) "post-title" }
```
 