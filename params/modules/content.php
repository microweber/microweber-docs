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
      <td>set module template if you wish or <a href="<?php print site_url() ?>developer-guide/making-a-module/module-template">create your own</a></td>
      <td>default templates are: <code>default</code>, <code>masonry</code>, <code>search</code></td>
    </tr>
  </tbody>
</table>
