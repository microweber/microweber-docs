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
    print "Date created: " . $item['created_at']."</br>";
    // print_r($item);
} 
```

### Parameters

You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table.   

| key            | value        |
| -------------  |:-------------|
| id             |  the id of the content | 
| parent         |  the parent content id    | 
| content_type   |   Type of the content. Supported values are `page`,`post`,`product` or anything custom |
| subtype        |  Subtype of the content   | 
| url            |  the link to the content   |
| title          |  The html content saved in the database     |
| description    |   Description used for the content list    |
| content        |   The html content saved in the database    |
| position       |   The order position    |
| created_by     |   The id of the user that created the content     | 
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_at     |    The date of last update, supported values are any *strtotime* compatible date       | 
| is_active      |  flag for published or unpublished, default is `1` or `n`    |
| is_deleted     | flag for deleted content, values are `0` or `1`      |
| is_home        |  flag for homepage, values are `0` or `1`     |
| is_shop        |  flag for shop page, values are `0` or `1`   |
| require_login        |  flag to display the content only for logged users, values are `0` or `1`   |
| category        |  id for category   |



##### Parameters as string
```php
    $content = get_content("is_active=1");
    print_r($content);
```
##### Parameters as array
```php
    $params =  array("is_active"=>1);
    $content = get_content($params);
    print_r($content);
```

### Basic example
```php
//get 10 recent posts 
$params = array(
    'limit' => 10, 
    'order_by' => 'created_at desc',
    'content_type' => 'post', 
    'subtype' => 'post', 
    'is_active' => 1
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
    $last_edited_posts = get_content('content_type=post&order_by=updated_at desc');

### Filter by any field

    //get posts with title
    $search_for_posts = get_content('content_type=post&title=My post');

    //search pages with keyword
    $search_for_posts = get_content('content_type=page&keyword=About us');

 