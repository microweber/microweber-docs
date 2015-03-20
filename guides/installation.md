
## Installation

### Installation from the browser

First, make sure your server meets [the requirements](start.md). They're few but essential.

**[If you're not into reading check out this installation guide video](http://www.youtube.com/watch?v=0zUNF2n3tSo)**

> **Note:** After install Microweber will create or modify an .htaccess file in its base folder. It will also create several such files for each script directory denying access to the code.

[Download the latest version from here](https://microweber.com/download.php)



#### 1. Unzip and upload the files via FTP provided by your hosting company.
#### 2. Open your website in a browser (i.e. http://example.com/).
You should see the following screen that allows you to initially setup your Microweber installation.

![](https://github-camo.global.ssl.fastly.net/7868bd10fb3fee32d2ca0ab286baf898000e96c5/687474703a2f2f6e65772e6d6963726f77656265722e636f6d2f63646e2f646f63732f4d575f53455455505f312e6a7067)


#### 3. Database Setup
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


### Alternative installation methods

There is alternative installation method that can be used for automated installs.

[Install Microweber via command line](installation_cli.md "")


<a id="multi-site"></a>
### Multi site 

You can use a single Microweber instance to manage multiple domains with separate installs. 

In order to have a second site on the same installation you need to set your DNS A record(s) to point to the same IP as your primary Microweber installation.

To make an install, just create a folder in "config", e.g. "config/second-domain.com", and then make an empty file at `config/second-domain.com/microweber.php`

> **Note:** Please *do not* use www. in the folder name.


After that when you visit second-domain.com, you will see the install screen.







