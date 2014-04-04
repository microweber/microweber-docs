<h2>mw.modal</h2>
<p>mw.modal — creates a modal window</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-php">mw.modal(options);
</code></code>


<h3>Parameters</h3>
<pre class="prettyprint"><code class="language-php">mw.modal({
    content:   Required: String or Node Element or jquery Object
    width:     Optional: ex: 400 or "85%", default 600
    height:    Optional: ex: 400 or "85%", default 500
    draggable: Optional: Boolean, default true
    overlay:   Optional: Boolean, default false
    title:     Optional: String for the title of the modal
    template:  Optional: String, default skins are "default", "simple", "basic"  
    id:        Optional: String: set this to protect from multiple instances
});</code></pre>

<h4>Example usage</h4>
<pre class="prettyprint"><code class="language-php">&lt;button onclick=&quot;mw.modal({content:'Test!'});&quot;&gt;Run Example&lt;/button&gt;
</code></pre>
<span class="mw-ui-btn" onclick="mw.modal({content:'Test!'});">Run Example</span>

 
<h4>See also</h4>
<?php print page_content('js-api/_nav/index'); ?>