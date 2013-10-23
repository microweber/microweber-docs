
<h2>save</h2>
<p>Allows you to save data to ANY table in the database.</p>

<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">save($table, $data);
</code></pre>
 






<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
$data = array(); 
$data['id'] = 0; 
$data['title'] = 'My title'; 
$data['content'] = 'My content'; 
$data['allow_html'] = true; //if true will allow you to save html 

$saved = save($table='content',$data);
</code></pre>
<h3>Parameters</h3>
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
			<td>$table</td>
			<td>the name of your database table</td>
			<td>save($table='content',$data)</td>
		</tr>
		<tr>
			<td>$data</td>
			<td>a key=&gt;value array of your data to save</td>
			<td>$saved_id = save('content',array('id'=&gt;5,'title'=&gt;&quot;My title&quot;));</td>
		</tr>
	</tbody>
</table>
<h4>See also</h4>
<?php print page_content('functions/nav.db'); ?>