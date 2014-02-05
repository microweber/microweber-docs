 
<h2>get_custom_fields</h2>
 

<p>
Gets custom fields
<p>
 <pre class="prettyprint"><code class="language-php"> 
 $fields = get_custom_fields($params);
 </code></pre>
 
 
 
 
 
 

<h3>Parameters and fields</h3>
<p>You can pass parameters as string or as array.</p>
<pre class="prettyprint"><code class="language-php">
//Example of paramerers as string
$fields = get_custom_fields("field_type=shipping&is_active=n&content_id=".$cont_id);
 </code></pre>

 

<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>optional values</th>
			<th>description</th>
			
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>id</td>
			<td><code>get_custom_fields("id=3");</code></td>
			<td>the id of custom field</td>
		</tr>
		<tr>
			<td>content_id</td>
			<td><code>get_custom_fields("content_id=7");</code></td>
			<td>id of page or post</td>
		</tr>
		<tr>
			<td>return_full</td>
			<td><code>get_custom_fields("content_id=7&return_full=true");</code></td>
			<td>if set it will return full array insead of values</td>
		</tr>
		 
		 
	</tbody>
</table>
 


<h4>See also</h4>
<?php print page_content('functions/_nav/custom_fields'); ?>









 