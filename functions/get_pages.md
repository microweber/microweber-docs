## get_pages

Get the pages of your website

### Summary

    get_pages($params);

The `get_pages()` function is used in Microweber to get the pages from the database and return them as array. 

It's a wrapper to the [get_content](get_content.md "get_content") function.

Using it you can filter the pages by criteria and access all data related to it.

It takes a array or sting as parameter and returns the database records for the content.

By default `get_pages()` works with predefined content type "page", but you can use it to get any  content type.

### Return Values

`Array` with the page data or `false` if the no results are found




### Usage

    <?php
    $content = get_pages();

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


#### Params as array or string

You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table

##### Parameters as string

    $content = get_pages("is_active=1");
    print_r($content);

##### Parameters as array

    $params =  array("is_active"=>1);
    $content = get_pages($params);
    print_r($content);

## Examples
 

[See more examples](get_content.md "get_content")
