## site_url

site_url — returns the full site URL

### Summary
`site_url($path = false);`

### Usage
```php
$site_url = site_url();
print($site_url);
//result "http://localhost/microweber/"

$site_url = site_url('shop');
print($site_url);
//result "http://localhost/microweber/shop"
```