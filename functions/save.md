## save

Allows you to save data to ANY table in the database.

### Summary

    save($table, $data);

This is one of the core Microweber function and most of the other _save_ functions are really wrappers to this one. It allows you to save data anywhere in any db table.


**Note: This is raw function and does not validate data input or user permissions. **

This function is dangerous and its not meant to be used directly in templates or module views. Better make your own wrapper functions to this one which validates the input  and use them when required.



### Usage
```php
$table='content';

$data = array(); 
$data['id'] = 0; 
$data['title'] = 'My title'; 
$data['content'] = 'My content'; 
$data['allow_html'] = true; //if true will allow you to save html 

$saved = save($table,$data);
```

### Parameters

| parameter            | description        |
| -------------  |:-------------|
| `$table`            |  the name of your database table	 | 
| `$data`            |  a key=>value array of your data to save, key must the the name of the db field  | 
 

By default this function removes html tags. In order to save plain html you must set `$data['allow_html'] = true;` in your data array

 