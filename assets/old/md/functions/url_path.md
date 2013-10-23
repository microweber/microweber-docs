##url_path
url_path — returns the relative url path as string

##Synopsis
	url_path($skip_ajax=false)

##Description
    The url_path() function the relative site path 
    
##Parameters
	$skip_ajax=false - Set to true if you want to get the url path from ajax request

##Return value
	String (ex. blog/post-title)
	
##Example
url_path() example
```php
// if you go on url 
// http://example.com/blog/post-title

$url_path = url_path();
print $url_path;
// prints blog/post-title
``` 


##SEE ALSO
* [url_param](url_param "")
* [url_segment](url_segment "")
* [site_url](site_url "")
 