
<h2>pictures</h2>
<p> Gets pictures </p>
<pre class="prettyprint"><code class="language-html">&lt;microweber module=&quot;pictures&quot; for=&quot;content&quot; for-id=&lt;?php print $content_id; ?&gt; /&gt; </code></pre>
<h3>Module parameters</h3>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>description</th>
			<th>optional values</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>id</td>
			<td>the id of the content</td>
			<td></td>
		</tr>
	</tbody>
</table>
<h2>Examples</h2>
 <pre class="prettyprint"><code class="language-php runner proc">&lt;?php $content_id = 1; ?&gt;
&lt;microweber module=&quot;pictures&quot; for=&quot;content&quot; for-id=&lt;?php print $content_id; ?&gt; /&gt;</code></pre>
 



 