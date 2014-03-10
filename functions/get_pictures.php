
<h2>get_pictures</h2>
<p> Returns array of content pictures</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">get_pictures($params);
</code></pre>
<h3>Usage</h3>
<p>Get the picture of a post</p>
<pre class="prettyprint"><code class="language-php runner"> 
$content_id = 1;
$pictures = get_pictures($content_id);

if(!empty($pictures)){
	foreach($pictures as $picture){
	print &quot;&lt;img src=&quot;.$picture['filename'].&quot; /&gt;&quot;;
	print &quot;&lt;div&gt;&quot;.$picture['title'].&quot;&lt;/div&gt;&quot;;
	var_dump($picture);
   }
}
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/media'); ?>