
<h2>delete_content</h2>
<p>delete_content — Deletes a content</p>
<h3>Synopsis</h3>
<pre><code>delete_content(array $params)
</code></pre>
<h3>Description</h3>
<p>This function will mark content item as deleted and put in in the trash.</p>
<h3>Usage</h3>
<h4>Mark content as deleted</h4>
<pre class="prettyprint"><code class="language-php">
$to_delete = array('id' => $item['id']);
$delete = delete_content($to_delete);
 </code></pre>
<h4>Undelete content</h4>
<pre class="prettyprint"><code class="language-php">
$to_undelete = array('id' => $item['id'], 'undelete' => true);
$delete = delete_content($to_undelete);
 </code></pre>
<h4>Deletes content item forever</h4>
<pre class="prettyprint"><code class="language-php">
$to_delete = array('id' => $item['id'], 'forever' => true);
$delete = delete_content($to_delete);
 </code></pre>
