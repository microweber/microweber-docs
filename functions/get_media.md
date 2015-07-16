## get_pictures

Returns array of content pictures

### Summary

    get_media($params);

### Usage

Get the media of a post
```php

   
    $pictures = get_media("rel_type=content&rel_id=1");

    if(!empty($pictures)){
    	foreach($pictures as $picture){
    	print "<img src=".$picture['filename']." />";
    	print "<div>".$picture['title']."</div>";
       }
    }
    
```