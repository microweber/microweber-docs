
<h2>URI Class</h2>
<p> Provides functions to work with URI strings. </p>
<h3  >Summary</h3>
<pre class="prettyprint"><code class="language-php">mw('url') 
</code></pre>
<p>The URL class have varous methods which allows you to manupulate and retreive parameters </p>
<h3 class="border-bot">mw('url')->site()</h3>
<p>Returns the full site URL as string, for example <code>http://example.com/</code> </p>
<pre class="prettyprint"><code class="language-php">$site_url = mw('url')->site();
print $site_url;
</code></pre>
<h3 class="border-bot">mw('url')->segments()</h3>
<p>Returns array from all URL segments<br />
  If you are on URL <code>http://example.com/my-shop</code> </p>
<pre class="prettyprint"><code class="language-php">$url_segments = mw('url')->segments();
print $url_segments[0]; 
// It will print "my-shop"
</code></pre>
<h3 class="border-bot">mw('url')->segment($num)</h3>
<p>Returns single URL segment defined by the $num or <code>false</code> if not found<br />
  If you are on URL <code>http://example.com/my-page/some-subpage</code> </p>
<pre class="prettyprint"><code class="language-php">$first_segment = mw('url')->segment(0);
$second_segment = mw('url')->segment(1);

print $first_segment; 
// It will print "my-page"

print $second_segment; 
// It will print "some-subpage"
</code></pre>



<h3 class="border-bot">mw('url')->current()</h3>
<p>Returns the current url as a string</p>
<pre class="prettyprint"><code class="language-php">$url = mw('url')->current();

print $url; 
// It will print "http://example.com/my-current-url" </code></pre>


 

 <h3 class="border-bot">mw('url')->slug($title)</h3>
<p>Returns  url slug as a string</p>
<pre class="prettyprint"><code class="language-php"> $title = "My long title";
$slug = mw('url')->slug($title);

print $slug; 
// It will print "my-long-title" </code></pre>
 