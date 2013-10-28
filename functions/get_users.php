
<h2>get_users</h2>
<p> Returns array of users</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">get_users($params=false);
</code></pre>
 
<h3>Usage</h3>
<pre class="prettyprint"><code class="language-php">//get array of users
$site_users = get_users();
var_dump($site_users); 

if(is_array($site_users) and !empty($site_users)){
	foreach($site_users as $user){
	print  $category['id'];	
	print  $category['username'];	
	print  $category['email'];	
	
	print  $category['first_name'];	
	print  $category['last_name'];	
 
	print  $category['thumbnail'];	

	print  $category['is_active'];	
	print  $category['is_admin'];	

	}
}
 
</code></pre>
<h3>Parameters</h3>
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>parameter</th>
			<th>description</th>
			<th>value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>id</td>
			<td>get users by id</td>
			<td>get_users("id=3")</td>
		</tr>
		 <tr>
			<td>username</td>
			<td>get by username</td>
			<td>get_users("username=johndoe12")</td>
		</tr>
		
		 <tr>
			<td>is_active</td>
			<td>get only active users</td>
			<td>get_users("is_active=y")</td>
		</tr>
		 <tr>
			<td>is_admin</td>
			<td>get only admin users</td>
			<td>get_users("is_admin=y")</td>
		</tr>
		 <tr>
			<td>count</td>
			<td>get users count</td>
			<td>get_users("count=true")</td>
		</tr>
	</tbody>
</table>
<h4>See also</h4>
<?php print page_content('functions/_nav/users'); ?>