## get_user_by_id

get_user_by_id — returns the user info as array for a given user id

### Summary

    get_user_by_id($id);

### Usage
```php
$id = 1;
$user = get_user_by_id($id);

print  $user['id'];	
print  $user['username'];	
print  $user['email'];	
print  $user['first_name'];	
print  $user['last_name'];	
print  $user['thumbnail'];	
print  $user['is_active'];	
print  $user['is_admin'];	
// and more... print_r($user);

```

 