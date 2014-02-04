
<h2>content_categories</h2>
<p>content_categories — returns array category yes for given content id or false</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">content_categories($content_id);
</code></pre>
 
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">//get categories for post or product
$categories = content_categories(3); 

// make links for the result
if(!empty($categories)){
	foreach($categories as $category){
	print $category['title'];
	print $category['id'];
	print category_link($category['id']);	
	}
}
</code></pre>





<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>