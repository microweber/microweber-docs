
<h2>category_tree</h2>
<p class="description">category_tree — prints nested tree of categories and sub-categories</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">category_tree($params);
</code></pre>
<h3>Default usage</h3>
<pre class="prettyprint"><code class="language-php">//get all categories
category_tree();
</code></pre>
<h3>Example with parameters</h3>
<pre class="prettyprint"><code class="language-php">
// display with parameters
$params = array(); 
$params['parent'] = 0; // parent category id 
$params['link'] = '&lt;a href=&quot;{link}&quot; id=&quot;category-{id}&quot;&gt;{title}&lt;/a&gt;'; // sets the list_item content 
$params['active_ids'] = array(5,6); //ids of active categories 
$params['active_code'] = &quot;active&quot;; //inserts this code for the active ids's 
$params['remove_ids'] = array(1,2); //remove those caregory ids 
$params['ul_class_name'] = 'nav'; //class name for the ul 
$params['include_first'] = false; //if true it will include the main parent category 
$params['add_ids'] = array(10,11); //if you send array of ids it will add them to the category tree
$params['orderby'] = array('position','asc'); //you can order by ant field ; 
$params['list_tag'] = &quot;ul&quot;; 
$params['list_item_tag'] = &quot;li&quot;;
$params['ul_class'] = 'main-category';
$params['li_class'] = 'sub-category';
category_tree($params);
// prints ULs with LIs
</code></pre>
<h3>Parameters</h3>
<p>You can pass parameters as string or as array.</p>

 
	 
	 
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>description</th>
			<th>usage</th>
		</tr>
	</thead>
	<tbody>
	<tr>
			<td>parent</td>
			<td>you can build tree from a given parent</td>
			<td>$params['parent'] = 0; </td>
		</tr>
	
		<tr>
			<td>link</td>
			<td>sets the content of the list item</td>
			<td>$params['link'] = '&lt;a href=&quot;{link}&quot;  {active_code}&gt;{title}&lt;/a&gt;'; // sets the list_item content </td>
		</tr>
		
		<tr>
			<td>ul_class</td>
			<td>sets a class for the UL</td>
			<td>$params['ul_class'] = 'nav' </td>
		</tr>
		
		<tr>
			<td>li_class</td>
			<td>sets a class for the LI</td>
			<td>$params['li_class'] = 'sub-nav' </td>
		</tr>
		
		
	 
		<tr>
			<td>list_tag</td>
			<td>you can set custom tag insted of UL</td>
			<td>$params['list_tag'] = 'div'; // sets the list main tag</td>
		</tr>
		<tr>
			<td>list_item_tag</td>
			<td>you can set custom tag insted of LI</td>
			<td>$params['list_item_tag'] = 'span'; // sets the list items tag</td>
		</tr>
		
		<tr>
			<td>remove_ids</td>
			<td>removes certain ids from the tree</td>
			<td>$params['remove_ids'] = array(1,2);</td>
		</tr>
		
		
			<tr>
			<td>add_ids</td>
			<td>sdds certain ids to the tree</td>
			<td>$params['add_ids'] = array(5,7);</td>
		</tr>
		
		
		<tr>
			<td>active_code</td>
			<td>inserts this code for the active ids's</td>
			<td>$params['active_code'] = "class='selected'";   </td>
		</tr>
		<tr>
			<td>active_ids</td>
			<td>inserts active_code as those ids</td>
			<td>$params['active_ids'] = array(3); // sets ids where {active_code} will be inserted</td>
		</tr>
		<tr>
			<td>max_level</td>
			<td>if set it will limit the depth of the ree</td>
			<td>category_tree(max_level=1');</td>
		</tr>
	</tbody>
</table>
<h4>See also</h4>
<?php print page_content('functions/_nav/categories'); ?>