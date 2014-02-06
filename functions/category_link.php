
<h2>content_link</h2>
<p>category_link — returns url to a given category</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">category_link($id);
</code></pre>
<h3>Return Values</h3>
<p> <code>String</code> with the category link or <code>false</code> if the category is found.</p>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">
//get a category link 
$category_link = category_link(23); 
print $category_link;
 
//prints http://www.yoursite.com/my-shop/category:23
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/categories'); ?>