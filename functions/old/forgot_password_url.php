
<h2>forgot_password_url</h2>
<p>forgot_password_url — returns the url for the regsiter page</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">forgot_password_url();
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">
$forgot_password_url = forgot_password_url();
print $forgot_password_url;
</code></pre>
<p>The user can change the default forgot password page from the settings page in the admin panel.</p>
<p>You can also change the url of the forgot password page by setting a session variable</p>
<h4>Changing the forgot password on the fly</h4>
<pre class="prettyprint"><code class="language-php runner">
session_set('forgot_password_url', 'users/forgot_password');
$forgot_password_url = forgot_password_url();
print $forgot_password_url;
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?> 