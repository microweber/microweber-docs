## get_products

Get the products of your website

### Summary

    get_products($params);

The `get_products()` function is used in Microweber to get the products from the database and return them as array. 

Using it you can filter the products by criteria and access all data related to it.

It takes a array or sting as parameter and returns the database records for the content.

By default `get_products()` works with predefined content type "product", but you can use it to get any  content type.

### Return Values

`Array` with the product data or `false` if the no results are found

### Usage

    <?php
    $content = get_products();

    foreach ($content as $item) {
        print "Title: " . $item['title']."</br>";
        print "The id is " . $item['id']."</br>";
        print "Link: " . $item['url']."</br>";
        print "Description: " . $item['description']."</br>";
        print "Date created: " . $item['created_at']."</br>";
        // print_r($item)."</br>";
    } 

 