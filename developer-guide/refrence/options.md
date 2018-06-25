# Options reference

 

| key                        | group                         | description                        |
| ------------------------   | ------------------------    |:-----------------------------------|
| items_per_page             |  website   | get paging setting value |
 


 
```php

$option_value = get_option('items_per_page', 'website');

``` 



Other
```php

$curent_val = get_option('enable_user_registration','users');

 $enable_user_fb_registration = get_option('enable_user_fb_registration','users');
 $enable_user_google_registration = get_option('enable_user_google_registration','users');
 $enable_user_github_registration = get_option('enable_user_github_registration','users');
 $enable_user_twitter_registration = get_option('enable_user_twitter_registration','users');
 $enable_user_microweber_registration = get_option('enable_user_microweber_registration','users');
 

$enable_user_windows_live_registration = get_option('enable_user_windows_live_registration','users');

$enable_user_linkedin_registration = get_option('enable_user_linkedin_registration','users');

$captcha_disabled = get_option('captcha_disabled','users');


$login_captcha_enabled = get_option('login_captcha_enabled','users') == 'y';


```