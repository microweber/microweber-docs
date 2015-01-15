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
| id             |  the id of the content | 
| parent         |  the parent page id    | 
| content_type   |   Type of the content. Supported values are `page` or `post`,anything custom subtype Subtype of the content. Supported values are `static`,`dynamic`,`post`,`product`, anything custom   | 
| url            |  the link to the content   |
| title          |  The html content saved in the database     |
| description    |   Description used for the content list    |
| content        |   The html content saved in the database    |
| position       |   The order position    |
| created_by     |   The id of the user that created the content     | 
| created_on     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_on     |    The date of last update, supported values are any *strtotime* compatible date       | 
| is_active      |  flag for published or unpublished, default is `y` or `n`    |
| is_deleted     | flag for deleted content, values are `n` or `y`      |
| is_home        |  flag for homepage, values are `n` or `y`     |
| is_shop        |  flag for shop page, values are `n` or `y`   |

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


 
