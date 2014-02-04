
<h2>session_get</h2>
<p>session_get — get a session variable</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">session_get($key);
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">// get a session variable 
 
$session_var = session_get('my_var');
var_dump($session_var);

// prints your varuable or false
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/session'); ?>