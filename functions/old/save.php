
<h2>save</h2>
<p itemprop="description">Allows you to save data to ANY table in the database.</p>

<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">save($table, $data);
</code></pre>
<p>This is one of the core Microweber function and most of the other <em>save</em> functions are really wrappers to this one.It allows you to save data anywhere in any db table.</p>
<div class="alert alert-info">
	<p> <strong>Note: This is raw function and does not validate data input or user permissions. </strong> <br />
		This function is dangerous and its not meant to be used directly in templates or module views. Better make your own wrapper functions to this one which validates the input  and use them when required.</p>
</div>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">
$table='content';

$data = array(); 
$data['id'] = 0; 
$data['title'] = 'My title'; 
$data['content'] = 'My content'; 
$data['allow_html'] = true; //if true will allow you to save html 

$saved = save($table,$data);
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
			<td><code>$table</code></td>
			<td>the name of your database table</td>
			<td>save('content',$data)</td>
		</tr>
		<tr>
			<td><code>$data</code></td>
			<td>a key=&gt;value array of your data to save</td>
			<td>$saved_id = save('content',array('id'=&gt;5,'title'=&gt;&quot;My title&quot;));</td>
		</tr>
	</tbody>
</table>
By default this function removes html tags. In order to save plain html you must set <code>$data['allow_html'] = true;</code> in your data array
<h4>See also</h4>
<?php print page_content('functions/_nav/db'); ?>