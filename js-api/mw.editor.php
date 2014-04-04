<h2>mw.editor</h2>
<p>mw.editor — loads WYSWYG editor at a selector</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-html">mw.editor(selector);
</code></code>

 
<h4>Usage</h4>
 <pre class="prettyprint"><code class="language-html">&lt;button onclick=&quot;mw.editor('#some_element')&quot;&gt;Edit element&lt;/button&gt;
&lt;div id=&quot;some_element&quot;&gt;Some element&lt;/div&gt;</code></pre>



<h4>Getting the value of the editor</h4>
<pre class="prettyprint"><code class="language-html">&lt;script&gt;
my_editor = mw.editor('#some_element');
editor_value = my_editor.value
alert(editor_value);
&lt;/script&gt;
</code></pre>
  
<?php print page_content('js-api/_nav/index'); ?>