
<h2>menu_tree</h2>
<p> Makes nested tree from site menu</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">menu_tree($params);
</code></pre>
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
      <td><code class="language-php">menu_id</code></td>
      <td>The id of the menu to print.</td>
    </tr>
    <tr>
      <td><code class="language-php">ul_class</code></td>
      <td>The class name of the <code>&lt;ul&gt;</code> elements<code></code></td>
    </tr>
    <tr>
      <td><code class="language-php">li_class</code></td>
      <td>The class name of the <code>&lt;li&gt;</code> elements<code></code></td>
    </tr>
    <tr>
      <td><code class="language-php">ul_class_deep</code></td>
      <td>Class name of the deep elements</td>
    </tr>
    <tr>
      <td><code class="language-php">li_class_deep</code></td>
      <td>Class name of the deep elements</td>
    </tr>
    <tr>
      <td><code class="language-php">li_class_empty</code></td>
      <td>Class name of empty</td>
    </tr>
    <tr>
      <td><code class="language-php">ul_tag</code></td>
      <td>You can change the <code>&lt;ul&gt;</code> tag to custom<code></code></td>
    </tr>
    <tr>
      <td><code class="language-php">li_tag</code></td>
      <td>You can change the <code>&lt;li&gt;</code> tag to custom<code></code></td>
    </tr>
    <tr>
      <td><code class="language-php">depth</code></td>
      <td>The maximum depth of the menu tree</td>
    </tr>
    <tr>
      <td><code class="language-php">link</code></td>
      <td>Customize the <code>&lt;a&gt;</code> element</td>
    </tr>
  </tbody>
</table>
<h3>Usage</h3>
<h4>Print the header menu</h4>
<pre class="prettyprint"><code class="language-php runner">$menu = menu_tree('menu_id=1');
print $menu;
</code></pre>
<h4>Print menu with custom CSS classes</h4>
<pre class="prettyprint"><code class="language-php runner">$params = array();
$params['menu_id'] = 1;
$params['ul_class'] = 'nav-holder';
$params['li_class'] = 'nav-item';
$menu = menu_tree($params);
print $menu;
</code></pre>
<h4>Print menu with custom tags</h4>
<pre class="prettyprint"><code class="language-php runner">$params = array();
$params['menu_id'] = 1;
$params['ul_tag'] = 'div';
$params['li_tag'] = 'span';
$menu = menu_tree($params);
print $menu;
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/menus'); ?>