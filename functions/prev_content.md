## prev_content

prev_content — Gets previous content item

### Summary

    prev_content()

### Description

This function will get the previous page or post. If the post is in a category it will return the previous post from the same category.

### Return Values

`Array` with the previous content or `false` if the content is not found

### Usage

#### Get previous content of the current page or post

    $prev =  prev_content();  
    if($prev != false){
    print $prev['title'];
    print content_link($prev['id']);
    }

#### Get previous content of another post

    $prev =  prev_content($content_id=5);  
    if($prev != false){
    print $prev['title'];
    print content_link($prev['id']);
    }

 