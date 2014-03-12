
<h2>content</h2>
<p> Module to show content, like pages, posts and products </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;content&quot; /&gt; </code></pre>
<h3>Module parameters</h3>
<p>This module works out of the box without any parameters. All the parameters bellow are optional.</p>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th width="113">parameter</th>
      <th width="412">description</th>
      <th width="368">optional values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">content-type</code></td>
      <td>the type of the content</td>
      <td>page,post,product, anything custom</td>
    </tr>
    <tr>
      <td><code class="language-php">subtype</code></td>
      <td>the sub-type of the content</td>
      <td>post,product, anything custom</td>
    </tr>
    <tr>
      <td><code class="language-php">parent</code></td>
      <td>the id of the parent page</td>
      <td>any valid page id</td>
    </tr>
    <tr>
      <td><code class="language-php">category</code></td>
      <td>get posts from a category</td>
      <td>any valid category id</td>
    </tr>
    
    <tr>
      <td><code class="language-php">limit</code></td>
      <td>limit the number of results</td>
      <td>example: limit=&quot;3&quot;</td>
    </tr>
     <tr>
      <td><code class="language-php">current-page</code></td>
      <td>used together with "limit" if you want to get more of the results</td>
      <td>example: limit=&quot;3&quot; current-page=&quot;2&quot;</td>
    </tr>
    <tr>
      <td><code class="language-php">hide-paging</code></td>
      <td>if you set it it will hide the paging buttons</td>
      <td></td>
    </tr>
    <tr>
      <td><code class="language-php">order-by</code></td>
      <td>allows you to sort posts by any <a href="<?php print site_url() ?>params/content">db field</a></td>
      <td>example: order-by=&quot;position desc&quot;</td>
    </tr>
     <tr>
      <td><code class="language-php">show</code></td>
      <td>shows only certain information</td>
      <td> thumbnail, title, description, read_more</td>
    </tr>
     <tr>
      <td><code class="language-php">template</code></td>
      <td>set module template if you wish</td>
      <td>any valid module template</td>
    </tr>
  </tbody>
</table>
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
&lt;module type=&quot;content&quot; content-type=&quot;page&quot; show=&quot;thumbnail,read_more&quot; /&gt;</code></pre>
