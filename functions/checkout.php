<h2>checkout</h2>
<p> checkout - completes the order of the user and empties shopping cart
<p>
<pre class="prettyprint"><code class="language-php"> 
$checkout_params = array(
            'first_name' => 'John',
            'last_name' => 'Doe',
            'country' => 'United States',
            // 'debug' => 1,
            'email' => 'email@example.com');

// completing the checkout process
$checkout = checkout($checkout_params);
 </code></pre>
<h3>Parameters and fields</h3>
<?php print page_content('params/cart_orders'); ?> 
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?> 