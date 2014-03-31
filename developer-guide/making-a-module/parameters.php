<?php if(!defined('ONE')){
	header("Location: index");

} ?>
<h2>Module parameters</h2>
<p>In Microweber all modules can accept parameters. Those parameters are passed as attributes on the &lt;module /&gt; tag that loads a module.</p>
<h3>Accessing the parameters from the module</h3>
<p>You can access all passed parameters inside a module with the <code>$params</code> array</p>
<p>Here is example of it:</p>
If you load the following module
<pre class="prettyprint"><code class="language-php">&lt;module type=&quot;my_module&quot; my-param=&quot;foo&quot; other-parameter=&quot;bar&quot;  /&gt;</code></pre>
You can access the parameters inside the module by the <code>$params</code> array. Open index.php in your module folder and add this code
<pre class="prettyprint"><code class="language-php">&lt;?php 
$foo = $params['my-param'];
$bar = $params['other-parameter'];

print(&quot;My parameter is: &quot;. $foo);
print(&quot;My other parmeter is: &quot;. $bar);
?&gt;</code>
</pre>
<h3>Module configuration</h3>
<p>All modules have a <code>$config</code> array inside them which contains the module path, name and other info.</p>
<p>Here is example of it:</p>
If you load the following module
<pre class="prettyprint"><code class="language-php">&lt;module type=&quot;my_module&quot; /&gt;</code></pre>
You can access the configuration inside the module with the <code>$config</code> array
<pre class="prettyprint"><code class="language-php">&lt;?php 
//the full path to the module ex. /var/www/userfiles/modules/my_module/
print $config['path']; 

//url to the module ex. http://localhost/userfiles/modules/my_module
print $config['url_to_module']; 
?&gt;</code></pre>
<?php print page_content('developer-guide/making-a-module/_nav'); ?> 