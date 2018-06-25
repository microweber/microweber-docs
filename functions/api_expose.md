## api_expose

api_expose — open an api endpoint to a given function
### Summary

    api_expose($api_path, $callback);

### Return Values

Its up to you to define the values retuned

### Simple usage
```php
 
api_expose('my_hello_world');
function my_hello_world($params)
{
    print 'hello_world';
}
//access by going to http://www.yoursite.com/api/hello_world 

```
    

### Usage with callback
```php
 
api_expose('my_hello_world', function($params){
    print 'hello_world';
});
 
//access by going to http://www.yoursite.com/api/hello_world 

``` 
 


