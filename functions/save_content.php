
<h2>save_content</h2>
<p>save_content — Saves content in the database</p>
<h3>Synopsis</h3>
<pre><code>save_content(array $data_to_save)
</code></pre>
<h3>Description</h3>
<p>This function inserts and updates posts and pages in the database. It takes an string or array as argument and returns the content id of the saved item. It does not provide any user validation and permissions validation.</p>
 

<h3>Usage</h3>
<h4>Save new content item</h4>
<pre class="prettyprint"><code class="language-php">
$data_to_save = array(); 
$data_to_save['id'] = 0; 
$data_to_save['title'] = 'My title'; 
$data_to_save['content'] = 'My content body'; 
$data_to_save['content_type'] = 'page';   
$new_id = save_content($data_to_save);

print($new_id); // prints the id of the new content 
 </code></pre>
<h4>Update content</h4>
<pre class="prettyprint"><code class="language-php">
$data_to_save = array(); 
$data_to_save['id'] = 8; //if you set id the content will be updated 
$data_to_save['title'] = 'My new title';  
$new_id = save_content($data_to_save); 
print ($new_id); // prints the id of the saved content (ex.8) </code></pre>
<h4>Params and Database fields</h4>
<p>You use those fields to store and structure your content</p>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>description</th>
			<th>optional value</th>
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
			<td>&quot;y&quot; or &quot;n&quot;</td>
		</tr>
		<tr>
			<td>parent</td>
			<td>the id of the parent page</td>
			<td>any id or 0</td>
		</tr>
		<tr>
			<td>created_by</td>
			<td>the author id</td>
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
			<td>expires_on</td>
			<td>date field</td>
			<td><code>strtotime</code> compatible date</td>
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
			<td>content_type</td>
			<td>the type of the content</td>
			<td>&quot;page&quot; or &quot;post&quot;, anything custom</td>
		</tr>
		<tr>
			<td>subtype</td>
			<td>subtype of the content</td>
			<td>&quot;static&quot;,&quot;dynamic&quot;,&quot;post&quot;,&quot;product&quot;, anything custom</td>
		</tr>
		<tr>
			<td>subtype_value</td>
			<td><em>not in use by default</em></td>
			<td>anything custom</td>
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
			<td>&quot;n&quot; or &quot;y&quot;</td>
		</tr>
		<tr>
			<td>is_home</td>
			<td>flag for homepage</td>
			<td>&quot;n&quot; or &quot;y&quot;</td>
		</tr>
		<tr>
			<td>is_shop</td>
			<td>flag for shop page</td>
			<td>&quot;n&quot; or &quot;y&quot;</td>
		</tr>
		<tr>
			<td>is_pinged</td>
			<td>flag if the search engines have been pinged</td>
			<td>&quot;n&quot; or &quot;y&quot;</td>
		</tr>
		<tr>
			<td>content_meta_title</td>
			<td>Meta title to use</td>
			<td></td>
		</tr>
		<tr>
			<td>content_meta_keywords</td>
			<td>Meta keywords</td>
			<td></td>
		</tr>
		<tr>
			<td>layout_name</td>
			<td><em>not in use by default</em></td>
			<td></td>
		</tr>
		<tr>
			<td>layout_style</td>
			<td><em>not in use by default</em></td>
			<td></td>
		</tr>
		<tr>
			<td>require_login</td>
			<td><em>not in use by default</em></td>
			<td></td>
		</tr>
		<tr>
			<td>original_link</td>
			<td><em>not in use by default</em></td>
			<td></td>
		</tr>
		<tr>
			<td>session_id</td>
			<td><em>the session id of the  user who edited the content</em></td>
			<td></td>
		</tr>
		<tr>
			<td><em>category</em></td>
			<td>id of a category to save this content to</td>
			<td>put any valid category id</td>
		</tr>
		<tr>
			<td><em>categories</em></td>
			<td>array of category ids to save this content to</td>
			<td>put any valid category ids as array</td>
		</tr>
	</tbody>
</table>
 