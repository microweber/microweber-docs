<h2>get_orders</h2>
<p> get_orders - get placed orders
<p>
<pre class="prettyprint"><code class="language-php"> 
$orders_params = array(
            'order_completed' => 'y');

$orders = get_orders($orders_params);
 </code></pre>
<h3>Parameters and fields</h3>
<?php print page_content('params/cart_orders'); ?>
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?> 