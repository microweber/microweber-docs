# Templates 101
Microweber templates determine the overall look of the website. More specifically, they are used to generate the assets (JavaScript, CSS, images, fonts) and markup (HTML) for the website.


## Overriding Module Templates
Templates can override module templates. Microweber searches for template-specific module designs in the `/modules/<module name>/templates/` folder inside your template root.

## Template Engines
Templates are executed as PHP so you can use inline PHP or a template engine of your preference. The recommended way to use custom template engines (such as [Smarty](http://smarty.net)) is to add them as a dependency to the website's `composer.json` file.


### Blade
Microweber provides the [Laravel Blade engine](http://laravel.com/docs/master/templates#blade-templating) out of the box.
There is a great series of "How-to" guides for Blade [at laravel-recipes.com](http://laravel-recipes.com/categories/9).

To use Blade in a template you can use the `View` Laravel facade. The last line of the following code renders the Blade view located at subfolder `tmpl/shop/details.blade.php` in the template root

*Example* `index.php`
```
<?php
// Register the path containing your views in Blade
View::addNamespace('<template_name>', $config['path'].'tmpl');
// Output the rendered view
echo View::make('<template_name>::shop.details');
```

### Smarty, etc.
Find a [good package](https://github.com/lukeforeman/Laravel4-SmartyView) and add it in your `composer.json`'s `required` list.
Installation instructions can usually be found in the package's `readme` file.