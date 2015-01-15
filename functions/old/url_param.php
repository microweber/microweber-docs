<h2>url_param</h2>
<p>url_param — get a parameter from the URL</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">url_param($param_name, $skip_ajax = false);
</code></pre>

 <h3>Return Values</h3> 
 <p>
<code>String</code> with the url parameter value or <code>false</code> if the parameter is not found</p>


<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
// If you are on URL http://localhost/my-page/state:California
// or on URL http://localhost/my-page/?state=California

$url_param = url_param('state');
var_dump($url_param);

//return "California" or false if nothing found
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/url'); ?>