<h2>site_url</h2>
<p>site_url — returns the full site URL</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">site_url($add_string = false);
</code></pre>

 
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php"> 
$site_url = site_url();
var_dump($url_param);
//return "http://localhost/microweber/"


$site_url = site_url('shop');
var_dump($url_param);
//return "http://localhost/microweber/shop"

</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/url'); ?>