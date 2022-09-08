
## User events


mw.user.login

mw.user.save

mw.user.before_login

mw.user.logout



### Admin events



mw.admin.header

mw.admin.footer


if you wish to customize the admin you can create a hook and insert custom css in the admin

for example in your module or template, create a file `functions.php` and add

```
event_bind('mw.admin.footer', function ($item) {

  echo '<style> .. custom css   </style>'

});

```