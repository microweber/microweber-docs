
<h2>content_link</h2>
<p>content_link — returns url to a given content</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">content_link($id);
</code></pre>
 
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">
//get a content link 
$content_link = content_link($id=3); 
print $content_link;

//prints http://www.yoursite.com/blog/my-post
</code></pre>

<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>