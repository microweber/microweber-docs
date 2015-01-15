## login_url

login_url — returns the url for the regsiter page

### Summary

    login_url();

### Usage
```php
    $login_url = login_url();
    print $login_url;
```
The user can change the default login page from the settings page in the admin panel.

You can also change the login_url value by setting a session variable

#### Changing the login link on the fly
```php
session_set('login_url', 'users/login');
$login_url = login_url();
print $login_url;
```
 