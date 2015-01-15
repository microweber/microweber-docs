
<h2>delete_category</h2>
<p class="description">delete_category — deletes a category</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">delete_category($category_id);
</code></pre>

<h3>Return Values</h3> 
 <p>
<code>Integer</code> with the deleted category id or <code>false</code> if the category is not deleted</p>




<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
$category_id = 5;
 
$delete = delete_category($category_id);
</code></pre>
 
<h4>See also</h4>
<?php print page_content('functions/_nav/categories'); ?>