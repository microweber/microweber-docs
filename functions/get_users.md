## get_users

Returns array of users

### Summary

    get_users($params=false);

### Usage

    //get array of users
    $site_users = get_users();
    var_dump($site_users); 

    if(is_array($site_users) and !empty($site_users)){
    	foreach($site_users as $user){
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
    }

### Parameters

<table class="table table-striped table-hover"><thead><tr><th>parameter</th><th>description</th><th>value</th></tr></thead><tbody><tr><td>id</td><td>get users by id</td><td>get_users("id=3")</td></tr><tr><td>username</td><td>get by username</td><td>get_users("username=johndoe12")</td></tr><tr><td>is_active</td><td>get only active users</td><td>get_users("is_active=1")</td></tr><tr><td>is_admin</td><td>get only admin users</td><td>get_users("is_admin=1")</td></tr><tr><td>count</td><td>get users count</td><td>get_users("count=true")</td></tr></tbody></table>

 