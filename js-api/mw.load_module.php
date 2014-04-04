<h2>mw.load_module</h2>
<p>mw.load_module — loads a module into given selector</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-php">mw.load_module(name, placeholder, callback, attributes); </code></code>
<h3>Return Values</h3>
<p>This function makes Ajax call and places the module html into the placeholder element</p>
<h3>Example Options</h3>
<pre class="prettyprint"><code class="language-php"> mw.load_module('posts','#my_div');</code></pre>
<p>You can use this function to dynamically load modules by Ajax and create rich user experiences</p>


<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner proc html">&lt;button onclick=&quot;mw.load_module('posts','#placeholder');&quot;&gt;Posts&lt;/button&gt;
&lt;button onclick=&quot;mw.load_module('pages','#placeholder');&quot;&gt;Pages&lt;/button&gt;
&lt;div id=&quot;placeholder&quot;&gt;&lt;/div&gt;
</code></pre>


<h4>Usage with attributes and callback</h4>
<pre class="prettyprint"><code class="language-php runner proc html">&lt;script&gt;
function load_comments(){
	params = {}
	params.content_id = 3;
	mw.load_module('comments','#placeholder',my_callback,params);
}
function my_callback(){
	alert('Module is loaded');
}
&lt;/script&gt;
&lt;button onclick=&quot;load_comments()&quot;&gt;Click me&lt;/button&gt;
&lt;div id=&quot;placeholder&quot;&gt;&lt;/div&gt;
</code></pre>

<h4>Load module from sub folder</h4>
<pre class="prettyprint"><code class="language-php runner proc html">&lt;button onclick=&quot;mw.load_module('users/login','#placeholder');&quot;&gt;Show login&lt;/button&gt;
&lt;div id=&quot;placeholder&quot;&gt;&lt;/div&gt;
</code></pre>


<h4>See also</h4>
<?php print page_content('js-api/_nav/index'); ?>