# mw.front.get_layout

This event is executed when Microweber gets the layout to render a page in the frontend.

The `$params` array contains the info for the current content

```php
 
event_bind('mw.front.get_layout', function ($params) {
    if ($params['id'] == 3) {
       return array('render_file' => '/path/to/file.php');
    }
});
 
```   





