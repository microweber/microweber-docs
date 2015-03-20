## Creating a TODO list module with database tables

In this tutorial we are going to create a TODO list module with its own database tables


### Create the basic files

Create new folder at `userfiles/modules/todo-list`

Our module will need the following files to work

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|todo-list.png  | icon for your module (size 32x32) |


#### config.php
Create a file at `userfiles/modules/todo-list/config.php`
Use this file to define the name of your module and its version as it will appear in the admin panel

In your config.php you must set the `$config['tables']` array which contains description of the db tables you want to make. 

```php
<?php
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
        'name' => "text",
        'content' => "text",
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
 


### Static files

We are going to need static files for our module where we will store the CSS and the JS
 
Loading of static files is done via 

```html
<script>
    mw.require("<?php print $config['url_to_module']; ?>static/admin.css");
    mw.require("<?php print $config['url_to_module']; ?>static/todo-list-manager.js");
</script>
```