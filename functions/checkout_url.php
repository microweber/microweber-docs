
<h2>checkout_url</h2>
<p>checkout_url — returns the url for the checkout page</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">checkout_url();
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">
$checkout_url = checkout_url();
print $checkout_url;
</code></pre>

<p>The user can change the default checkout page from the settings page in the admin panel.</p>




<p>You can also change the checkout page value by setting a session variable</p>
<h4>Changing the checkout url on the fly</h4>
<pre class="prettyprint"><code class="language-php runner">
session_set('checkout_url', 'shop/checkout');
$checkout_url = checkout_url();
print $checkout_url;
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?>