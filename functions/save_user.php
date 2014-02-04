
<h2>save_user</h2>
<p class="description">save_user — saves user in the DB</p>
<h3>Summary</h3>
<pre class="prettyprint"><code class="language-php">save_user($params);
</code></pre>
<h3>Example</h3>
<pre class="prettyprint"><code class="language-php">
$data = array();
$data['username'] = 'some-user-67';
$data['email'] = 'example@example.com';
$data['password'] = 'my-password-123';
$data['is_active'] = 'y';
$new_user = save_user($data);
</code></pre>
<h3>Parameters</h3>
 <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>parameter</th>
      <th>description</th>
      <th>usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>the id of the user</td>
      <td>If you want to update user, set this to existing user id</td>
    </tr>
    <tr>
      <td>username</td>
      <td>the username for login</td>
      <td></td>
    </tr>
    <tr>
      <td>email</td>
      <td>the email for login</td>
      <td></td>
    </tr>
    <tr>
      <td>password</td>
      <td>the password for login</td>
      <td></td>
    </tr>
   <tr>
      <td>is_active</td>
      <td>flag if users can login</td>
      <td>&quot;y&quot; or &quot;n&quot;</td>
    </tr>
   
  </tbody>
</table>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?>