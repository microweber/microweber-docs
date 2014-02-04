
<h2>template_url</h2>
<p>template_url — returns the URL of the current template</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">template_url();
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">
//get the current template url
$template_url = template_url();
var_dump($template_url);

//prints http://localhost/Microweber/userfiles/templates/my_template/
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/template'); ?>