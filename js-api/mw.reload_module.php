<h2>mw.reload_module</h2>
<p>mw.reload_module — reloads all modules that match given selector</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-php">mw.reload_module(module, callback); </code></code>
<h3>Return Values</h3>
<p>This function makes Ajax calls and reloads all modules HTML</p>
<h3>Example Usage</h3>
<pre class="prettyprint"><code class="language-php">mw.reload_module('posts');</code></pre>


<h4>Usage</h4>
<p>Reload modules by different selectors</p>
<pre class="prettyprint"><code class="language-php">mw.reload_module('comments'); //reload by module type
mw.reload_module('#my_module_id'); //reload by id
mw.reload_module('.my_module_class'); //reload by class</code></pre>



<h4>See also</h4>
<?php print page_content('js-api/_nav/index'); ?>