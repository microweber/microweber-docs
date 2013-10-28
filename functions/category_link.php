
<h2>content_link</h2>
<p>category_link — returns url to a given category</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">category_link($id);
</code></pre>
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">
//get a category link 
$category_link = category_link(23); 
print $category_link;
 
//prints http://www.yoursite.com/my-shop/category:23
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/categories'); ?>