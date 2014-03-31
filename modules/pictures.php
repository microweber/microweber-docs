
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
<h3>How to style the pictures module</h3>
<h4>Create skin  in the site template dir</h4>
 <p>Use this option if your skins are dependant on the site template. </p>
 <p>Create a folder in <code>userfiles/templates/my_site_template/modules/pictures/templates/</code></p>
 <p>All skins that you put in this folder will work only in your site template</p>
 <h4>Create skin   in the modules dir</h4>
 <p>Use this option if your skin use its own CSS and its not dependant on the site template. </p>
 <p>Create your skin in this folder <code>userfiles/modules/pictures/templates/</code></p>
 <p>All skins that you put in this folder will work only in all site templates</p>
 <h4>Sample skin</h4>
 <code>my_skin.php</code>
 <pre class="prettyprint"><code class="language-php">&lt;?php

/*
type: layout
name: My pictures template
description: Simple Pictures List
*/

?&gt;
&lt;script&gt;mw.moduleCSS(&quot;&lt;?php print $config['url_to_module']; ?&gt;css/my_style.css&quot;); &lt;/script&gt;
&lt;script&gt;mw.require(&quot;&lt;?php print $config['url_to_module']; ?&gt;js/my_style.js&quot;); &lt;/script&gt;

&lt;?php if (is_array($data)): ?&gt;
    &lt;?php  foreach ($data as $item): ?&gt;
        &lt;a href=&quot;&lt;?php print ($item['filename']); ?&gt;&quot;&gt;
          &lt;img src=&quot;&lt;?php print thumbnail($item['filename'], 300); ?&gt;&quot;/&gt;
        &lt;/a&gt;
    &lt;?php endforeach;  ?&gt;
&lt;?php else : ?&gt;
&lt;?php endif; ?&gt;</code></pre>
 
<!--<h3>Integrating third-party scripts</h3>

-->

