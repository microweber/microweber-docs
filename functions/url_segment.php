
<h2>url_segment</h2>
<p>url_segment — returns a segment of the URL</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">url_segment($seg_num,$page_url = false);
</code></pre>
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">
// By default this function will get segments from the current URL
// if you are on URL http://localhost/blog/post-title

$url_segment = url_segment(0);
var_dump($url_segment);
//prints "blog"


$url_segment = url_segment(1);
var_dump($url_segment);
//prints "post-title"
</code></pre>

<h4>Get segments from custom URL</h4>
<pre class="prettyprint"><code class="language-php">
//you can get URL segment from a string

$my_url = "http://localhost/shop/product-title";
$url_segment = url_segment(0, $my_url);
var_dump($url_segment);
//prints "shop"

$url_segment = url_segment(1, $my_url);
var_dump($url_segment);
//prints "product-title"
</code></pre>


<h4>Get ALL segments as array</h4>
<pre class="prettyprint"><code class="language-php">
// if you are on URL http://localhost/blog/post-title

$url_segments = url_segment(-1);
var_dump($url_segments);
//prints array(2) { [0]=> string(4) "blog" [1]=> string(10) "post-title" }
</code></pre>

<h4>See also</h4>



<?php print page_content('functions/_nav/url'); ?>