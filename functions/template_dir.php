
<h2>template_dir</h2>
<p>template_dir — returns the full directory of the current template</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">template_dir();
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">
//get the template directory
$template_dir = template_dir();
var_dump($template_dir);

//prints /home/user/public_html/userfiles/templates/my_template/
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/template'); ?>