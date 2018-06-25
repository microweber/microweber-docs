## save_content

save_content — Saves content in the database

### Summary

    save_content(array $data_to_save)

### Description

This function inserts and updates posts and pages in the database. It takes an string or array as argument and returns the content id of the saved item. It does not provide any user validation and permissions validation.

### Return Values

`Integer` with the saved content id or `false` if the content is not saved

#### Params and Database fields

You use those fields to store and structure your content

| key            | value        |
| -------------  |:-------------|
| id             | Content ID | 
| parent         | ID of parent page | 
| content_type   | Type of the content. Supported values are `page`, `post` or any custom value |
| subtype        | Subtype of the content. Supported values are `static`, `dynamic`, `post`, `product` or any custom value | 
| url            | The URL to the content |
| title          | Title of the content |
| description    | Description used for content listing |
| content        | The HTML content saved in the database |
| position       | The order position. Smaller numbers mean the content is given more priority |
| category       | ID or list of IDs of categories that should be associated with the content. You can also pass strings instead of IDs which will be treated as category names that will be found or created. |
| created_by     | ID of the user who created the content | 
| created_at     | The date of creation, supported values are any [strtotime](http://php.net/manual/en/function.strtotime.php) compatible date | 
| updated_at     | The date of last update, supported values are any [strtotime](http://php.net/manual/en/function.strtotime.php) compatible date |
| images         | Array of image URLs to be associated with the content. |
| download_remote_images | Flag to allow downloading images from remote URLs. Defaults to `0`, which only creates a link. | 
| is_active      | Published/unpublished flag, default is `1`. |
| is_deleted     | Flag for deleted content, values are `0` or `1` |
| is_home        | Flag for homepage, values are `0` or `1` |
| is_shop        | Flag for shop page, values are `0` or `1` |

[See all database fields](../developer-guide/sql-schema/content.md#content_table "")
 

### Usage

#### Save new content item

    $data_to_save = array(); 
    $data_to_save['id'] = 0; 
    $data_to_save['title'] = 'My title'; 
    $data_to_save['content'] = 'My content body'; 
    $data_to_save['content_type'] = 'page';   
    $new_id = save_content($data_to_save);

    print($new_id); // prints the id of the new content 

#### Update content

    $data_to_save = array(); 
    $data_to_save['id'] = 8; //if you set id the content will be updated 
    $data_to_save['title'] = 'My new title';  
    $new_id = save_content($data_to_save); 
    print ($new_id); // prints the id of the saved content (ex.8) 


 
