# Saving and getting module data



## Defining Schema
When installing a module Microweber checks the `config.php` file for the `$config['tables']` array.
Each key represents a table name and its value is an array of column definitions.
The ID column is automatically created and all columns are nullable by default.

*Example* `userfiles/modules/paintings/config.php`
```
$config = array();
$config['name'] = "My Paintings";
$config['author'] = "Pablo Picasso";
$config['ui'] = true; 
$config['ui_admin'] = true; 
$config['position'] = "98";
$config['version'] = "0.01";
$config['tables'] = array(
        'paintings' => array(
            'id' => 'integer',
        	'name' => 'string',
        	'price' => 'float',
        	'description' => 'text',
        	'created_by' => 'integer',
            'created_at' => 'dateTime',
        )
);
```

## Custom Tables

For more options of the data storage you can read here.

[Read more about making custom tables here](modules_schema.md).


### Getting and saving data

You can use the [db_get](../functions/db_get.md "db_get"), [db_save](../functions/db_save.md "db_save") and [db_delete](../functions/db_delete.md "db_delete") functions to work with data from your those tables.

```
// Getting
$data = db_get("table=paintings")

// Saving
$save = array(
	'name' => 'Mona Lisa',
	'description' => 'Paiting by Leonardo da Vinci'
);
$id = db_save('paintings', $save);

// Deleting
db_delete('paintings', $id);

```



#### Create
The `db_save` function accepts table name as first argument and row data as a second argument. In order to create rows in a table simply don't specify an ID.




*Example*
```
$data = array(
	'name' => 'Three Musicians',
	'price' => 2700,
	'description' => 'My greatest work'
);
db_save('paintings', $data);
```

#### <a name="crud-read"></a> Read
Call the `db_get` function and set the `table` key in the argument array to retrieve rows from a given database table.

*Example*
```
$rows = db_get(array('table' => 'paintings'));
```

Set the `single` key to `true` in the argument array for the function to return a single row.
Any non-reserved key name is treated as a `WHERE` condition for given column name. Reference the [`db_get` function docs](../functions/db_get.md) for more details.

*Example*
```
$row = db_get(array(
	'table' => 'paintings',
	'name' => 'Three Musicians',
	'single' => true
	));
```

Alternatively the above query can be written like that `db_get('table=paintings&name=Three Musicians&single=true')`



#### Update
If the `db_save` function receives an array containing an `id` key it performs an update operation on the corresponding row.

*Example*
```php
// Gets single row with id = 3
$row = db_get(array(
	'table' => 'paintings',
	'id' => 3,
	'single' => true
	));
$row['title'] = 'My Awesome Painting';
echo 'Updating row with ID ', $row['id'];
db_save('paintings', $row);
```

#### Delete
The `db_delete` function returns `true` after successfully deleting row with a specified ID.

*Example*
```
db_delete('paintings', $id = 3);
```

## Advanced Queries
Reference the [`db_get`](../functions/db_get.md) and [`db_save`](../functions/db_save.md) documentation pages for a list of all available parameters.