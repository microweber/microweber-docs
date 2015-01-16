# Module Front-End

* [Rendering the Module](#display-content)
* [Alternative Layouts](#alternative-layouts)
* [Using Assets](#using-assets)

## <a name="display-content"></a> Rendering the Module

The `index.php` file in the module's folder is being rendered anywhere on the site the user has placed the module.
Provided there is a file named `logo.png` in your module folder you can easily display it with code like this:

*Example* `index.php`
```
<img src="<?php echo $config['url_to_module']; ?>/logo.png" />
```

### Showing Stored Data
You can display stored module-specific data using the `get_option` function.
*Example* `index.php`
```
<?php echo get_option('my_text', $params['id']); ?>
```
Data access is explained in more detail in [the Modules Data docs](modules_data.md#simple).

### Existing Modules
The easiest way to make a template for an existing module is to copy and modify the default one. 

## <a name="alternative-layouts"></a> Alternative Layouts
Modules can have their own presentation, extending or not depending on the site template at all.
Module templates only affect module content.

### File Structure
Template files are PHP scripts that produce the output module markup.
Module templates are usually stored in a `templates` subfolder, e.g. `/userfiles/modules/<module name>/templates/`.

There are generally two ways to approach module template development:

#### Independent of the Website Template
To make a module template available for all site templates, place in a `templates` subfolder in the module's folder.

#### In a Website Template
Templates can contain module templates in a `modules/<module name>/templates` subfolder.

Microweber identifies module templates by looking for .php files annotated with the following comment format in the beginning:

```
<?php
/*
type: layout
name: Fancy Layout
description: Even more awesome looks
*/
```

## <a name="using-assets"></a> Using Assets
The module's filesystem location and URL can be found in the `$config` array that is being injected in module scripts.

*Example* `index.php`
```
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>templates/style.css" />
<script src="<?php print $config['url_to_module']; ?>templates/my_script.js"></script>
```

The `$config['url_to_module']` key contains the full url to the module folder (ex. `http://<website>.com/userfiles/modules/`)