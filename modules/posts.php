
<h2>posts</h2>
<p> Module to show posts from the site </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;posts&quot; /&gt; </code></pre>
<?php print page_content('params/modules/content'); ?> 
<h2>Examples</h2>
<h4>Get a list of posts</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows posts from the whole site ?&gt;
&lt;module type=&quot;posts&quot; /&gt;</code></pre>
<h4>Show only posts from parent page</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows blog ?&gt;
&lt;module type=&quot;posts&quot; parent=&quot;2&quot; /&gt;</code></pre>
<h4>Get list of posts and apply module template</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows posts ?&gt;
&lt;module type=&quot;posts&quot; template=&quot;sidebar&quot; /&gt;</code></pre>
<h4>Limit the number of results and sort by date</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows all content by last edited ?&gt;
&lt;module type=&quot;posts&quot; limit=&quot;2&quot; hide-paging=&quot;true&quot; order-by=&quot;updated_on desc&quot; /&gt;</code></pre>
<h4>Get posts from category</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows all posts from a category ?&gt;
&lt;module type=&quot;posts&quot; category=&quot;22&quot; /&gt;</code></pre>
<h4>Get posts and limit the results</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php print &quot;Results page 1&quot;; ?&gt;
&lt;module type=&quot;posts&quot; limit=&quot;2&quot; current-page=&quot;1&quot; /&gt;

&lt;?php print &quot;Results page 2&quot;; ?&gt;
&lt;module type=&quot;posts&quot; limit=&quot;2&quot; current-page=&quot;2&quot; /&gt;
</code></pre>
<h4>Show only certain fields</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows only some fields ?&gt;
&lt;module type=&quot;posts&quot; show=&quot;title,thumbnail&quot; /&gt;</code></pre>
