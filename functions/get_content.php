
<h2>get_content</h2>
<p> Get any kind of content from your site
</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get_content($params);
</code></pre>
<p>
The <code>get_content()</code> function is used in Microweber to get the pages and posts from the database and return them as array. <br />
Using it you can filter the content by criteria and access all data releated to it.
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
    print $item['layout_file'];
} 
</code></pre>
 
 
<h3>Parameters</h3> 
<pre class="prettyprint"><code class="language-php">&lt;?php 
    //basic
     $params = array(
      'limit' =&gt; 10, // get 10 posts
      'order_by' =&gt; 'created_on desc',
      'content_type' =&gt; 'post', //or page
      'subtype' =&gt; 'post', //or product, you can use this field to store your custom content
      'is_active' =&gt; 'y');
   
     $recent_posts = get_content($params);


 
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
     $posts = get_content($params);<br />
 ?&gt;
</code></pre>
 
 
	 
	 
<h4>Params as array or string</h4>
<p>You can pass parameters as string or as array. Those parameters are with the same names as the fields in the content database table</p>
<pre class="prettyprint"><code class="language-php">
// parameters as string
$content = get_content("is_active=y")

//parameters as array 
$params =  array("is_active"=>"y");
$content = get_content($params);
 </code></pre>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>description</th>
			<th>value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>id</td>
			<td>the id of the content</td>
			<td></td>
		</tr>
		<tr>
			<td>is_active</td>
			<td>published or unpublished</td>
			<td>"y" or "n"</td>
		</tr>
		<tr>
			<td>parent</td>
			<td>get content with parent</td>
			<td>any id or 0</td>
		</tr>
		<tr>
			<td>created_by</td>
			<td>get by author id</td>
			<td>any user id</td>
		</tr>
		<tr>
			<td>created_on</td>
			<td>the date of creation</td>
			<td><code>strtotime</code> compatible date</td>
		</tr>
		<tr>
			<td>updated_on</td>
			<td>the date of last edit</td>
			<td><code>strtotime</code> compatible date</td>
		</tr>
		<tr>
			<td>content_type</td>
			<td>the type of the content</td>
			<td>"page" or "post", anything custom</td>
		</tr>
		<tr>
			<td>subtype</td>
			<td>subtype of the content</td>
			<td>"static","dynamic","post","product", anything custom</td>
		</tr>
		<tr>
			<td>url</td>
			<td>the link to the content</td>
			<td></td>
		</tr>
		<tr>
			<td>title</td>
			<td>Title of the content</td>
			<td></td>
		</tr>
		<tr>
			<td>content</td>
			<td>The html content saved in the database</td>
			<td></td>
		</tr>
		<tr>
			<td>description</td>
			<td>Description used for the content list</td>
			<td></td>
		</tr>
		<tr>
			<td>position</td>
			<td>The order position</td>
			<td></td>
		</tr>
		<tr>
			<td>active_site_template</td>
			<td>Current template for the content</td>
			<td></td>
		</tr>
		<tr>
			<td>layout_file</td>
			<td>Current layout from the template directory</td>
			<td></td>
		</tr>
		<tr>
			<td>is_deleted</td>
			<td>flag for deleted content</td>
			<td>"n" or "y"</td>
		</tr>
		<tr>
			<td>is_home</td>
			<td>flag for homepage</td>
			<td>"n" or "y"</td>
		</tr>
		<tr>
			<td>is_shop</td>
			<td>flag for shop page</td>
			<td>"n" or "y"</td>
		</tr>
		<tr>
			<td><em>category</em></td>
			<td>id of the category search for content</td>
			<td>any valid category id</td>
		</tr>
	</tbody>
</table>
<h2>Examples</h2>
<h3 id="get-posts-or-products">Get posts or products</h3>
<pre class="prettyprint"><code class="language-php">//get posts
$posts = get_content('content_type=post');

//get products
$products = get_content('content_type=post&amp;subtype=product');

</code></pre>
<h3 id="get-posts-or-products">Get by parent or category</h3>
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
//get posts with keyword
$search_for_posts = get_content('content_type=post&amp;keyword=My post');

//get pages with keyword
$search_for_posts = get_content('content_type=page&amp;keyword=About us');
</code></pre>
 
 
 
<h4>See also</h4> 
<?php print page_content('functions/_nav/content'); ?>