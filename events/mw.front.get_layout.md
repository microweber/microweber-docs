# mw.front.get_layout

This event is executed when the CMS tries to get the layout to render a page in the frontend.


```php
 
event_bind('mw.front.get_layout', function ($params) {
    if ($params['id'] == 3) {
       return array('render_file' => '/path/to/file.php');
    }
});
 
```   





