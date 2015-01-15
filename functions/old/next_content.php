
<h2>next_content</h2>
<p>next_content — Gets next content item</p>
<h3>Summary</h3>
<pre><code>next_content()
</code></pre>
<h3>Description</h3>
<p>This function will get the next page or post. If the post is in a category it will return the next post from the same category.</p>
<h3>Return Values</h3>
<p> <code>Array</code> with the next content or <code>false</code> if the content is not found</p>
<h3>Usage</h3>
<h4>Get next content of the current page or post </h4>
<pre class="prettyprint"><code class="language-php">
$next =  next_content();  
if($next != false){
print $next['title'];
print content_link($next['id']);
}
 </code></pre>
<h4>Get next content of another post </h4>
<pre class="prettyprint"><code class="language-php">
$next =  next_content($content_id=5);  
if($next != false){
print $next['title'];
print content_link($next['id']);
}
 </code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>