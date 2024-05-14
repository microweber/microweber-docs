## menu_tree

Makes nested tree from site menu

### Summary

    menu_tree($params);


### Example

```php
// Print the header menu

$menu = menu_tree('menu_id=1');
print $menu;
```


### Parameters



| parameter            | description        |
| -------------  |:-------------|
| menu_id             |  The id of the menu to print | 
| ul_class         |  The class name of the "ul" elements    | 
| li_class   |   The class name of the "li" elements  | 
| ul_class_deep            |   The class name of deep "ul" elements   |
| li_class_deep          |  The class name of deep "li" elements     |
| ul_tag        |   You can change the "ul" tag to custom    |
| li_tag       |   You can change the "li" tag to custom     |
| depth     |   The maximum depth of the menu tree     | 
| link     |   Customize the link    | 
 
 



#### Print menu with custom CSS classes
```php
$params = array();
$params['menu_id'] = 1;
$params['ul_class'] = 'nav-holder';
$params['li_class'] = 'nav-item';
$menu = menu_tree($params);
print $menu;
```


#### Print menu with custom tags
```php
$params = array();
$params['menu_id'] = 1;
$params['ul_tag'] = 'div';
$params['li_tag'] = 'span';
$menu = menu_tree($params);
print $menu;
```
 #### Print menu with custom callback
```php
$params = array();
$params['menu_id'] = 1;
$params['ul_tag'] = 'div';
$params['li_tag'] = 'span';
$params['link'] = function($item) {
    return '<a href="' . $item['link'] . '">' . $item['title'] . '</a>';
};
$menu = menu_tree($params);
print $menu;
```
 