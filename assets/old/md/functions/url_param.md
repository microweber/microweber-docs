##url_param
url_param — returns a parameter from the url or false if nothing is found

##Synopsis
	url_param( string $param, $skip_ajax = false)

##Description
    The url_param() function searches in the url string and the $_GET array for parameter and return its value. 

##Parameters
	$param - string to search in the url
	$skip_ajax - set to true to search for parameter from ajax request
	
##Return value
	String or False
	
##Example
url_param() example
```php
// if you go on url 
// http://example.com/blog/?my_url_param=something 
// or http://example.com/blog/my_url_param:something

$my_url_param = url_param('my_url_param');
print $my_url_param; //something
``` 


##SEE ALSO
* [url_segment](url_segment "")
* [url_path](url_path "")
* [site_url](site_url "")
 