## db_get

Allows you to get data from ANY table in the database, and caches the result.

### Summary

   db_get($params);

### Usage

    $content = db_get('table=content');

    foreach ($content as $item) {
        print $item['id'];
        print $item['title'];
        print $item['url'];
        print $item['description'];
        print $item['content'];

    } 

### Parameters

You can pass parameters as `string` or as `array`. They can be field names in the database table defined with the `table` parameter.

| parameter            | description        |   usage        |
| -------------  |:-------------|:-------------|
| `table`            |  the name of your database table	 |  db_get('table=content') |
| `single`            |  if set to true will return only the 1st row as array	 | db_get('table=content&id=5&single=true') |
| `orderby`            | you can order by any field name		 |  db_get('table=content&orderby=id desc') |
| `count`            | if set to true it will return the results count		 |  db_get('table=content&count=true') |
| `limit`            | set limit of the returned dataset, use "no_limit" to return all results			 |  db_get('table=content&limit=10') |
| `page`            | set offset of the returned dataset				 |  db_get('table=content&limit=10&page=2') |
| `page_count`            | returns the number of result pages				 |  db_get('table=content&limit=10&page_count=true') |
| `$fieldname`            | you can filter data by passing your fields as params	|  db_get('table=some_table&my_field=value') |
| `keyword`            | if set it will search for keyword		| db_get('table=content&limit=10&keyword=my title') |
| `nocache`            |  if set to true will skip caching the db result		| db_get('table=content&nocache=true') |



 
### Get everything

     //get 5 users
    $users = db_get('table=users&limit=5');

    //get next 5 users
    $users = db_get('table=users&limit=5&page=2');

    //get 5 categories
    $categories = db_get('table=categories&limit=5');

    //get 5 comments
    $comments = db_get('table=comments&limit=5');

 