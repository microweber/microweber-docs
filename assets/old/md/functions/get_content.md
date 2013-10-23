##get_content
get_content — returns array of content items

##Synopsis
	get_content(string|array $params)
	

##Description
    Get array of content items (posts,pages,products,etc) from the content DB table.

##Return value
	 Array or False
	
##Example
###Get everything
```php
$content = get_content();
print_r($content);
``` 

###Get pages
```php
$content = get_content('content_type=page');

foreach ($content as $item) {
    print $item['id'];
    print $item['parent'];
    print $item['position'];
    print $item['title'];
    print $item['url'];
    print $item['description'];
    print $item['content'];
    print $item['content_type'];
    print $item['subtype'];
    print $item['created_on'];
    print $item['updated_on'];
    print $item['created_by'];
    print $item['edited_by'];
    print $item['layout_file'];
}
``` 


###Get posts or products
```php
//get posts
$posts = get_content('content_type=post');

//get products
$products = get_content('content_type=post&subtype=product');

```

###Limit and paging
```php
//get 5 posts
$posts = get_content('content_type=post&limit=5');

//get next 5 posts
$posts = get_content('content_type=post&limit=5&page=2');

```

###Order by any DB field
```php
//get the top pages 
$pages = get_content('content_type=page&order_by=position desc');

//get last edited posts
$last_edited_posts = get_content('content_type=post&order_by=updated_on desc');

```



###Filter the results by any field
```php
//get only main pages
$pages = get_content('content_type=page&parent=0');

//get posts from page with id: 3
$last_edited_posts = get_content('content_type=post&parent=3');

//you can also search by keyword
$search_for_posts = get_content('content_type=post&keyword=My post');

```

##Parameters and fields
You can pass parameters as string or as array

|parameter  | description |  optional values|
|--------------|--------------|--------------|
| id       | the id of the content|
| is_active | published or unpublished  | "y" or "n"
| parent    | get content with parent   | any id or 0
| created_by| get by author id| any user id
| created_on| the date of creation | `strtotime` compatible date
| updated_on| the date of last edit| `strtotime` compatible date
| content_type   | the type of the content   | "page" or "post", anything custom
| subtype   | subtype of the content    | "static","dynamic","post","product", anything custom
| url  | the link to the content   |
| title| Title of the content |
| content   | The html content saved in the database |
| description    | Description used for the content list |
| position  | The order position   |
| active_site_template   | Current template for the content |
| layout_file    | Current layout from the template directory |
| is_deleted| flag for deleted content  |  "n" or "y"
| is_home   | flag for homepage    |  "n" or "y"
| is_shop   | flag for shop page   |  "n" or "y"
| *category*    | id of the category search for content   |any valid category id
Those parameters are with the same names as the fields in the content DB table




##SEE ALSO
* [get_content_by_id](get_content_by_id "")
* [content_link](content_link "")
* [content_parents](content_parents "")
* [pages_tree](pages_tree "")
 