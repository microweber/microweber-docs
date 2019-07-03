### Installation via Command Line

If you haveven't downloaded the zip file get it from here [https://microweber.com/download.php](https://microweber.com/download.php "") 

You can also download Microweber via Composer

You can install Microweber directly from the command line interface. This may be useful in shell scripts that automate the site creation process. 


Here's an example of what the command looks like:

```bash
php artisan microweber:install admin@site.com admin pass 127.0.0.1 site_db root secret -p site_
```



This would initialize the Microweber database on localhost in database "site_db" using user "root" with password "secret" for the connections. In case the database user doesn't have a password you can skip setting that argument (and also be ashamed of your attitude to security). All tables will be prefixed by "site_". After the schema initialization an admin user will be created with credentials "admin"/"pass" and email "admin@site.com".
All arguments until the database password are required and need to be present in that exact order.

#### Artisan Command:
```bash
microweber:install [-p|--prefix[="..."]] [-t|--template[="..."]] [-d|--default-content[="..."]] email username password db_host db_name db_user [db_pass]
```

#### Arguments:
|Argument  | Description
|      --- | ---
|email     | Admin account email
|username  | Admin account username
|password  | Admin account password
|db_host   | Database host address
|db_name   | Database schema name
|db_user   | Database username
|db_pass   | Database password (optional)

#### Options:
|               Option  | Description
|                   --- | ---
|--prefix (-p)          | Database tables prefix
|--template (-t)        | Set default template name
|--default-content (-d) | Install default content
|-c                     | make config only, user should complete the install from browser

#### Laravel Options:
|      Option  | Description
|          --- | ---
|--help (-h)   | Display this help message.
|--quiet (-q)  | Do not output any message.
|--env         | The environment the command should run under.



#### Install Examples 

`php artisan microweber:install admin@site.com admin pass 127.0.0.1 site_db root secret mysql -p site_ -t liteness -d 1`


`php artisan microweber:install admin@admin.com admin password db microweber microweber microweber pgsql -p site_ -t liteness -d 1`

`php artisan microweber:install admin@site.com admin password storage/database1.sqlite microweber microweber nopass sqlite -p site_  -t liteness -d 1`


#### Config only, and let user to complete the install from browser

To let the user complete the intall from browser and select a template you must pass the parameter `-c 1` to the install script. 

`php artisan microweber:install admin@site.com admin password storage/database1.sqlite microweber microweber nopass sqlite -p site_ -t dream -d 1 -c 1 --env=my.domain.com`

#### Multi domain scripted installation
To make multi domain install you must create an empty folder within the `config` folder with the name of your domain and put empty file at `config/example.com/microweber.php`

Then on the scriptted install you must pass the domain name as a `--env` parameter. For example: 

`php artisan microweber:install admin@site.com admin password storage/database1.sqlite microweber microweber nopass sqlite -p site_ -t dream -d 1 -c 1 --env=my.domain.com`


#### Update command

`php artisan microwber:update`

