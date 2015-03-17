## next_content

next_content — Gets next content item

### Summary

    next_content()

### Description

This function will get the next page or post. If the post is in a category it will return the next post from the same category.

### Return Values

`Array` with the next content or `false` if the content is not found

### Usage

#### Get next content of the current page or post

    $next =  next_content();  
    if($next != false){
    print $next['title'];
    print content_link($next['id']);
    }

#### Get next content of another post

    $next =  next_content($content_id=5);  
    if($next != false){
    print $next['title'];
    print content_link($next['id']);
    }

 