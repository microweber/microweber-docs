# Schema builder 


## Defining Schema

The module's schema is defined in the `config.php` file, which is located in the module's folder. For example `userfiles/modules/my_module/config.php`


When installing a module Microweber checks the config.php file for keys in the `$config['tables']` array. Each key represents a table name and its value is an array of column definitions. The ID column is automatically created and all columns are nullable by default.


## Example with common fields

*Example* `config.php`
```
$config['tables'] = array(
'my_table' => array(
    'id' => 'integer',
	'name' => 'string',
	'description' => 'text',
	'created_by' => 'integer',
    'created_at' => 'dateTime',
));
```



## Example fields with default values

*Example* `config.php`
```
$config['tables'] = array(
'my_table' => array(
	'description' => array('type' => 'text', 'default' => 'Some text'),
    'is_active' => array('type' => 'integer', 'default' => 0),
    'price' => array('type' => 'float', 'not_null'),
));
```



## Real life example of "todo list" module

*Example* `userfiles/modules/todo/config.php`
```php



$config = array();
$config['name'] = "Todo list";
$config['author'] = "Microweber";
$config['ui'] = true;
$config['ui_admin'] = true;
$config['categories'] = "other";
$config['position'] = 99;
$config['version'] = 0.1;
$config['tables'] = array(
    "todo_lists" => array(
        'id' => "integer",
        'list_name' => "text",
        'list_description' => "text",
        'created_by' => "integer",
        'created_at' => "dateTime",
        'edited_by' => "integer",
        'updated_at' => "dateTime",

    ),
    "todo_lists_tasks" => array(
        'id' => "integer",
        'todo_list_id' => "integer",
        'task_name' => "text",
        'task_content' => "text",
        'is_completed' => array('type' => 'integer', 'default' => 0),
        'created_by' => "integer",
        'created_at' => "dateTime",
    )
);

```


### Getting and saving data

You can use the [db_get](../functions/db_get.md "db_get"), [db_save](../functions/db_save.md "db_save") and [db_delete](../functions/db_delete.md "db_delete") functions to work with data from those tables.

```
// Getting
$data = db_get("table=todo_lists")

// Saving
$save = array(
	'list_name' => 'Get Groceries',
	'list_description' => 'Things to buy from the shop'
);
$id = db_save('todo_lists', $save);

// Deleting
db_delete('todo_lists', $id);

```


## Available Column Types


Command  | Description
------------- | -------------
integer  |   INTEGER equivalent for the database.
string  |   VARCHAR equivalent column.
text  |    TEXT equivalent for the database.
time  |     TIME equivalent for the database.
tinyInteger  |  TINYINT equivalent for the database.
timestamp  |   TIMESTAMP equivalent for the database.
bigIncrements  |  Incrementing ID using a "big integer" equivalent.
bigInteger  |   BIGINT equivalent for the database.
binary  |  BLOB equivalent for the database.
boolean  |  BOOLEAN equivalent for the database.
char  |     CHAR equivalent with a length.
date  |   DATE equivalent for the database.
dateTime  |   DATETIME equivalent for the database.
decimal  |     DECIMAL equivalent with a precision and scale.
double  | DOUBLE equivalent with precision, 15 digits in total and 8 after the decimal point.
float  |    FLOAT equivalent for the database.
longText  |    LONGTEXT equivalent for the database.
mediumInteger  |  MEDIUMINT equivalent for the database.
mediumText  | MEDIUMTEXT equivalent for the database.
smallInteger  |     SMALLINT equivalent for the database.


# Using Laravel's Schema Builder

If you need more control or custom logic, you can use the Laravel's schema builder. 

*Example* `config.php`
```php

use \Illuminate\Database\Schema\Blueprint;
use \Illuminate\Support\Facades\Schema;


$config = array();
$config['name'] = "Another module";
//...
$config['tables'] = function () {
    if (!Schema::hasTable('my_other_table')) {
        Schema::create('my_other_table', function (Blueprint $table) {
            $table->increments('id');
            $table->string('action', 255);
            $table->string('table_name', 255);
            $table->integer('row_id')->unsigned();
            $table->binary('old')->nullable();
            $table->binary('new')->nullable();
            $table->string('user', 255)->nullable();
            $table->string('ip')->nullable();
            $table->string('ip_forwarded')->nullable();
            $table->timestamp('created_at');
            $table->index('action');
            $table->index(['table_name', 'row_id']);
        });
    }
};

```



For a complete list of column types, check out [Laravel's Schema Builder docs](http://laravel.com/docs/master/migrations).






