## register_url

register_url — returns the url for the register page

### Summary

    register_url();

### Usage

```php
$register_url = register_url();
print $register_url;
```

The user can change the default register page from the settings page in the admin panel.

You can also change the register page value by setting a session variable

#### Changing the register url on the fly
```php
session_set('register_url', 'users/register');
$register_url = register_url();
print $register_url;
```


 