<h2>get_order_by_id</h2>
<p class="description">get_order_by_id — get single order placed in the online shop</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">get_order_by_id($id);
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">//get an order  
$order_id = 3;
$order = get_order_by_id($order_id);
 
if($order != false){
	print $order['id'];  
	print $order['amount'];
	print $order['total_items'];
	print $order['email'];
	print $order['created_on']; 
	// and more... print_r($order);
}
</code></pre>
<h3>Field names</h3>
<?php print page_content('params/cart_orders'); ?>
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?>