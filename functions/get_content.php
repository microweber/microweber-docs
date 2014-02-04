
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

<h3>Usage</h3> 
<pre class="prettyprint"><code class="language-php">
$content = get_content();

foreach ($content as $item) {
    print $item['id'];
    print $item['parent'];
    print $item['position'];
    print $item['title'];
    print $item['url'];
    print $item['description'];
    print $item['content'];
    print $item['content_type'];
    print $item['subtype'];
    print $item['created_on'];
    print $item['updated_on'];
    print $item['created_by'];
    print $item['edited_by'];
} 
</code></pre>
 
 
  
<h3>Return Values</h3> 
 <p>
Returns array if results are found of false</p>


 
<h3>Parameters</h3> 

 
 <?php print page_content('params/content'); ?>
	 

 
<h4>Params as array or string</h4>
<p>You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table</p>
<pre class="prettyprint"><code class="language-php">
// parameters as string
$content = get_content("is_active=y")

//parameters as array 
$params =  array("is_active"=>"y");
$content = get_content($params);
 </code></pre>

<h2>Examples</h2>







<h3>Basic example</h3>

<pre class="prettyprint"><code class="language-php">
//basic
$params = array(
'limit' =&gt; 10, // get 10 posts
'order_by' =&gt; 'created_on desc',
'content_type' =&gt; 'post', //or page
'subtype' =&gt; 'post', //or product, you can use this field to store your custom content
'is_active' =&gt; 'y');

$recent_posts = get_content($params);

</code></pre>















<h3 id="get-posts-or-products">Get posts or products</h3>
<pre class="prettyprint"><code class="language-php">//get posts
$posts = get_content('content_type=post');

//get products
$products = get_content('content_type=post&amp;subtype=product');

</code></pre>
<h3>Get by parent or category</h3>
<pre class="prettyprint"><code class="language-php">//get only main pages
$pages = get_content('content_type=page&amp;parent=0');

//get posts from a parent page 
$last_edited_posts = get_content('content_type=post&amp;parent=3');


//get posts from category 
$last_edited_posts = get_content('content_type=post&amp;category=1');
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