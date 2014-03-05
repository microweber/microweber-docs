<h2>update_cart</h2>
<p> update_cart - updates user shopping cart
<p>
<pre class="prettyprint"><code class="language-php"> 
$add_to_cart = array(
              'content_id' => $product['id'],
              'price' => 35
          );
$cart_add = update_cart($add_to_cart);
 </code></pre>
<h3>Parameters and fields</h3>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>parameter</th>
      <th>optional values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>content_id</td>
      <td>The id of the content which you want add to the cart</td>
    </tr>
    <tr>
      <td>price</td>
      <td>Price you want to add (if the product haves custom fields, the price must match the value of the custom field)</td>
    </tr>
      <tr>
      <td><em>$field_name</em></td>
      <td>If the product haves custom fields you can add them to the cart</td>
    </tr>
  </tbody>
</table>
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?> 