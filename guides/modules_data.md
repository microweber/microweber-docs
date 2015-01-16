# Data

* [Simple Data Access](#simple)
* [Custom Tables](#custom)
  * [Schema Definition](#custom-schema)
  * [CRUD Table Data](#crud)
     * [Create](#crud-create)
     * [Read](#crud-read)
     * [Update](#crud-update)
     * [Delete](#crud-delete)
  * [Advanced Queries](#advanced)

## <a name="simple"></a> Simple Data Access
The functions `get_option` and `set_option` are used to retrieve or store data.
Each entry is identified by a name and a group it belongs to, which are passed as arguments (in that order).

If you want to access instance-specific data you could pass `$params['id']` (the ID of the instance) as a group.

Likewise, passing `$config['name']` as a second parameter is a good way to access global data that is synced across all instances and may affect the operation of the module in general.

*Example* `admin.php`
```
<?php
$myText = get_option('my_text', $params['id']);
$favNum = get_option('fav_num', $config['name']);
?>

<?php foreach($favNum as $num): ?>
<input name="fav_num" class="mw_option_field" type=""
	<?php echo $favNum? 'checked' :''; ?> />
<textarea name="my_text" class="mw_option_field">
	<?php echo $myText; ?>
</textarea>
```

## <a name="custom"></a> Custom Tables

For more complex data storage you can use custom tables in the website database.

### <a name="custom-schema"></a> Defining Schema
When installing a module Microweber checks the `config.php` file for keys in the `$config['tables']` array.
Each key represents a table name and its value is an array of column definitions.
The ID column is automatically created and all columns are nullable by default.

*Example* `config.php`
```
$config['tables'] = array(
'my_table' => array(
	'name' => 'string',
	'price' => array('type' => 'float', 'not_null'),
	'description' => array('type' => 'text', 'default' => 'Undescribable')
));
```

For a complete list of column types, check out [Laravel's Schema Builder docs](http://laravel.com/docs/master/schema#adding-columns).

### <a name="crud"></a> CRUD Table Data
#### <a name="crud-create"></a> Create
The `db_save` function accepts table name as first argument and row data as a second argument. In order to create rows in a table simply don't specify an ID.

*Example*
```
$data = array(
	'name' => 'My Painting',
	'price' => 2700,
	'description' => 'My greatest work'
);
db_save('my_table', $data);
```

#### <a name="crud-read"></a> Read
Call the `db_get` function and set the `table` key in the argument array to retrieve rows from a given database table.

*Example*
```
$rows = db_get(array('table' => 'my_table'));
```

Set the `single` key to `true` in the argument array for the function to return a single row.
Any non-reserved key name is treated as a `WHERE` condition for given column name. Reference the [`db_get` function docs](../functions/get.md) for more details.

*Example*
```
$row = db_get(array(
	'table' => 'my_table',
	'column' => 'matched value',
	'single' => true
	));
```

#### <a name="crud-update"></a> Update
If the `db_save` function receives an array containing an `id` key it performs an update operation on the corresponding row.

*Example*
```
// Gets the first row with price >= (Greather Than or Equal to) 1000
$row = db_get(array(
	'table' => 'my_table',
	'price' => '[gte]1000',
	'single' => true
	));
$row[0]['name'] = 'My Awesome Painting';
echo 'Updating row with ID ', $row[0]['id'];
db_save('my_table', $row);
```

#### <a name="crud-delete"></a> Delete
The `delete_by_id` function returns `true` after successfully deleting row with a specified ID.

*Example*
```
delete_by_id('my_table', 1);
```

## <a name="advanced"></a> Advanced Queries
Reference the [`db_get`](../functions/get.md) and [`db_save`](../functions/save.md) documentation pages for a list of all available parameters.