
<h2>template_name</h2>
<p>template_name — returns the dirname of the curent template</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">template_name();
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">
//get the current template directory name
$template_name = template_name();
var_dump($template_name);

//prints my_template
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/template'); ?>
 