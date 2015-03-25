## db_delete

db_delete — deletes a record from a database table

### Summary

    db_delete($table_name, $id = 0, $field_name = 'id')

### Return Values

`true` or `false` if the item is not deleted

### Usage

    $category_id = 5;

    $delete = db_delete('categories', $category_id);

 