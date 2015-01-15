## save_custom_field

save_custom_field — Add custom field to content

### Summary

    save_custom_field(array $data_to_save)

### Description

This function adds custom field to product or content.

### Usage

    $my_product_id = 3;

    $custom_field = array(
                'field_name' => 'My price',
                'field_value' => 10,
                'field_type' => 'price',
                // 'debug' => 1,
                'content_id' => $my_product_id);

    //adding a custom field "price" to product
    $new_id = save_custom_field($custom_field);
    print($new_id); // prints the id of the new field 

### Adding more fields

    $my_product_id = 3;
    $custom_field = array(
                'field_name' => 'Size',
                'field_value' => array('S', 'M', 'L', 'XL'),
                'field_type' => 'radio',
                'content_id' => $my_product_id);

    //adding a custom field "Size" to product
    $new_id = save_custom_field($custom_field);
    print($new_id); // prints the id of the new field 

    $custom_field = array(
                'field_name' => 'Color',
                'field_value' => array('Red', 'Blue', 'Green'),
                'field_type' => 'dropdown',
                'content_id' => $my_product_id);

    //adding a custom field "Color" to product
    $new_id =  save_custom_field($custom_field);
    print($new_id); // prints the id of the new field 

### Edit custom field

    $custom_field = array(
                'id' => 4, //set the id of the field to update
                'field_name' => 'My new price',
                'field_value' => 10,
                'field_type' => 'price'
              );

    //updates a custom field  
    $id = save_custom_field($custom_field);
    print($id); // prints the id of the field 

