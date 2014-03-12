
<h2>content</h2>
<p> Module to show content, like pages, posts and products </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;content&quot; /&gt; </code></pre>
<?php print page_content('params/modules/content'); ?>
<h2>Examples</h2>
<h4>Get a list of pages</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows pages ?&gt;
&lt;module type=&quot;content&quot; content-type=&quot;page&quot; /&gt;</code></pre>
<h4>Show only the main pages</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows main pages ?&gt;
&lt;module type=&quot;content&quot; content-type=&quot;page&quot; parent=&quot;0&quot; /&gt;</code></pre>
<h4>Get list of posts and apply module template</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows posts ?&gt;
&lt;module type=&quot;content&quot; content-type=&quot;post&quot; template=&quot;sidebar&quot; /&gt;</code></pre>
<h4>Limit the number of results and sort by date</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows all content by last edited ?&gt;
&lt;module type=&quot;content&quot; limit=&quot;5&quot; hide-paging=&quot;true&quot; order-by=&quot;updated_on desc&quot; /&gt;</code></pre>
<h4>Get posts from category</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows all posts from a category ?&gt;
&lt;module type=&quot;content&quot; content-type=&quot;post&quot; category=&quot;22&quot; /&gt;</code></pre>
<h4>Get content and limit the results</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php print &quot;Results page 1&quot;; ?&gt;
&lt;module type=&quot;content&quot; limit=&quot;2&quot; current-page=&quot;1&quot; /&gt;

&lt;?php print &quot;Results page 2&quot;; ?&gt;
&lt;module type=&quot;content&quot; limit=&quot;2&quot; current-page=&quot;2&quot; /&gt;
</code></pre>
<h4>Show only certain fields</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //shows only some fields ?&gt;
&lt;module type=&quot;content&quot; content-type=&quot;page&quot; parent=&quot;0&quot; show=&quot;title,thumbnail,read_more&quot; /&gt;</code></pre>
