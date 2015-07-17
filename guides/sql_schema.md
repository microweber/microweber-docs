# SQL Schema

Description of some default tables that are created on install. 



You can use the [db_get](../functions/db_get.md "db_get"), [db_save](../functions/db_save.md "db_save") and [db_delete](../functions/db_delete.md "db_delete") functions to work with data from those tables.


You can also create and use custom database tables.

[Read more about making custom tables here](modules_schema.md).



## Content table
This table stores pages and posts 

Use the [get_content](../functions/get_content.md "get_content"), [save_content](../functions/save_content.md "save_content") or [delete_content](../functions/delete_content.md "delete_content") functions to work with data from the content table.

```$data = db_get("table=content")```

| key            | value        |
| -------------  |:-------------|
| id             |  the id of the content | 
| parent         |  the parent content id    | 
| url            |  the link to the content   |
| title          |  The html content saved in the database     |
| description    |   Description used for the content list    |
| content        |   The html content saved in the database    |
| content_type   |   Type of the content. Supported values are `page` or `post`,anything custom    | 
| subtype | Subtype of the content. Supported values are `static`,`dynamic`,`post`,`product`, anything custom
| position       |   The order position    |
| is_active      |  flag for published or unpublished, default is `1` or `0`    |
| is_deleted     | flag for deleted content, values are `0` or `1`      |
| is_home        |  flag for homepage, values are `0` or `1`     |
| is_shop        |  flag for shop page, values are `0` or `1`   |
| active_site_template        |  indicates the current template    |
| layout_file        |  indicates the content layout    |
| require_login        |  flag if the content requires login to view, values are `0` or `1`      
| subtype_value        |  field to use for custom content processing    |
| custom_type        |  field to use for custom content processing    |
| custom_type_value        |  field to use for custom content processing    |
| content_meta_title        |  Meta title of the content   |
| content_meta_keywords        |  Meta keywords of the content    |
| content_meta_title        |  Meta title of the content    |
| created_by     |   The id of the user that created the content     | 
| updated_at     |    The date of last update, supported values are any *strtotime* compatible date       |
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
 

## Categories table
This table stores categories 

Use the [get_categories](../functions/get_categories.md "get_categories"), [save_category](../functions/save_category.md "save_category") or [delete_category](../functions/delete_category.md "delete_category") functions to work with data from the categories table.

```$data = db_get("table=categories")```

| key            | value        |
| -------------  |:-------------|
| id             |  the id of the category | 
| rel_type             |  the type of items in the category, for example `content` relates to the `content` table | 
| rel_id             |  the related item `id` from the `rel_type` parameter | 
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_at     |    The date of last update, supported values are any *strtotime* compatible date   |
| created_by     |   The id of the user that created the category     | 
| edited_by     |   The id of the user that changed the category     | 
| parent_id             |  the id of the category parent, default is `0` | 
| title             |  the title of the category | 
| description             |  the description of the category | 
| content             |  the html text of the category | 
| position             |  order of the category | 
 
 
 
## Categories Items table
It contains the associated items for each category

```$data = db_get("table=categories_items")```


| key            | value        |
| -------------  |:-------------|
| id             |  the id of the association | 
| rel_type     |   the related database table     | 
| rel_id     |    the related ID of the related database table  |
| parent_id     |   The id of the parent category     | 
 


## Options table
It contains global and custom settings

Use the [get_option](../functions/get_option.md "get_option") and [save_option](../functions/save_option.md "save_option") to work with the options.

```$data = db_get("table=options")```


| key            | value        |
| -------------  |:-------------|
| id             |  the id of the option | 
| option_key     |   key for option     | 
| option_value     |    value for the associated  `option_key` |
| option_group     |   custom option group     | 



 
## Media table
It contains media associated with content from another database table

Use the [get_media](../functions/get_media.md "get_media"), [save_media](../functions/save_media.md "save_media") or [delete_media](../functions/delete_media.md "delete_media") functions to work with data from the media table.


```$data = db_get("table=media")```


| key            | value        |
| -------------  |:-------------|
| id             |  the id of the option | 
| rel_type     |   the related database table, ex. `content`,`users`,`categories`     | 
| rel_id     |    the related ID of the related database table  |
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_at     |    The date of last update, supported values are any *strtotime*
| created_by     |   The id of the user that created the category     | 
| edited_by     |   The id of the user that changed the category     | 
| session_id     |   The session_id of the last edit    | 
| media_type     |    type of media ex. picture, video, audio, file, anything custom  |
| position             |  order of the category | 
| title             |  the title of the media | 
| description             |  the description of the media | 
| filename             |  full or relative url path | 
| embed_code             |  custom embed_code for external media content | 




## Custom fields table
It contains custom associated with items from another database table

Use the [get_custom_fields](../functions/get_custom_fields.md "get_custom_fields"), [save_custom_field](../functions/save_custom_field.md "save_custom_field") or [delete_media](../functions/delete_custom_field.md "delete_custom_field") functions to work with data from the custom fields table.


```$data = db_get("table=custom_fields")```


| key            | value        |
| -------------  |:-------------|
| id             |  the id of the field | 
| rel_type     |   the related database table, ex. `content`,`users`,`categories`     | 
| rel_id     |    the related ID of the related database table  |
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_at     |    The date of last update, supported values are any *strtotime*
| created_by     |   The id of the user that created the category     | 
| edited_by     |   The id of the user that changed the category     | 
| name             |  the name of the field | 
| name_key             |  lowercase value of the `name` field | 
| position             |  order of the field | 
| type             |  type of the field | 


 



 






 