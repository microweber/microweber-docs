# Module Back-End
Users can access administration pages for their installed modules from both the front-end (in a modal) or from the back-end.
Creating an administration page for your module has many advantages. It's handy for a number of cases, such as allowing users to edit global or instance-specific module settings.

## Rendering the Module Admin
The `admin.php` file in your module's root directory is executed and rendered when the user accesses the administration of your module.

Upon exectution modules are injected a `$config` array inside their scope. It contains the module path, name and other module info.

*Example* `admin.php`
```
<?php
// ex. /var/www/userfiles/modules/<module>/
echo 'Full path to the module: ', $config['path'];
echo '<br />';
// ex. http://<domain>/userfiles/modules/<module>/
echo 'Module URL: ', $config['url_to_module'];
```