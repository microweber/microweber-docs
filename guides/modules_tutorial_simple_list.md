## Simple list module with database table

In this tutorial we are going to create a module with its own database table. We will need functions to get and save data in the db and also we will need custom database table. 


At a high level, here's what you'll accomplish in this tutorial:

1. Create a custom database table
2. Make module admin to manage the information in it
3. Make module front-end to display the information

 


For the purpose of this tutorial we will create a "backers_list" module to show list of supporters for a cause.



### Create the basic files

Create new folder at `userfiles/modules/backers_list`

This example module must have the following files 

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file holds the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|backers_list.png  | icon for your module (size 32x32) |
|edit_backers.php  | view for the "edit" screen in the admin |

#### config.php
Create a file at `userfiles/modules/backers_list/config.php`
Use this file to define the name of your module and its version as it will appear in the admin panel

In your config.php you need to set the `$config['tables']` array which contains description of the db tables you want to make.  When you need control of the database fields type, read more [here](http://laravel.com/docs/5.0/schema "").  

```php
<?php
$config = array();
$config['name'] = "Backers List";
$config['author'] = "Microweber";
$config['ui'] = true; //module will be visible in the live edit
$config['ui_admin'] = true; //module will be visible in the admin
$config['categories'] = "other";
$config['position'] = 99;
$config['version'] = 0.1;

$config['tables'] = array(
    "backers_list" => array(
        'id' => "integer",
        'backer_name' => "text",
        'backer_email' => "text",
        'backer_amount' => "integer",
        'created_at' => "dateTime"
    )
);
```




#### functions.php

Before we make the interface we must make our core functions to save and get data. 
We are also going to expose few of our functions to the api, which will allow us to make ajax calls to it.


Create a file at  `userfiles/modules/backers_list/functions.php` and add this code. 

```php
<?php

function get_backers($params = array())
{
    if (is_string($params)) {
        $params = parse_params($params);
    }
    $params['table'] = "backers_list";
    return db_get($params);
}

api_expose_admin('save_backer');
function save_backer($data)
{
    $table = "backers_list";
    return db_save($table, $data);
}

api_expose_admin('delete_backer');
function delete_backer($params)
{
    if (isset($params['id'])) {
        $table = "backers_list";
        $id = $params['id'];
        return db_delete($table, $id);
    }
}
```

You can open HTTP API endpoints to your functions with [api_expose_admin](../functions/api_expose_admin.md "aa") or with  [api_expose](../functions/api_expose.md "")



#### admin.php
Create a file at `userfiles/modules/backers_list/admin.php`

We will use this file as admin interface where we can add and edit the list. 

 

```html
<?php only_admin_access(); ?>
<script>
function edit_backer(form){
	 var data = mw.serializeFields(form);
	 $.ajax({
        url: mw.settings.api_url + 'save_backer',
        type: 'POST',
        data: data,
        success: function (result) {
			mw.notification.success('Backer saved');
			$('#add-backer-form').hide();
			$('#add-backer-form')[0].reset();
			
			//reload the modules
			mw.reload_module('backers_list/edit_backers');
			mw.reload_module_parent('backers_list'); 
         }
    });
	return false;
}
function delete_backer(id){
	var ask = confirm("Are you sure you want to delete this backer?");
	if (ask == true) {
		 var data = {};
		 data.id = id;
		 $.ajax({
			url: mw.settings.api_url + 'delete_backer',
			type: 'POST',
			data: data,
			success: function (result) {
				mw.notification.success('Backer deleted');
				
				//reload the modules
				mw.reload_module('backers_list/edit_backers');
				mw.reload_module_parent('backers_list');
			 }
		});	 
	}
	 
	 
	return false;
}
</script>

<div class="module-live-edit-settings"> <a class="mw-ui-btn mw-ui-btn-icon" href="javascript:;" onclick="$('#add-backer-form').show()"> <span class="mw-icon-plus">Add new backer</span> </a>
  <form id="add-backer-form" onSubmit="edit_backer(this); return false;" style="display:none">
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Backer Name</label>
      <input name="backer_name" type="text" class="mw-ui-field" />
    </div>
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Backer Email</label>
      <input name="backer_email" type="text" class="mw-ui-field" />
    </div>
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Backer Amount</label>
      <input name="backer_amount" type="text" class="mw-ui-field" />
    </div>
    <button type="submit" class="mw-ui-btn">Save</button>
  </form>
  <div class="mw-clear"></div>
  <br />
  <module type="backers_list/edit_backers" />
</div>



```


#### index.php
Create a file at `userfiles/modules/backers_list/index.php`

We will use this file as front-end interface where we can show the list. 


```html
<?php $backers = get_backers("no_limit=true"); ?>
<?php if($backers): ?>
<div class="mw-ui-box mw-ui-box-content">
  <ul>
    <?php foreach($backers as $backer): ?>
    <li><?php print $backer['backer_name']; ?> - <?php print currency_format($backer['backer_amount']); ?></li>
    <?php endforeach; ?>
  </ul>
</div>
<?php endif; ?>


```





[Source code](https://github.com/microweber-dev/backers_list_module "")

