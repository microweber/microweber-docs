##site_url
site_url — returns the full site url

##Synopsis
	site_url( null | string $path)

##Description 
    The site_url() function return the full url of your website including the http or https protocol. You can also make custom links with the $path parameter.
    
##Parameters
	$path - string to add to the site url

##Return value
	String (ex. http://example.com/)
	
##Example
Example #1 site_url() example
```php
// print the site url http://example.com/
print site_url();
``` 
Example #2 site_url($path) example
```php
// prints http://example.com/blog
print site_url('blog');

// prints http://example.com/shop
print site_url('shop');
``` 

##SEE ALSO
* [url_segment](url_segment "")
* [url_path](url_path "")
* [url_param](url_param "")
 