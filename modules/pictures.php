
<h2>pictures</h2>
<p>Shows a picture gallery</p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;pictures&quot; content-id=&quot;1&quot; /&gt; </code></pre>
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
			<td><code>content-id</code></td>
			<td>the id of the content</td>
			<td>any valid content id</td>
		</tr>
		<tr>
		  <td><code>template</code></td>
		  <td>set the gallery template, you can also <a href="<?php print site_url() ?>developer-guide/making-a-module/module-template">make your own module template</a> </td>
		  <td>default templates are: <code>default</code>, <code>masonry</code>, <code>product_gallery</code>, <code>product_gallery_multiline</code>, <code>simple</code>, <code>slider</code></td>
	  </tr>
	</tbody>
</table>
<h2>Examples</h2>
 <pre class="prettyprint"><code class="language-php runner proc">&lt;?php $content_id = 1; ?&gt;
&lt;module type=&quot;pictures&quot; content-id=&lt;?php print $content_id; ?&gt; /&gt;</code></pre>
<h2>Set gallery template</h2>
 <pre class="prettyprint"><code class="language-php runner proc">&lt;?php //set a skin ?&gt;
&lt;module type=&quot;pictures&quot; content-id=&quot;1&quot; template=&quot;masonry&quot;  /&gt;</code>
</pre>
<p>Test other templates</p>
 <pre class="prettyprint"><code class="language-php runner proc">&lt;?php $template = 'product_gallery'; ?&gt;
&lt;h2&gt;Preview of &lt;?php print $template ?&gt;&lt;/h2&gt;
&lt;module type=&quot;pictures&quot; content-id=&quot;1&quot; template=&quot;&lt;?php print $template ?&gt;&quot;  /&gt;
  
&lt;?php $template = 'slider'; ?&gt;
&lt;h2&gt;Preview of &lt;?php print $template ?&gt;&lt;/h2&gt;
&lt;module type=&quot;pictures&quot; content-id=&quot;1&quot; template=&quot;&lt;?php print $template ?&gt;&quot;  /&gt;</code></pre>