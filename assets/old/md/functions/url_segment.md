##url_segment
url_segment — returns url segment

##Synopsis
	url_segment([int $seg_num])

##Description
    The url_segment() function returns a single segment as string or array of all segments.  

##Return value
	String, Array or False
	
##Example
url_segment() example
```php
// if you go on url 
// http://example.com/blog/post-title

$segments = url_segment(); //get all url segments
print_r($segments);
// array([0]=>'blog',[1]=>'post-title')

$segment = url_segment(0); //get a single segment
print $segment;
// prints blog
``` 


##SEE ALSO
* [url_param](url_param "")
* [url_path](url_path "")
* [site_url](site_url "")
 