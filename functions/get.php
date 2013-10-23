
<h2>get</h2>
<p>Allows you to get data from ANY table in the database, and caches the result.</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get($params);
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
$content = get('from=content');

foreach ($content as $item) {
    print $item['id'];
    print $item['title'];
    print $item['url'];
    print $item['description'];
    print $item['content'];
 
} 
</code></pre>
<h3>Parameters</h3>
<p>You can pass parameters as string or as array. They can be field names in the database table defined with the <code>from</code> parameter.</p>
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
			<td>from</td>
			<td>your database table</td>
			<td>get('from=content')</td>
		</tr>
		<tr>
			<td>single</td>
			<td>if set to true will return only the 1st row as array</td>
			<td>get('from=content&amp;id=5&amp;single=true')</td>
		</tr>
		<tr>
			<td>orderby</td>
			<td>you can order by any field name</td>
			<td>get('from=content&amp;orderby=id desc')</td>
		</tr>
		<tr>
			<td>count</td>
			<td>if set to true it will return the results count</td>
			<td>get('from=content&amp;count=true')</td>
		</tr>
		<tr>
			<td>limit</td>
			<td>set limit of the returned dataset</td>
			<td>get('from=content&amp;limit=10')</td>
		</tr>
		<tr>
			<td>curent_page</td>
			<td>set offset of the returned dataset</td>
			<td>get('from=content&amp;limit=10&amp;curent_page=2')</td>
		</tr>
		<tr>
			<td>$fieldname</td>
			<td>you can filter data by passing your fields as params</td>
			<td>get('from=content&amp;my_field=value')</td>
		</tr>
		<tr>
			<td>keyword</td>
			<td>if set it will search for keyword</td>
			<td>get('from=content&amp;limit=10&amp;keyword=my title')</td>
		</tr>
	</tbody>
</table>
<h3 id="limit-and-paging">Get everything</h3>
<pre class="prettyprint"><code class="language-php"> //get 5 users
$users = get('from=users&amp;limit=5');

//get next 5 users
$users = get('from=users&amp;limit=5&amp;page=2');

//get 5 categories
$categories = get('from=categories&amp;limit=5');

//get 5 comments
$comments = get('from=comments&amp;limit=5');
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/nav.db'); ?>