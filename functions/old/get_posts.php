
<h2>get_posts</h2>
<p> Get the posts of your website
</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">get_posts($params);
</code></pre>
<p>
The <code>get_posts()</code> function is used in Microweber to get the posts from the database and return them as array. <br />
Using it you can filter the posts by criteria and access all data releated to it.
</p>
<p>
It takes a array or sting as parameter and returns the database records for the content.
</p>
  <p>
By default <code>get_posts()</code> works with predefined content type "post", but you can use it to get any  content type.


</p>
  
<h3>Return Values</h3> 
 <p>
<code>Array</code> with the post data or <code>false</code> if the no results are found</p>
<h3>Usage</h3> 
<pre class="prettyprint"><code class="language-php runner">&lt;?php
$content = get_posts();

foreach ($content as $item) {<br />    print &quot;Title: &quot; . $item['title'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;The id is &quot; . $item['id'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Link: &quot; . $item['url'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Description: &quot; . $item['description'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Date created: &quot; . $item['created_at'].&quot;&lt;/br&gt;&quot;;<br />    // print_r($item).&quot;&lt;/br&gt;&quot;;<br />} 
</code></pre>
 
 
  
<h3>Return Values</h3> 
 <p>
Returns array if results are found of false</p>


 
<h3>Parameters</h3> 

 
<?php print page_content('params/content'); ?>
	 

 
<h4>Params as array or string</h4>
<p>You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table</p>
<h5>Parameters as string</h5>
<pre class="prettyprint"><code class="language-php runner">$content = get_posts("is_active=y");
print_r($content);
 </code></pre>
<h5>Parameters as array</h5>
<pre class="prettyprint"><code class="language-php runner">$params =  array("is_active"=>"y");
$content = get_posts($params);
print_r($content);
 </code></pre>

<h2>Examples</h2>







<h3>Basic example</h3>

<pre class="prettyprint"><code class="language-php runner">
//basic
$params = array(
'limit' =&gt; 10, // get 10 posts
'order_by' =&gt; 'created_at desc',
'is_active' =&gt; 'y');

$recent_posts = get_posts($params);

print &quot;&lt;ul&gt;&quot;;<br />foreach ($recent_posts as $item) {<br />    print &quot;&lt;li&gt;&lt;a href=&quot;.$item['url'].&quot;&gt;&quot; . $item['title'].&quot;&lt;/a&gt;&lt;/li&gt;&quot;;<br />}<br />print &quot;&lt;/ul&gt;&quot;;
</code></pre>















<h3>Get by parent or category</h3>
<pre class="prettyprint"><code class="language-php runner">
//get posts with a parent post 
$posts = get_posts('parent=2');
print_r($posts);

//get posts from category 
$posts_from_category = get_posts('category=1');

print_r($posts_from_category);

</code>
</pre>
<h3 id="get-posts-or-products">&nbsp;</h3>
<h3 id="limit-and-paging">Limit and paging</h3>
<pre class="prettyprint"><code class="language-php"> //get 5 posts
$posts = get_posts('limit=5');

//get next 5 posts
$posts = get_posts('limit=5&amp;page=2');

</code></pre>
<h3 id="order-by-any-db-field">Order by any DB field</h3>
<pre class="prettyprint"><code class="language-php"> //get the top posts 
$posts = get_posts('order_by=position desc');

//get last edited posts
$last_edited_posts = get_posts('order_by=updated_at desc');

</code></pre>
<h3 id="filter-the-results-by-any-field">Filter by any field</h3>
<pre class="prettyprint"><code class="language-php">
//get posts with title
$search_for_posts = get_posts('title=My post');

//get posts with keyword
$search_for_posts = get_posts('keyword=My first post');
</code></pre>
 
 
 
 
<h3>Other parameters</h3>
<pre class="prettyprint"><code class="language-php"> 
//all params
$params = array( 
'limit' =&gt; 10, // get 10 posts
'page' =&gt; 0, //offset of limit
'order_by' =&gt; 'created_at desc', 
'include' =&gt; '1,10,11' ,
'exclude' =&gt; '23', 
'parent' =&gt; 7, 
'is_active' =&gt; 'y');
 
$posts = get_posts($params); 
 </code></pre>
 
 
 
<h4>See also</h4> 
<?php print page_content('functions/_nav/content'); ?>