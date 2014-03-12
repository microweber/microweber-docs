
<h2>comments</h2>
<p> Comments element with form to post a comment</p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;comments&quot; /&gt; </code></pre>

<?php print page_content('params/modules/comments'); ?> 

<h2>Examples</h2>
<h4>Display comments for blog post</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show comments for content ?&gt;
&lt;module type=&quot;comments&quot; content-id=&quot;4&quot; /&gt;</code>
</pre>

<h4>Hide the comments post form</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show comments for content ?&gt;
&lt;module type=&quot;comments&quot; content-id=&quot;11&quot; no-form=&quot;true&quot; /&gt;</code></pre>
 