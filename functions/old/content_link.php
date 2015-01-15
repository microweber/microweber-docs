
<h2>content_link</h2>
<p>content_link — returns url to a given content</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">content_link($id);
</code></pre>


<h3>Return Values</h3> 
 <p>
<code>String</code> with the content URL or <code>false</code> if the content is not found</p>

 
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">
//get a content link 
$content_link = content_link($id=3); 
print $content_link;

//prints http://example.com/blog/my-post
</code></pre>

<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>