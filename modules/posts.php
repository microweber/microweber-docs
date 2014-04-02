
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
<h3>How to style the posts module</h3>
<p>To create a skin for this module there are 2 options</p>
<h4>Create skin for the &quot;posts&quot; module in the site template dir</h4>
<p>Use this option if your skins are dependant on the site template. </p>
<p>Create a folder in <code>userfiles/templates/my_site_template/modules/posts/templates/</code></p>
<p>All skins that you put in this folder will work only in your site template</p>
<h4>Create skin for the &quot;posts&quot; module in the modules dir</h4>
<p>Use this option if your skin use its own CSS and its not dependant on the site template. </p>
<p>Create your skin in this folder <code>userfiles/modules/posts/templates/</code></p>
<p>All skins that you put in this folder will work only in all site templates</p>
<h4>Sample skin</h4>

<code>my_skin.php</code>
<pre class="prettyprint"><code class="language-php">&lt;?php

/*

type: layout

name: My posts template

description: My sample posts template

*/
?&gt;

&lt;?php if (!empty($data)): ?&gt;
        &lt;?php foreach ($data as $item): ?&gt;
        	&lt;a href=&quot;&lt;?php print $item['link'] ?&gt;&quot;&gt;&lt;?php print $item['title'] ?&gt;&lt;/a&gt;
        	&lt;?php print $item['description'] ?&gt;
		&lt;?php endforeach; ?&gt;
&lt;?php endif; ?&gt;
&lt;?php if (isset($pages_count) and $pages_count &gt; 1 and isset($paging_param)): ?&gt;
    &lt;?php print paging(&quot;num={$pages_count}&amp;paging_param={$paging_param}&amp;current_page={$current_page}&quot;) ?&gt;
&lt;?php endif; ?&gt;</code></pre>
