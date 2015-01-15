## content_link

content_link — returns url to a given content

### Summary

    content_link($id);

### Return Values

`string` with the content URL or `false` if the content is not found

### Usage
```php
//get a content link 
$content_link = content_link($id=3); 
print $content_link;

//prints http://example.com/blog/my-post
```
 