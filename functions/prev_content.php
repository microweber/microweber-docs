
<h2>prev_content</h2>
<p>prev_content — Gets previous content item</p>
<h3>Summary</h3>
<pre><code>prev_content()
</code></pre>
<h3>Description</h3>
<p>This function will get the previous page or post. If the post is in a category it will return the previous post from the same category.</p>
<h3>Return Values</h3>
<p> <code>Array</code> with the previous content or <code>false</code> if the content is not found</p>
<h3>Usage</h3>
<h4>Get previous content of the current page or post </h4>
<pre class="prettyprint"><code class="language-php">
$prev =  prev_content();  
if($prev != false){
print $prev['title'];
print content_link($prev['id']);
}
 </code></pre>
<h4>Get previous content of another post </h4>
<pre class="prettyprint"><code class="language-php">
$prev =  prev_content($content_id=5);  
if($prev != false){
print $prev['title'];
print content_link($prev['id']);
}
 </code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>