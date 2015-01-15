
<h2>save_custom_field</h2>
<p>save_custom_field — Add custom field to content</p>
<h3>Summary</h3>
<pre><code>save_custom_field(array $data_to_save)
</code></pre>
<h3>Description</h3>
<p>This function adds custom field to product or content.</p>
<h3>Usage</h3>
 
<pre class="prettyprint"><code class="language-php">$my_product_id = 3;

$custom_field = array(
            'field_name' => 'My price',
            'field_value' => 10,
            'field_type' => 'price',
            // 'debug' => 1,
            'content_id' => $my_product_id);

//adding a custom field "price" to product
$new_id = save_custom_field($custom_field);
print($new_id); // prints the id of the new field 
 </code></pre>
 <h3>Adding more fields</h3>
<pre class="prettyprint"><code class="language-php">$my_product_id = 3;
$custom_field = array(
            'field_name' => 'Size',
            'field_value' => array('S', 'M', 'L', 'XL'),
            'field_type' => 'radio',
            // 'debug' => 1,
            'content_id' => $my_product_id);


//adding a custom field "Size" to product
$new_id = save_custom_field($custom_field);
print($new_id); // prints the id of the new field 

$custom_field = array(
            'field_name' => 'Color',
            'field_value' => array('Red', 'Blue', 'Green'),
            'field_type' => 'dropdown',
            // 'debug' => 1,
            'content_id' => $my_product_id);

//adding a custom field "Color" to product
$new_id =  save_custom_field($custom_field);
print($new_id); // prints the id of the new field 

 </code></pre>
 
 
<h3>Edit custom field</h3>
 
<pre class="prettyprint"><code class="language-php"> 
$custom_field = array(
            'id' => 4, //set the id of the field to update
            'field_name' => 'My new price',
            'field_value' => 10,
            'field_type' => 'price'
          );

//update a custom field with id
$id = save_custom_field($custom_field);
print($id); // prints the id of the field 
 </code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/custom_fields'); ?>