
<h2>thumbnail</h2>
<p>thumbnail - Resizes an image and returns the url of the resized thumbnail</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">thumbnail($src, $width = 200, $height = 200);
</code></pre>
<h3>Usage</h3>
<p>Get the picture of a post</p>
<pre class="prettyprint"><code class="language-php runner"> 
$content_id = 1;
$picture_link = get_picture($content_id);

$thumbnail = thumbnail($picture_link,150,150);

print &quot;&lt;img src='&quot;.$thumbnail.&quot;' /&gt;&quot;;
 
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/media'); ?>