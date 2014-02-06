<h2>save_option</h2>
<p>save_option — saves option in the database</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">save_option($data);
</code></pre>
 
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
$option = array();
$option['option_value'] = 'my value';
$option['option_key'] = 'my_option';
$option['option_group'] = 'my_option_group';
save_option($option)
</code></pre>

<h4>See also</h4>
<?php print page_content('functions/_nav/options'); ?>