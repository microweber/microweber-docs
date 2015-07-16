# Modules 101


## What is a module?

Microweber modules are PHP scripts that can be placed on the website. They are executed in a sandboxed environment, but can access Microweber, Laravel and any custom dependency's functionality.
Modules help developers make easy modifications and add functionality to user pages.

 
Microweber comes bundled with a handful of preinstalled modules that you can examine and extend.
We encourage learning and the principles of creating modules by looking at the existing code.


In most cases, modules are "blocks" that users drag and drop wherever they need them on their website. Galleries, menus, displaying a post, listing posts in given category, contact forms, etc. are examples of such modules.

Modules don't have to depend on the website's content or design and can have their own presentation layer.

## File Structure
Each module is contained within its own folder in `userfiles/modules`.
In order for new modules to be available, you have to open the modules administration page in the back-end and click `Reload Modules`.


Every module needs the following files to work

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|icon.png  | icon for your module (size 32x32) |







# Creating a new module
There are just few steps you need to make in order to create new module

1. Make new folder for your module for example `userfiles/modules/example_module/`
2. Make `index.php` and `admin.php` files, so your module can be displayed
2. Create a `config.php` file with the information for your module


*Example* `userfiles/modules/example_module/config.php`
```php
<?php
$config = array();
$config['name'] = "My Awesome Module";
$config['link'] = "https://github.com/";
$config['description'] = "The best module ever!";
$config['author'] = "Serous Sam";
$config['ui'] = true; //you can drop this module in live edit
$config['ui_admin'] = true; //your module is visible in the admin
$config['position'] = "98";
$config['version'] = "0.01";
```

## Module Front-End


The `index.php` file in the module's folder is being rendered anywhere on the site the user has placed the module.

*Example* `userfiles/modules/example_module/index.php`
```php
<h1>Hello from my module</h1>
```

If you drop the module on a page you will be able to see your text.






## Module Back-End
Users can access administration pages for their installed modules from both the front-end (in a modal) or from the back-end.
Creating an administration page for your module has many advantages. It's handy for a number of cases, such as allowing users to edit global or instance-specific module settings.

The `admin.php` file in your module's root directory is executed and rendered when the user accesses the administration of your module.

*Example* `userfiles/modules/example_module/admin.php`
```php
<h1>Admin part my module</h1>
```

## Using Assets
Upon execution modules are injected with a `$config` array inside their scope. It contains the module path, name and other module info.

The module's filesystem location and URL can be found in the `$config` array.
You can use it to load assets or other scripts from the module folder. 

*Example* `userfiles/modules/example_module/index.php`
```html
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>style.css" />
<script src="<?php print $config['url_to_module']; ?>script.js"></script>
```

The `$config['url_to_module']` key contains the full url to the module folder (ex. `http://<website>.com/userfiles/modules/example_module/`)

The `$config['path']` key contains the full path to the module folder (ex. `/var/www/userfiles/modules/example_module/`)



Provided there is a file named `logo.png` in your module folder you can easily display it with code like this:
 
```
<img src="<?php echo $config['url_to_module']; ?>logo.png" />
```


##Loading modules

In Microweber the modules are loaded via the `<module type="your_module_name" />` tag inside your template, where the "type" parameter is the path to your module. Additionally they can be dragged and dropped by the user in the editable regions of your site.

```php
<module type="example_module" />
```
This code will load the file `userfiles/modules/example_module/index.php`

If you wish to load a file other than index.php you can do it by 

```php
<module type="example_module/something" />
```
This code will load the file `userfiles/modules/example_module/something.php`


## Module parameters

The modules can accept parameters, which are passed as html attributes.

Here is example of it:

```php
<module type="example_module" my-param="foo" other-parameter="bar"  />
```


You can access the parameters inside the module from the `$params` array. Open index.php in your module folder and add this code

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

Each module have an "id" which is accessible with `$params['id']` and its unique for every module, unless you set it as html attribute. If you do not put an "id" attribute on your module, Microwber will generate one. 


## Module functions
If you create a file named `functions.php` in the module folder, this file will be loaded automatically on every request. You can use it to make your custom functions, autoload classes and do whatever you like.


## Checking if the module is in Live edit mode
*Example* `userfiles/modules/example_module/index.php`
```php
<?php if(in_live_edit()): ?>
<?php print notif("Click here to edit this module"); ?>
<?php endif; ?>
```


# Things to know

* You can load other modules in your modules
* You can have editable regions in your modules