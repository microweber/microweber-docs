## get_posts

Get the posts of your website

### Summary

    get_posts($params);

The `get_posts()` function is used in Microweber to get the posts from the database and return them as array. 

Using it you can filter the posts by criteria and access all data releated to it.

It takes a array or sting as parameter and returns the database records for the content.

By default `get_posts()` works with predefined content type "post", but you can use it to get any  content type.


This function is a wrapper to the [get_content](get_content.md "get_content") function.

### Return Values

`Array` with the post data or `false` if the no results are found

### Usage

    <?php
    $content = get_posts();

    foreach ($content as $item) {
        print "Title: " . $item['title']."</br>";
        print "The id is " . $item['id']."</br>";
        print "Link: " . $item['url']."</br>";
        print "Description: " . $item['description']."</br>";
        print "Date created: " . $item['created_at']."</br>";
        // print_r($item)."</br>";
    } 

### Return Values

Returns array if results are found of false

### Parameters

<!--?php print page_content('params/content'); ?-->

#### Params as array or string

You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table

##### Parameters as string

    $content = get_posts("is_active=1");
    print_r($content);

##### Parameters as array

    $params =  array("is_active"=>"1");
    $content = get_posts($params);
    print_r($content);

## Examples
 

[See more examples](get_content.md "get_content")
