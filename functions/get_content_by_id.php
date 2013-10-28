
<h2>get_content_by_id</h2>
<p>get_content_by_id — returns array of content data or false</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get_content_by_id($id);
</code></pre>
 
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">//get a content item by id
$content = get_content_by_id(3); 

if($content != false){
	print $content['title'];  
	print $content['id'];
	print $content['parent'];
	print $content['position'];
	print $content['title']; 
	// and more... print_r($content);
}
</code></pre>

<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>