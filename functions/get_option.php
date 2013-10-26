<h2>get_option</h2>
<p>get_option — return site config option value</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get_option($key, $option_group = 'website');
</code></pre>
 
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">
//get a option
$items_per_page = get_option('items_per_page', 'website'); 
print $items_per_page;
</code></pre>

<h4>See also</h4>
<?php print page_content('functions/_nav/options'); ?>