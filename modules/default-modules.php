<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h3>Default modules</h3>
<p>Theese modules are bundled with Microweber by default  </p>

 <h4>Posts module</h4>
 <p>Used to dipsplay posts in the site</p>
 
<pre class="prettyprint"><code class="language-php runner proc html">&lt;?php //print &quot;display list of posts&quot;; ?&gt;
&lt;module type=&quot;posts&quot; limit=&quot;3&quot; /&gt;</code></pre>
<p>&nbsp;</p>
 

 <h4>Pictures module</h4>
 <p>Used to dipsplay a picture gallery</p>
 
<pre class="prettyprint"><code class="language-php runner proc html">&lt;?php //print &quot;display a gallery for the page with id 1&quot;; ?&gt;
&lt;module type=&quot;pictures&quot; content-id=&quot;1&quot; /&gt;</code></pre>

 <h4>Products module</h4>
 <p>Used to dipsplay products in the site</p>
 
<pre class="prettyprint"><code class="language-php runner proc html">&lt;?php //print &quot;display list of products&quot;; ?&gt;
&lt;module type=&quot;shop/products&quot; limit=&quot;3&quot; /&gt;</code></pre>
<p>&nbsp;</p>
 

 <h4>Menu module</h4>
 <p>Shows a navigation menu</p>
 
<pre class="prettyprint"><code class="language-php runner proc html">&lt;?php //print &quot;shows the header menu&quot;; ?&gt;
&lt;module type=&quot;menu&quot; menu-name=&quot;header_menu&quot; /&gt;</code></pre>
 

 
 
 
 