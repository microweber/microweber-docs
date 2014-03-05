 
<p>Here you will find all template constants and variables that are available in 
every page.</p>
<p>You can use them also in your modules<br></p>
<p><b>Template Constants</b></p>
<table>
	<tr>
		<td>Constant<br></td>
		<td>Example value<br></td>
	</tr>
	<tr>
		<td>
		<pre>TEMPLATE_URL</pre>
		</td>
		<td>http://example.com/userfiles/templates/my_template</td>
	</tr>
	<tr>
		<td>
		<pre>TEMPLATE_DIR</pre>
		</td>
		<td>/home/user/public_html/userfiles/templates/my_template </td>
	</tr>
</table>
<b>Content Constants</b><br>
<table>
	<tr>
		<td>Constant<br></td>
		<td>Example value</td>
	</tr>
	<tr>
		<td>
		<pre>PAGE_ID</pre>
		</td>
		<td>The id of the current page or 0 if page is not found<br></td>
	</tr>
	<tr>
		<td>
		<pre>POST_ID
</pre>
		</td>
		<td>The id of the current post or 0 if you are not in a post<br></td>
	</tr>
	<tr>
		<td>
		<pre>CATEGORY_ID</pre>
		</td>
		<td>The id of the current category or 0 if you are not in a category</td>
	</tr>
	<tr>
		<td><br></td>
		<td><br></td>
	</tr>
	<tr>
		<td>MAIN_PAGE_ID</td>
		<td>The id of the parent page if you are in a subpage<br></td>
	</tr>
	<tr>
		<td>ROOT_PAGE_ID</td>
		<td>The id of the main parent page if you are in deep sub-page<br></td>
	</tr>
</table>
<br><b>Variables</b><br>
<table>
	<tr>
		<td>$content</td>
		<td>Array of the current content item, it can be page or post<br></td>
	</tr>
	<tr>
		<td>
		<pre>$page</pre>
		</td>
		<td>Array with the data for the current page<br></td>
	</tr>
	<tr>
		<td>
		<pre>$post</pre>
		</td>
		<td>Array with the data for the current post</td>
	</tr>
	<tr>
		<td><br></td>
		<td></td>
	</tr>
</table>
