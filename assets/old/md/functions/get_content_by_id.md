##get_content_by_id
get_content_by_id — returns array of content item or false

##Synopsis
	get_content_by_id(int $id)
	
##Return value
	 Array or False
	
##Example

```php
//get a content item
$content = get_content_by_id(3);
print $content['title'];

print_r($content);
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
    [session_id] => 
)

```
  

 

##SEE ALSO
* [get_content](get_content "")
 
 