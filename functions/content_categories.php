
<h2>content_categories</h2>
<p>content_categories — returns array categories for given content id</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">content_categories($content_id);
</code></pre>
 
<h3>Return Values</h3> 
 <p>
<code>Array</code> with the content categories or <code>false</code> if the content is not found</p>

<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">//get categories for post or product
$post = array(<br />&quot;title&quot;=&gt;&quot;My post from category&quot;,<br />&quot;content&quot;=&gt;&quot;My post content from <?php print date("Y-m-d H:i:s") ?>&quot;,<br />&quot;categories&quot;=&gt;&quot;Blog,My Links,Random category <?php print rand(1,100); ?>&quot;,
&quot;parent&quot;=&gt;2<br />);
<br />$content_id = save_content($post);

$categories = content_categories($content_id); 

// make links for the result
if(!empty($categories)){<br />    print &quot;&lt;ul&gt;&quot;;<br />    foreach($categories as $category){<br />    print &quot;&lt;li&gt;&lt;a href=&quot;.category_link($category['id']).&quot;&gt;&quot;.$category['title'].&quot;&lt;/a&gt;&lt;/li&gt;&quot;;<br />    }<br />    print &quot;&lt;/ul&gt;&quot;;<br />}
</code></pre>





<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>