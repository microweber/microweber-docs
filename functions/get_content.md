## get_content

Get any kind of content from your site

### Summary

    get_content($params);

The `get_content()` function is used in Microweber to get the pages and posts from the database and return them as array. 

Using it you can filter the content by criteria and access all data releated to it.

It takes a array or sting as parameter and returns the database records for the content.

By default `get_content()` works with predefined content types such as "page" and "post", but you can use it to get any custom content type.

### Return Values

`Array` with the post data or `false` if the no results are found

### Usage
```php
$content = get_content();

foreach ($content as $item) {
    print "Title: " . $item['title']."</br>";
    print "The id is " . $item['id']."</br>";
    print "Link: " . $item['url']."</br>";
    print "Description: " . $item['description']."</br>";
    print "Date created: " . $item['created_on']."</br>";
    // print_r($item);
} 
```

### Parameters

You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table.  [See all parameters](../developer-guide/sql-schema/content.md "")

##### Parameters as string
```php
    $content = get_content("is_active=y");
    print_r($content);
```
##### Parameters as array
```php
    $params =  array("is_active"=>"y");
    $content = get_content($params);
    print_r($content);
```

### Basic example
```php
//get 10 recent posts 
$params = array(
    'limit' => 10, 
    'order_by' => 'created_on desc',
    'content_type' => 'post', 
    'subtype' => 'post', 
    'is_active' => 'y'
);

$recent_posts = get_content($params);

print "<ul>";
    foreach ($recent_posts as $item) {
        print "<li><a href=".$item['url'].">" . $item['title']."</a></li>";
    }
print "</ul>";
```
### Get posts or products

    //get posts
    $posts = get_content('content_type=post&subtype=post&limit=3');
    print_r($posts);

    //get products
    $products = get_content('content_type=post&subtype=product');
    print_r($products);

### Get by parent or category

    //get only main pages
    $pages = get_content('content_type=page&parent=0');

    //get posts with a parent page 
    $posts = get_content('content_type=post&parent=2');
    print_r($posts);

    //get posts from category 
    $posts_from_category = get_content('content_type=post&category=1');

### Limit and paging

     //get 5 posts
    $posts = get_content('content_type=post&limit=5');

    //get next 5 posts
    $posts = get_content('content_type=post&limit=5&page=2');

### Order by any DB field

     //get the top pages 
    $pages = get_content('content_type=page&order_by=position desc');

    //get last edited posts
    $last_edited_posts = get_content('content_type=post&order_by=updated_on desc');

### Filter by any field

    //get posts with title
    $search_for_posts = get_content('content_type=post&title=My post');

    //search pages with keyword
    $search_for_posts = get_content('content_type=page&keyword=About us');

 