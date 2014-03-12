
<h2>menu</h2>
<p> Renders menu tree </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;menu&quot; /&gt; </code></pre>
<?php print page_content('params/modules/menu'); ?> 
<h2>Examples</h2>
<h4>Prints menu tree</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show main menu ?&gt;
&lt;module type=&quot;menu&quot; /&gt;</code>
</pre>
<p>&nbsp;</p>
<h4>Prints menu with template</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show footer menu ?&gt;
&lt;module type=&quot;menu&quot; menu-name=&quot;footer_menu&quot; template=&quot;small&quot; /&gt;</code>
</pre>
<p></p>
<p>&nbsp;</p>
