
<h2>template_header</h2>
<p>template_header — allows you to append Scrips and CSS to the site's <code>&lt;head&gt;</code></p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">template_header($tags);
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner proc">print "append css to head";
template_header('http://bootswatch.com/cyborg/bootstrap.css');
</code></pre>

<h4>Append inline source to header </h4>
<pre class="prettyprint"><code class="language-php runner proc">print &quot;append inline js to head&quot;;
template_header('&lt;script&gt;alert(&quot;Hi&quot;);&lt;/script&gt;');
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/template'); ?>