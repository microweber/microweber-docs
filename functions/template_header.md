## template_header

template_header — allows you to append Scrips and CSS to the site's `<head>`

### Summary

`template_header($tags);`

### Usage
```php
// add external css file
template_header('http://example.com/assets/bootstrap.css');


// add external js file
template_header('http://example.com/assets/bootstrap.js');

//add in-line js to head
template_header('<script>alert("Hi");</script>');


```
