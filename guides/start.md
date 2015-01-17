# Getting Started

## Requirements

### Server Requirements
* PHP >= 5.4
* PHP Extensions:
  * mcrypt
  * gd2
  * lib-xml with DOM support
* mod_rewrite if using Apache

> **Note:** As of PHP 5.5, some OS distributions may require you to manually install the PHP JSON extension. When using Ubuntu, this can be done via `apt-get install php5-json`.

### Recommended Software
* [HHVM](http://hhvm.com/)
* Apache >= 2.4
* MySQL >= 5.0
* [Composer](http://getcomposer.com/)

### Supported browsers
* Google Chrome
* Mozilla Firefox
* Webkit-based browsers
* Internet Explorer 9+

## Installation

### Web Installer

First, make sure your server meets [the requirements](https://github.com/peter-mw/test/wiki/Requirements). They're few but essential.

#### Microweber Hosting
The easiest option, suitable for most users. TODO: more details

#### Shared Hosting
**[If you're not into reading check out this installation guide video](http://www.youtube.com/watch?v=0zUNF2n3tSo)**

> **Note:** After install Microweber will create or modify an .htaccess file in its base folder. It will also create several such files for each script directory denying access to the code.

##### 1. Unzip and upload the files via FTP provided by your hosting company.
##### 2. Open your website in a browser (i.e. http://example.com/).
You should see the following screen that allows you to initially setup your Microweber installation.

![](https://github-camo.global.ssl.fastly.net/7868bd10fb3fee32d2ca0ab286baf898000e96c5/687474703a2f2f6e65772e6d6963726f77656265722e636f6d2f63646e2f646f63732f4d575f53455455505f312e6a7067)


##### 3. Database Setup
During installation you have to configure the database connection and create an admin account. This will be the only way to manage your website. The fields you will need to fill are:

|               Field | Description
|                 --- | ---
|   Database Hostname | The address of your database server. In the vast majority of cases this will be `localhost` or `127.0.0.1`, but if your hosting provider gave you a different address you must specify it.
|   Database Username | The username provided by your hosting company for database connection. Some hosting providers allow you to create your own. We don't recommend using the `root` user in production websites.
|   Database Password | The database user password
|       Database Name | The name of your database. It has to already exist on the server or the specified database user has to have privileges to create one.
|        Table Prefix | In case the database provided is not exclusively dedicated to one Microweber installation you should set a prefix to distinguish your website's data from other data.
|      Admin Username | Your username of choice for managing your website. We recommend you use your real name or something harder to guess than the default "admin".
|        Admin E-mail | Please use a valid e-mail. You may need it for password recovery or website notifications.
|      Admin Password | Please set a password as long and hard to guess as you can come up with. Also make it easy to remember.

Click the `Install` button and give it about a minute to set up your website.
Once the installation's completed the page will offer you to view your newly created website or go straight to the admin panel.

### Via Command Line

You can install Microweber directly from the command line interface. This may be useful in shell scripts that automate the site creation process. Here's an example of what the command looks like:

`php artisan microweber:install admin@site.com admin pass 127.0.0.1 site_db root secret -p site_`

This would initialize the Microweber database on localhost in database "site_db" using user "root" with password "secret" for the connections. In case the database user doesn't have a password you can skip setting that argument (and also be ashamed of your attitude to security). All tables will be prefixed by "site_". After the schema initialization an admin user will be created with credentials "admin"/"pass" and email "admin@site.com".
All arguments until the database password are required and need to be present in that exact order.

#### Usage:
`microweber:install [-p|--prefix[="..."]] [-t|--template[="..."]] [-d|--default-content[="..."]] email username password db_host db_name db_user [db_pass]`

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

#### Laravel Options:
|      Option  | Description
|          --- | ---
|--help (-h)   | Display this help message.
|--quiet (-q)  | Do not output any message.
|--env         | The environment the command should run under.