
<h2>video</h2>
<p> Video element </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;video&quot; /&gt; </code></pre>

<?php print page_content('params/modules/video'); ?> 

<h2>Examples</h2>
<h4>Display video from url</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show video ?&gt;
&lt;module type=&quot;video&quot; url=&quot;http://www.youtube.com/watch?v=iWjRsd4kk9w&quot; /&gt;</code>
</pre>

<h4>Set the video size</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show video ?&gt;
&lt;module type=&quot;video&quot; url=&quot;http://www.youtube.com/watch?v=630ajZaox-g&quot; width=&quot;500&quot; height=&quot;350&quot; /&gt;</code>
</pre>