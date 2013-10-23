##save_content
save_content — saves content


##Synopsis
	save_content(array $data_to_save)
	

##Description
    Saves content in the database
##Return value
	Integer (id of the saved content)
	

##Params and Database fields  
You use this fields to store and structure your content

|parameter  | description |  optional value|
|--------------|--------------|--------------|
| id       | the id of the content|
| is_active | published or unpublished  | "y" or "n"
| parent    | get content with parent   | any id or 0
| created_by| get by author id| any user id
| created_on| the date of creation | `strtotime` compatible date
| updated_on| the date of last edit| `strtotime` compatible date
| expires_on|  date field| `strtotime` compatible date
| url  | the link to the content   |
| title| Title of the content |
| content   | The html content saved in the database |
| description    | Description used for the content list |
| position  | The order position   |
| content_type   | the type of the content   | "page" or "post", anything custom
| subtype   | subtype of the content    | "static","dynamic","post","product", anything custom
| subtype_value   | *not in use by default*    |anything custom
| active_site_template   | Current template for the content |
| layout_file    | Current layout from the template directory |
| is_deleted| flag for deleted content  |  "n" or "y"
| is_home   | flag for homepage    |  "n" or "y"
| is_shop   | flag for shop page   |  "n" or "y"
| is_pinged   | flag if the search engines have been pinged   |  "n" or "y"
| content_meta_title    | Meta title to use |
| content_meta_keywords    | Meta keywords |
| layout_name    | *not in use by default* |
| layout_style    | *not in use by default* |
| require_login    | *not in use by default* |
| original_link    | *not in use by default* |
| session_id    | *the session id of the last user* |
| *category*    | id of a category to save this content to   | put any valid category id
| *categories*    | array of category ids to save this content to   | put any valid category ids as array


##Examples
###Save new content item
```php
$data_to_save = array();
$data_to_save['id'] = 0;
$data_to_save['title'] = 'My title';
$data_to_save['content'] = 'My content body';
$data_to_save['content_type'] = 'page';


$new_id = save_content($data_to_save);
print ($new_id); // prints the id of the new content
``` 

###Update content
```php
$data_to_save = array();
$data_to_save['id'] = 8; //if you set id the content will be updated
$data_to_save['title'] = 'My new title';

$new_id = save_content($data_to_save);
print ($new_id); // prints the id of the saved content (ex.8)
``` 

###Get the content that you just saved
```php
//get the new content item
$new_content = get_content_by_id($new_id);
print_r($new_content);

//note that some fields are filled automatically
Array
(
    [id] => 8
    [updated_on] => 2013-09-17 11:25:10
    [created_on] => 2013-09-17 11:25:10
    [expires_on] => 
    [created_by] => 1
    [edited_by] => 1
    [content_type] => page
    [url] => my-title-20130917112510
    [content_filename] => 
    [title] => My title
    [parent] => 0
    [description] => 
    [content_meta_title] => 
    [content_meta_keywords] => 
    [position] => 3
    [content] => My content body
    [is_active] => y
    [is_home] => n
    [is_pinged] => n
    [is_shop] => n
    [is_deleted] => n
    [draft_of] => 
    [require_login] => n
    [subtype] => 
    [subtype_value] => 
    [original_link] => 
    [layout_file] => 
    [layout_name] => 
    [layout_style] => 
    [active_site_template] => 
    [session_id] => ag1d6m4i3tmi94pandja95osn4
)
```
 
##Note
> This function is also available via the REST api at http://yoursite/api/save_content . If you save content via AJAX/REST, then first you must login. The user that saves the content via ajax must be admin, or the content must be saved in a category that allows it. 


##SEE ALSO
* [get_content_by_id](get_content_by_id "")
* [content_link](content_link "")
* [content_parents](content_parents "")
* [pages_tree](pages_tree "")
 