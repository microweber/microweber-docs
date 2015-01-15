## What is a module


The Microweber modules will help you to make easy modifications and add functionality to your pages.

Every module is a PHP script that executes when the user have dropped it into a page. It works as a stand alone script, but it have access to all Microweber functions.

In the most cases the modules are the "blocks" that you drag and drop around your website. Such as gallery, menu, posts, categories, contact form and others.

The modules can work independently of the content and the "design" of the site and can have their own templates

Microweber comes with a lot default modules that you can use and extend. Also feel free to write your own modules.

### Location of modules
Each module have its own folder located at `userfiles/modules/`


### Making a module

To make a module simply create new folder at `userfiles/modules/my_module`

Every module needs the following files to work

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|your_module_name.png  | icon for your module (size 32x32), the file must be with the same name as your folder |


Accessing the parameters from the module
You can access all passed parameters inside a module with the $params array


###Loading modules

In Microweber the modules are loaded via the `<module type="your_module_name" />` tag inside your template, where the "type" parameter is the path to your module. Additionally they can be dragged and dropped by the user in the editable regions of your site.

```php
<module type="my_module" />
```

### Module parameters

The modules can accept parameters, which are passed as html attributes.

Here is example of it:

```php
<module type="my_module" my-param="foo" other-parameter="bar"  />
```
You can access the parameters inside the module from the `$params` array. Open index.php in your module folder and add this code

Each module have an "id" which is accessible with `$params['id']` and its unique for every module, unless you set it as html attribute.


```php
<?php 
$id = $params['id'];
$foo = $params['my-param'];
$bar = $params['other-parameter'];

print("Module id: ". $id);
print("My parameter is: ". $foo);
print("My other parmeter is: ". $bar);
?>
```

### Module configuration
All modules have a `$config` array inside them which contains the module path, name and other info.

```php
<?php 
//the full path to the module ex. /var/www/userfiles/modules/my_module/
print $config['path']; 

//url to the module ex. http://localhost/userfiles/modules/my_module/
print $config['url_to_module']; 
?>
```




## Simple module example

In the next example we will create a module that allows us to put embed code. Such a module can be useful to put embed codes for video, facebook page, newsletter form, etc.

#### config.php
Create a file at `userfiles/modules/my_module/config.php`
Use this file to define the name of your module and its version as it will appear in the admin panel
```php
<?php
$config = array();
$config['name'] = "My module";
$config['author'] = "My name";
$config['ui'] = true; //if set to true, module will be visible in the toolbar
$config['ui_admin'] = false; //if set to true, module will be visible in the admin panel
$config['categories'] = "content";
$config['position'] = 99;
$config['version'] = 0.1;
```


#### admin.php
Create a file at `userfiles/modules/my_module/admin.php`
This file loads when you drop the module and click on "settings".
Adding class `mw_option_field` to an input element will save its value as a module option accessible via the  [get_option](../functions/get_option.md "") function

```html
<?php
only_admin_access();
$code = get_option('source_code', $params['id']);
?>
<textarea name="source_code" class="mw_option_field"><?php print $code; ?></textarea>
```
#### index.php
Create a file at `userfiles/modules/my_module/index.php`
This file loads when you drop the module or include the module in your code
```html
<?php
$source_code =  get_option('source_code', $params['id']) ;
 
if($source_code != false){
    print "<div class='my_embed_code'>" . $source_code . '</div>';
} else {
   print('Click to insert code');
}
```

#### Loading CSS and Javascript
By using the `$config` array in your module you can access its location and URL

```html
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>style.css" />
<script src="<?php print $config['url_to_module']; ?>script.js"></script>
```


### That's it!
We made a simple module with few lines of code.

For sure you will want to have custom functions for your module. You can make the `functions.php` file in your module's folder and start writing code. This file is loaded at start, so besides simple functions, it can include event hooks, routing, etc.


### Things to know

* You can load other modules in your modules
* You can have editable regions in your modules


