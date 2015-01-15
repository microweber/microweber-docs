# Basic Module Administration
Users can access administration pages for their installed modules from both the front-end (in a modal) or from the back-end.
Creating an administration page for your module has many advantages. It's handy for a number of cases, such as allowing users to edit global or instance-specific module settings.

### Enabling Module Admin
In case you're not familiar with the process of creating and enabling a new module, check out the [Modules 101](modules_101.md) page.

The `admin.php` file in your module's root directory is executed and rendered when the user accesses the administration of your module.

Upon exectution modules are injected a `$config` array inside their scope. It contains the module path, name and other module info.

*Example* `admin.php`
```
<?php
// ex. /var/www/userfiles/modules/my_module/
echo 'Full path to the module: ', $config['path'];

// ex. http://localhost/userfiles/modules/my_module/
echo 'Module URL: ', $config['url_to_module'];
```