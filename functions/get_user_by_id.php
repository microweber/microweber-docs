
<h2>get_user_by_id</h2>
<p class="description">get_user_by_id — returns the iser info as array for a given user id</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get_user_by_id($id);
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint">
<code class="language-php">$user = get_user_by_id(1);

if(!empty($user)){
print  $user['id'];	
print  $user['username'];	
print  $user['email'];	
print  $user['first_name'];	
print  $user['last_name'];	
print  $user['thumbnail'];	
print  $user['is_active'];	
print  $user['is_admin'];	
// and more... print_r($user);
}
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?>