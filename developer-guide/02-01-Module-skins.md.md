## How to make a templates for modules

Every module can have its own templates to show the information deepening on the user preferences.

You can use module templates to style and change the structure of a single module's output

The module template is different from the overall site template and it takes care how the information is displayed only by the module itself.

### Where to find the module templates?
Each of the modules have their templates stored in in a sub folder named "templates"

Generally you can find them at `/userfiles/modules/module_name/templates/`

The module templates are simple .php files that produce the output module code. 

Additionally you can put the module templates inside your site template folder to override the core templates. 
To do that, create a folder for your module at `/userfiles/templates/my_site_template/modules/module_name/templates/`  

 

### Creating templates for existing modules

The easiest way to make a template for existing module is to copy the default and modify it. There are two ways to make a template for a module: one is to style the module for your current site template and the other is to style the module for all site templates.

* To style a module only for your current site template, make a new folder at inside your site template folder ex. /userfiles/templates/your_site_template/modules/module_name/templates/ and put all your needed files there

* To make a module design globally available for all site templates, place your skin at the module's location ex. /userfiles/modules/module_name/templates/



Microweber finds the module template by looking for .php files with the following code in it

```php
<?php
/*
type: layout
name: My module skin
description: My description
*/
?>
```

#### How to insert Javascript and CSS in your module skin

Using the `$config` array in your module you can access its location and URL

To insert your styles simply put this code in your module skin
```html
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>templates/my_style.css" />
<script src="<?php print $config['url_to_module']; ?>templates/my_script.js"></script>
```

The `$config['url_to_module']` variable contains the full url to the module folder. 

For example                                                                                                                     

```bash 
http://example.com/userfiles/modules/pictures/
```





