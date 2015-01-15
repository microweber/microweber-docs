## user_name

Returns the full name of the user

### Summary

    user_name($user_id = false, $mode = 'full');

By setting $mode you can get the user full name, first and last name and the username

By default `user_name()` tries to get the user full name. If its not found it returns the username. If the $user_id parameter is false the function will work with the current user info.

### Usage

    //get full name of the current user
    $user_name = user_name();
    // returns John Doe 

    $user_name = user_name($user_id = false, $mode = 'first');
    // returns John

    //get the username of some user by id
    $user_name = user_name(3, $mode = 'username');
    // returns johndoe12

### Parameters


| parameter            | description        |
| -------------  |:-------------|
| user_id             |  the id of user, if its false it will use the current user id	 | 
| mode         |  what part of the user-name to return, possible values are "username", "full", "first", "last"   | 
 

 