
<h2>get_picture</h2>
<p> Returns the url of the post picture of false if pic is not found</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">get_picture($content_id);
</code></pre>
<h3>Usage</h3>
<p>Get the picture of a post</p>
<pre class="prettyprint"><code class="language-php runner"> 
$content_id = 1;
$picture = get_picture($content_id);
var_dump($picture);
 
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/media'); ?>