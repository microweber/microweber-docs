
<h2>get_content</h2>
<p> Get any kind of content from your site
</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">get_content($params);
</code></pre>
<p>
The <code>get_content()</code> function is used in Microweber to get the pages and posts from the database and return them as array. <br />
Using it you can filter the content by criteria and access all data releated to it.
</p>
<p>
It takes a array or sting as parameter and returns the database records for the content.
</p>
  <p>
By default <code>get_content()</code> works with predefined content types such as "page" and "post", but you can use it to get any custom content type.


</p>
  
<h3>Return Values</h3> 
 <p>
<code>Array</code> with the post data or <code>false</code> if the no results are found</p>
<h3>Usage</h3> 
<pre class="prettyprint"><code class="language-php runner">&lt;?php
$content = get_content();

foreach ($content as $item) {<br />    print &quot;Title: &quot; . $item['title'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;The id is &quot; . $item['id'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Link: &quot; . $item['url'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Description: &quot; . $item['description'].&quot;&lt;/br&gt;&quot;;<br />    print &quot;Date created: &quot; . $item['created_on'].&quot;&lt;/br&gt;&quot;;<br />    // print_r($item).&quot;&lt;/br&gt;&quot;;<br />} 
</code></pre>
 
 
  
<h3>Return Values</h3> 
 <p>
Returns array if results are found of false</p>


 
<h3>Parameters</h3> 

 
<?php print page_content('params/content'); ?>
	 

 
<h4>Params as array or string</h4>
<p>You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table</p>
<h5>Parameters as string</h5>
<pre class="prettyprint"><code class="language-php runner">$content = get_content("is_active=y");
print_r($content);
 </code></pre>
<h5>Parameters as array</h5>
<pre class="prettyprint"><code class="language-php runner">$params =  array("is_active"=>"y");
$content = get_content($params);
print_r($content);
 </code></pre>

<h2>Examples</h2>







<h3>Basic example</h3>

<pre class="prettyprint"><code class="language-php runner">
//basic
$params = array(
'limit' =&gt; 10, // get 10 posts
'order_by' =&gt; 'created_on desc',
'content_type' =&gt; 'post', //or page
'subtype' =&gt; 'post', //or product, you can use this field to store your custom content
'is_active' =&gt; 'y');

$recent_posts = get_content($params);

print &quot;&lt;ul&gt;&quot;;<br />foreach ($recent_posts as $item) {<br />    print &quot;&lt;li&gt;&lt;a href=&quot;.$item['url'].&quot;&gt;&quot; . $item['title'].&quot;&lt;/a&gt;&lt;/li&gt;&quot;;<br />}<br />print &quot;&lt;/ul&gt;&quot;;
</code></pre>















<h3 id="get-posts-or-products">Get posts or products</h3>
<pre class="prettyprint"><code class="language-php runner">//get posts
$posts = get_content('content_type=post&amp;subtype=post&amp;limit=3');
print_r($posts);

//get products
$products = get_content('content_type=post&amp;subtype=product');
print_r($products);
</code></pre>
<h3>Get by parent or category</h3>
<pre class="prettyprint"><code class="language-php runner">//get only main pages
$pages = get_content('content_type=page&amp;parent=0');

//get posts with a parent page 
$posts = get_content('content_type=post&amp;parent=2');
print_r($posts);

//get posts from category 
$posts_from_category = get_content('content_type=post&amp;category=1');
</code></pre>
<h3 id="limit-and-paging">Limit and paging</h3>
<pre class="prettyprint"><code class="language-php"> //get 5 posts
$posts = get_content('content_type=post&amp;limit=5');

//get next 5 posts
$posts = get_content('content_type=post&amp;limit=5&amp;page=2');

</code></pre>
<h3 id="order-by-any-db-field">Order by any DB field</h3>
<pre class="prettyprint"><code class="language-php"> //get the top pages 
$pages = get_content('content_type=page&amp;order_by=position desc');

//get last edited posts
$last_edited_posts = get_content('content_type=post&amp;order_by=updated_on desc');

</code></pre>
<h3 id="filter-the-results-by-any-field">Filter by any field</h3>
<pre class="prettyprint"><code class="language-php">
//get posts with title
$search_for_posts = get_content('content_type=post&amp;title=My post');

//get pages with keyword
$search_for_posts = get_content('content_type=page&amp;keyword=About us');
</code></pre>
 
 
 
 
<h3>Other parameters</h3>
<pre class="prettyprint"><code class="language-php"> 
//all params
$params = array( 
'limit' =&gt; 10, // get 10 posts
'page' =&gt; 0, 
'category' =&gt; 0, 
'order_by' =&gt; 'created_on desc', 
'include' =&gt; '1,10,11' ,
'exclude' =&gt; '23', 
'parent' =&gt; 7,  
 'content_type' =&gt; 'post', //or page
'subtype' =&gt; 'post', //or product, you can use this field to store your custom content
'is_active' =&gt; 'y');
 
$posts = get_content($params); 
 </code></pre>
 
 
 
<h4>See also</h4> 
<?php print page_content('functions/_nav/content'); ?>