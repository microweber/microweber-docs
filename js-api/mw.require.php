<h2>mw.require</h2>
<p>mw.require — loads Javascript or CSS file</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-php">mw.require(url, in_head);
</code></code>
<p>This function is useful if you want to dynamicaly load external files in your modules.</p>

<h3>Parameters</h3>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th width="113">parameter</th>
      <th width="412">description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>url</code></td>
      <td>url of the script to load</td>
    </tr>
     <tr>
      <td><code>in_head</code></td>
      <td>if set to true it will load the files only once and will not replace them on <a href="<?php print site_url(); ?>js-api/mw.reload_module">mw.reload_module</a></td>
    </tr>
    
    
  </tbody>
</table>

 

<h4>Example usage</h4>
<pre class="prettyprint"><code class="language-php">&lt;script&gt;
mw.require(&quot;url_to.js&quot;);
mw.require(&quot;url_to.css&quot;);
&lt;/script&gt;
</code></pre>
 
<h4>Usage inside your module</h4>
<pre class="prettyprint"><code class="language-php">&lt;script&gt;
mw.require(&quot;&lt;?php print $config['url_to_module']; ?&gt;css/style.css&quot;, true);
&lt;/script&gt;
</code></pre> 
<h4>See also</h4>
<?php print page_content('js-api/_nav/index'); ?>



 
  
 