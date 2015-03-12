## get_pictures

Returns array of content pictures

### Summary

    get_pictures($params);

### Usage

Get the pictures of a post
```php

    $content_id = 1;
    $pictures = get_pictures($content_id);

    if(!empty($pictures)){
    	foreach($pictures as $picture){
    	print "<img src=".$picture['filename']." />";
    	print "<div>".$picture['title']."</div>";
       }
    }
    
```