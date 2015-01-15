
<h2>login_url</h2>
<p>login_url — returns the url for the regsiter page</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">login_url();
</code></pre>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php runner">
$login_url = login_url();
print $login_url;
</code></pre>
<p>The user can change the default login page from the settings page in the admin panel.</p>
<p>You can also change the login_url value by setting a session variable</p>
<h4>Changing the login link on the fly</h4>
<pre class="prettyprint"><code class="language-php runner">
session_set('login_url', 'users/login');
$login_url = login_url();
print $login_url;
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?> 