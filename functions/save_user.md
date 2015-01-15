## save_user

save_user — saves user in the DB

### Summary

    save_user($params);

### Usage

    $data = array();
    $data['username'] = 'some-user-67';
    $data['email'] = 'example@example.com';
    $data['password'] = 'my-password-123';
    $data['is_active'] = 'y';
    $new_user = save_user($data);

### Parameters

| key            | value        |
| -------------  |:-------------|
| id             |  the id of the user	 | 
| username         |  the username for login	   | 
| email   |   the email for login	 | 
| password            |  the password for login	  |
| is_active          |  flag if users can login, "y" or "n"      |

 