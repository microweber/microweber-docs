## content_categories

content_categories — returns array categories for given content id

### Summary

    content_categories($content_id);

### Return Values

`Array` with the content categories or `false` if the content is not found

### Usage
```php
$categories = content_categories($content_id); 

if(!empty($categories)){
    foreach($categories as $category){
        print $category['id'];
        print $category['title'];
        // and more... print_r($category);
    }
} 
```