## get_content_by_id

get_content_by_id — returns array of content data or false

### Summary

    get_content_by_id($id);

### Return Values

`Array` with the post data or `false` if the content is not found

### Parameters

It takes content id as parameter and returns array or false if not found

### Usage
```php
//get a content item by id
$id = 3;
$content = get_content_by_id($id); 

if($content != false){
    print $content['id'];
	print $content['title'];  
	print $content['content'];  
   // and more... print_r($content);
}
```
 