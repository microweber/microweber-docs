# Modules 101

Microweber modules are PHP scripts that can be placed on the website. They are executed in a sandboxed environment, but can access Microweber, Laravel and any custom dependency's functionality.
Modules help developers make easy modifications and add functionality to user pages.

## Existing Codebase
Microweber comes bundled with a handful of preinstalled modules that you can examine and extend.
We encourage learning and the principles of creating modules by looking at the existing code.

## Presentation
In most cases, modules are "blocks" that users drag and drop wherever they need them on their website. Galleries, menus, displaying a post, listing posts in given category, contact forms, etc. are examples of such modules.

Modules don't have to depend on the website's content or design and can have their own presentation layer.

## File Structure
Each module is contained within its own folder in `userfiles/modules`.
In order for new modules to be available, you have to open the modules administration page in the back-end and click `Reload Modules`.

### Create the basic files

Every module needs the following files to work

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|module_name.png  | icon for your module (size 32x32), the file name must the the same as the folder name |







# Creating a new module
There are just few steps you need to make in order to create new module

1. Make new folder for your module for example `userfiles/modules/my_new_module`
2. Make `index.php` and `admin.php` files, so your module can be displayed
2. Create a `config.php` file with the information for your module


*Example* `config.php`
```php
<?php
$config = array();
$config['name'] = "My Awesome Module";
$config['link'] = "https://github.com/";
$config['description'] = "The best module ever!";
$config['author'] = "Jeff Jones";
$config['ui'] = true; //you can drop this module in live edit
$config['ui_admin'] = true; //your module is visible in the admin
$config['position'] = "98";
$config['version'] = "0.01";
```

# Module Front-End


The `index.php` file in the module's folder is being rendered anywhere on the site the user has placed the module.
Provided there is a file named `logo.png` in your module folder you can easily display it with code like this:

*Example* `index.php`
```
<img src="<?php echo $config['url_to_module']; ?>logo.png" />
```

### Showing Stored Data
You can display stored module-specific data using the `get_option` function.
*Example* `index.php`
```
<?php echo get_option('my_text', $params['id']); ?>
```
Data access is explained in more detail in [the Modules Data docs](modules_data.md#simple).



## <a name="using-assets"></a> Using Assets
The module's filesystem location and URL can be found in the `$config` array that is being injected in module scripts.

*Example* `index.php`
```
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>templates/style.css" />
<script src="<?php print $config['url_to_module']; ?>templates/my_script.js"></script>
```

The `$config['url_to_module']` key contains the full url to the module folder (ex. `http://<website>.com/userfiles/modules/`)


# Module Back-End
Users can access administration pages for their installed modules from both the front-end (in a modal) or from the back-end.
Creating an administration page for your module has many advantages. It's handy for a number of cases, such as allowing users to edit global or instance-specific module settings.

The `admin.php` file in your module's root directory is executed and rendered when the user accesses the administration of your module.

Upon execution modules are injected with a `$config` array inside their scope. It contains the module path, name and other module info.

*Example* `admin.php`
```html
My text
<input name="my_text" class="mw_option_field" type="text" value="<?php print get_option('my_text', $params['id']); ?>">
```


## <a name="alternative-layouts"></a> Module skins/templates
Modules can have their own presentation, extending or not depending on the site template at all.
Module templates only affect module content.

Template files are PHP scripts that produce the output module markup.
Module templates are usually stored in a `templates` subfolder, e.g. `/userfiles/modules/<module name>/templates/`.

There are generally two ways to approach module template development:

Independent of the Website Template - To make a module template available for all site templates, place in a `templates` subfolder in the module's folder.

In a Website Template - Website templates can contain module skins in a `userfiles/templates/my_template/modules/<module name>/templates` subfolder.

Microweber identifies module templates by looking for .php files annotated with the following comment format in the beginning:

```
<?php
/*
type: layout
name: Fancy Layout
description: Even more awesome looks
*/
```





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
All modules have a `$config` array inside them which contains the module path, url, name and other info.

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