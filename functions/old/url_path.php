<h2>url_path</h2>
<p>url_path — returns the relative URL path</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">url_path($skip_ajax = false);
</code></pre>
<h3>Return Values</h3>
<p> <code>String</code> with the url path relative to the site URL</p>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">// if you are on URL http://localhost/blog/post-title
 
$url_string = url_path();
print $url_string;

//prints "blog/post-title"
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/url'); ?>