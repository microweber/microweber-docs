
<h2>user_name</h2>
<p> Returns the full name of the user </p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">user_name($user_id = false, $mode = 'full');
</code></pre>
<p>By setting $mode you can get the user full name, first and last name and the username</p>
<p> By default <code>user_name()</code> tries to get the user full name. If its not found it returns the username. If the $user_id parameter is false the function will work with the current user info.</p>
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">//get full name of the current user
$user_name = user_name();
// returns John Doe 

$user_name = user_name($user_id = false, $mode = 'first');
// returns John

//get the username of some user by id
$user_name = user_name(3, $mode = 'username');
// returns johndoe12
 
</code></pre>
<h3>Parameters</h3>
<?php print page_content('functions/get_content', '.params-table'); ?>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?>