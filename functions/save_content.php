
<h2>save_content</h2>
<p>save_content — Saves content in the database</p>
<h3>Summary</h3>
<pre><code>save_content(array $data_to_save)
</code></pre>
<h3>Description</h3>
<p>This function inserts and updates posts and pages in the database. It takes an string or array as argument and returns the content id of the saved item. It does not provide any user validation and permissions validation.</p>

<h3>Return Values</h3> 
 <p>
<code>Integer</code> with the saved content id or <code>false</code> if the content is not saved</p>




<h3>Usage</h3>
<h4>Save new content item</h4>
<pre class="prettyprint"><code class="language-php runner">
$data_to_save = array(); 
$data_to_save['id'] = 0; 
$data_to_save['title'] = 'My title'; 
$data_to_save['content'] = 'My content body'; 
$data_to_save['content_type'] = 'page';   
$new_id = save_content($data_to_save);

print($new_id); // prints the id of the new content 
 </code></pre>
<h4>Update content</h4>
<pre class="prettyprint"><code class="language-php runner">
$data_to_save = array(); 
$data_to_save['id'] = 8; //if you set id the content will be updated 
$data_to_save['title'] = 'My new title';  
$new_id = save_content($data_to_save); 
print ($new_id); // prints the id of the saved content (ex.8) </code></pre>
<h4>Params and Database fields</h4>
<p>You use those fields to store and structure your content</p>
<?php print page_content('params/content'); ?>

<h4>See also</h4>
<?php print page_content('functions/_nav/content'); ?>