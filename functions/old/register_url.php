
<h2>register_url</h2>
<p>register_url — returns the url for the regsiter page</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">register_url();
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">
$register_url = register_url();
print $register_url;
</code></pre>

<p>The user can change the default register page from the settings page in the admin panel.</p>




<p>You can also change the register page value by setting a session variable</p>
<h4>Changing the register url on the fly</h4>
<pre class="prettyprint"><code class="language-php runner">
session_set('register_url', 'users/register');
$register_url = register_url();
print $register_url;
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?>



 