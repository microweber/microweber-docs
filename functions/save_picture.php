
<h2>save_picture</h2>
<p>save_picture - Saves a picture in the database</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">save_picture($params);
</code></pre>
<h3>Usage</h3>
<p>Get the picture of a post</p>
<pre class="prettyprint"><code class="language-php runner">$picture = array(
'content-id'=&gt;3,
'title'=&gt;&quot;My new pics&quot;,
'src'=&gt; &quot;http://lorempixel.com/400/200/&quot;
);
$saved_pic_id = save_picture($picture);

print &quot;Picture ID saved: &quot;.$saved_pic_id;

$picture_data = get_picture_by_id($saved_pic_id);

$src = $picture_data['filename'];
print &quot;&lt;img src='&quot;.$src.&quot;' /&gt;&quot;;
 
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/media'); ?>