<a id="content_table"></a>

## Content table
This table stores pages and posts 

| key            | value        |
| -------------  |:-------------|
| id             |  the id of the content | 
| parent         |  the parent content id    | 
| content_type   |   Type of the content. Supported values are `page` or `post`,anything custom subtype Subtype of the content. Supported values are `static`,`dynamic`,`post`,`product`, anything custom   | 
| url            |  the link to the content   |
| title          |  The html content saved in the database     |
| description    |   Description used for the content list    |
| content        |   The html content saved in the database    |
| position       |   The order position    |
| created_by     |   The id of the user that created the content     | 
| created_at     |   The date of creation, supported values are any *strtotime* compatible date      | 
| updated_at     |    The date of last update, supported values are any *strtotime* compatible date       | 
| is_active      |  flag for published or unpublished, default is `1` or `0`    |
| is_deleted     | flag for deleted content, values are `0` or `1`      |
| is_home        |  flag for homepage, values are `0` or `1`     |
| is_shop        |  flag for shop page, values are `0` or `1`   |
