## update_cart

update_cart - updates user shopping cart

    $add_to_cart = array(
                  'content_id' => $product['id'],
                  'price' => 35
              );
    $cart_add = update_cart($add_to_cart);

### Parameters and fields

<table class="table table-striped table-hover"><thead><tr><th>parameter</th><th>optional values</th></tr></thead><tbody><tr><td>content_id</td><td>The id of the content which you want add to the cart</td></tr><tr><td>price</td><td>Price you want to add (if the product haves custom fields, the price must match the value of the custom field)</td></tr></tbody></table>

 