
	
<table class="table table-striped table-hover params-table">
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