# Quickstart

<p class="uk-article-lead">This document will guide you through Pagekit's installation process.</p>

<a class="uk-button uk-button-large uk-button-primary" href="http://pagekit.com">Download Pagekit</a>

## Requirements

Make sure your server meets the following requirements.

- Apache 2.2+ or nginx
- MySQL Server 5.1+ or SQLite 3
- PHP Version 5.4+

In addition, Pagekit needs certain PHP extensions to be enabled. Check out the detailed list in the [server requirements section](troubleshooting.md).

## Installation

Extract the downloaded archive and copy the contents to your webserver, either to web root directory or to a subfolder, for example called `/pagekit`.

Open your browser. If you have moved your files to the web root, navigate to your domain directly: `http://example.com`. If your files are located in a subfolder, navigate to that location, e.g. `http://example.com/pagekit`. 

You should see the first screen of the web installer.

#### Step 1 - Database information

In the first step of the installation process we give Pagekit some information to connect to the database we created earlier.

| Field | Description |
|-------|-------------|
| `Host`     | Enter the host name of your database server. If the webserver and database server are on the same machine, this will be *localhost* or *127.0.0.1*  |
| `User`     | Enter a MySQL username that has access to the database. |
| `Password` | Enter the MySQL user's password.                        |
| `Database` | Enter the database name.                                |
| `Table Prefix` | You can change the prefix that is used for the database tables. The default prefix is `pk_`.  |

**Note** Pagekit will try to create the database during installation. You can also do this yourself using a tool like [phpMyAdmin](http://http://www.phpmyadmin.net/). Feel free to use an existing database. Pagekit prefixes its tables to avoid conflicts.

#### Step 2 - Create a User

Now you need to create your user account for Pagekit. This user will have admin access and will be able to log in to Pagekit's control panel, once the installation is finished.

#### Step 3 - Site Settings

Finally we enter the name of your site and a description. Once the installation was successful you can log in to Pagekit's control panel with the account we created. You can access the login screen by appending `/admin` to your URL.

## Updating

Before you perform an update, make sure you have a backup of the current Pagekit installation and your database. That way you can always recover previous states of your installation in case something goes wrong.

### 1-Click Update

You can update Pagekit using the update function in Pagekit's Administration. Open *Settings > Update* and click the *Update* button.

### Manual Update

To update Pagekit manually, download the latest release from http://pagekit.com and extract the archive.
Now upload the folder to your webserver and overwrite the existing files in the Pagekit folder.

To make sure that the update was successful, just open *Settings > Info*. If everything went smoothly, you should see the new version number under *Pagekit Version*.



# Extensions

<p class="uk-article-lead">Create an extension to add features of your own to Pagekit.</p>

Some of Pagekit's default functionality has been implemented using extensions (Pages, the Installer and even the Admin interface). Also, search for the *Hello Extension* in the marketplace as it is a collection of examples and best-practices for extension development. Just browse the `/extensions` directory for a bit.

## Basic structure

There are several kinds of extensions, yet they all follow the same basic pattern. This chapter will give you a brief overview on the general approach. Just like with themes, the command line tool supports you in generating the skeleton file structure for your new extension:

```bash
pagekit extension:generate <extension_name>
```

To get started, let's build a simple extension called *Hello*.

**Note** You can download the complete *Hello extension* from the marketplace.

```bash
cd path/to/pagekit
pagekit extension:generate hello
```

You will be asked for the following information:

| Information     | Description |
|-----------------|-------------|
| *Title*         | Extension title that is shown in the backend, e.g. 'Hello Extension'. |
| *Author*        | Enter your name. |
| *Email*         | Enter your email address. |
| *PHP Namespace* | PHP namespace of the extension, e.g. `Pagekit\Hello`. |

This produces the following file structure inside the directory `/extensions/hello`. You can also just create the files manually, in case you do not want to use the command line tool.

| Folder / File | Description |
|---------------|-------------|
| `/src` | Place all your code in this folder. |
| `/src/Controller` | Place your controllers here. |
| `/src/Controller/DefaultController.php`| This is the default controller class. |
| `/src/HelloExtension.php` | The main class of the extension, that will boot the extension. |
| `extension.json` | Holds metadata for the system and the marketplace. |
| `extension.php` | Holds the extension bootstrap and configuration code. |

**Important** Can't see your changes in the frontend? Don't forget to enable your extension in the admin area.

## Metadata

`extension.json` is a JSON representation of your extension's metadata (license, author etc). This is mainly needed when distributing the extension via the [marketplace](marketplace.md), but is also important for how the extension is listed in the backend.

```json
{
    "name": "hello",
    "version": "0.8.0",
    "type": "extension",
    "title": "Hello",
    "description": "A blueprint to develop your own extensions.",
    "license": "MIT",
    "authors": [
        {
            "name": "Pagekit",
            "email": "info@pagekit.com",
            "homepage": "http://pagekit.com"
        }
    ],
    "extra": {
        "image": "extension.svg"
    }
}
```

## Composer

If you want to require dependencies with composer, just add your composer settings to `extension.json` under the namespace `composer` like this:
```json
{
    "name": "hello",
    "version": "0.8.4",
    "type": "extension",
    "title": "Hello",
    "description": "A blueprint to develop your own extensions.",
    "license": "MIT",
    "authors": [
        {
            "name": "Pagekit",
            "email": "info@pagekit.com",
            "homepage": "http://pagekit.com"
        }
    ],
    "composer": {
        "require": {
           "foo/bar": "1.0.*"
        },
        "minimum-stability": "dev"
    }
}
```
Now you can run the command `pagekit extension:composer <<YOUR EXTENSION NAME>>`.
The command creates a `/vendor` directory inside your extension folder and handles the autoloading.
It doesn't include dependencies which are already loaded by pagekit. 

## Configuration

`extension.php` contains PHP code for extension configuration. The default file that is created takes care of autoloading your controllers and other classes in your namespace. It also determines your main Extension instance (with `HelloExtension` being a subclass of `Pagekit\Framework\Extension`).

Learn more about configuration options in the [Configuration chapter](configuration.md).

```php
<?php

return [

    'main' => 'Pagekit\\Hello\\HelloExtension',

	'autoload' => [
        'Pagekit\\Hello\\' => 'src'
    ],

    'controllers' => 'src/Controller/*Controller.php'

];
```



# Configuration File

<p class="uk-article-lead">Change settings in Pagekit's configuration file.</p>

Pagekit's configuration is stored in `config.php` in the Pagekit root folder. Here you will find the database credentials, debug, profiler and cache settings. You can configure the settings in Pagekit *Settings > System* or edit them in this config file.

## Database

The database connection settings are stored in `database['connections']`. Here you can find the connection data  you have provided during the installation process:

```php
'database' => [
    'default' => 'mysql',
    'connections' => [
      'mysql' => [
        'host' => 'localhost',
        'user' => 'user',
        'password' => 'pass',
        'dbname' => 'pagekit',
        'prefix' => 'pk_',
      ],
    ],
  ],
```

**Note** It is also possible to configure more than one database connection.
The default connection is defined in `database['default']`. In the example above Pagekit uses `mysql`.

## App

In the `app` section you can enable the debug output or disable the cache. This is useful when you are developing a theme or extension for Pagekit.

| Field | Description |
|-------|-------------|
| `key` | A unique key that is used for encryption. |
| `debug` | Enable debug mode if you are a developer to get debug output. |
| `nocache` | Disabling the cache can be useful in a development environment. Remember to enable it on the production server. |

```php
'app' => [
    'key' => '66235f24939aa374932d09bd2805fdb93d064d6d',
    'debug' => '0',
    'nocache' => '0',
  ],
```

## Cache

In `cache` section the configured caching method is stored. Initially the cache is set to `auto`.

| Setting | Description |
|---------|-------------|
| `auto` | Pagekit will automatically select the best caching method that is available. |
| `apc` | Set the caching method to use [APC](http://www.php.net/manual/de/book.apc.php) |
| `file` | Set the caching method to store caching data in a file in '/app/cache' |


```php
'cache' => [
    'caches' => [
        'main' => [
            'storage' => 'auto'
        ]
    ]
],
```

## Profiler

Enabling the profiler will give you valuable information as a developer. It collects data about the requests that are made, monitors the memory usage, counts database queries and so on. This is useful when debugging and profiling your code.
When enabled, the profiler toolbar is located at the bottom of the page.

| Field | Description |
|-------|-------------|
| `enabled` | Enable or disable the profiler. |

```php
'profiler' => [
    'enabled' => '0',
  ],
```



# Widgets

<p class="uk-article-lead">Use Widgets to render small chunks of content at different positions of your site.</p>

To determine where a Widget's content will be rendered, the admin area has a *Widgets* section to publish widgets in specific positions that are defined by the theme. Extensions and themes can both come with widgets, with no difference in development.

## Basic structure

The central location of the widget's behaviour is defined in a class that must extend the `Pagekit\Widget\Model\Type`.

**Note** Wrapping a string in a call of the double underscore function `__(...)` makes it translatable. More on that in the [translation chapter](translation.md).

`hello/src/HelloWidget.php`:

```php
<?php

namespace Pagekit\Hello;

use Pagekit\Widget\Model\Type;
use Pagekit\Widget\Model\WidgetInterface;

class HelloWidget extends Type
{
    /* unique identifier */
    public function getId()
    {
        return 'widget.hello';
    }

    /* name displayed in admin area */
    public function getName()
    {
        return __('Hello Widget!');
    }

     /* description displayed in admin area */
    public function getDescription(WidgetInterface $widget = null)
    {
        return __('Hello Demo Widget');
    }

    /* returns information representing the current configuration
    of the widget. A weather widget would return the configured
    location for example. Displayed in the widget listing in
    Settings > Dashboard.
    */
    public function getInfo(WidgetInterface $widget)
    {
        return __('Hello Demo Widget');
    }

    /* Rendering the widget. Will usually render a view */
    public function render(WidgetInterface $widget, $options = [])
    {
        return $this['view']->render('extension://hello/views/widget.razr');
    }

    /* Define a form for the Advanced section in the widget admin settings */
    public function renderForm(WidgetInterface $widget)
    {
        return __('Hello Widget Form.');
    }
}
```

**Important** In order for this example to work make sure to create a view file
`hello/views/widget.razr` that could contain the following.

```HTML
Hello Widget!
```

## Read and write widget configuration

As you can see, the methods `getInfo`, `render` and `renderForm` have a `$widget`
parameter of the type `WidgetInterface`. That object holds a representation
of the widget's configuration (actually the data stored in the `system_widget`
table in the database). Use this object to read and write widget configuration.

Read properties with:

| Configuration | Description |
|---------------|-------------|
| `getId()`       | Get the widget's unique ID. |
| `getTitle()`    | Get the widget's title. |
| `getType()`     | Get the widget's type, `widget.hello` in our case. |
| `getPosition()` | Get the position the widget is assigned to. |
| `getStatus()`   | Get the widget's status (`WidgetInterface::STATUS_ENABLED` or `WidgetInterface::STATUS_DISABLED`). |
| `getSettings()` | Get the complete settings array. |

Read and write single settings properties with:

| Configuration | Description |
|---------------|-------------|
| `get($name, $default = null)`  | Get a specific widget setting.   |
| `set($name, $value)`           | Write a specific widget setting. |
| `remove($name)`                | Remove a specific widget setting.|

## Register the widget

Now that the basic widget behaviour has been defined, we need to register a widget instance. This is done in the `src/HelloExtension.php` or
`src/HelloTheme.php`.

```php
<?php

namespace Pagekit\Hello;

use Pagekit\Extension\Extension;
use Pagekit\Framework\Application;
use Pagekit\Widget\Event\RegisterWidgetEvent;

class HelloExtension extends Extension
{

    public function boot(Application $app)
    {
        parent::boot($app);

        $app->on('system.widget', function(RegisterWidgetEvent $event) {
            $event->register('Pagekit\Hello\HelloWidget');
        });

    }
}
```

When our extension boots we make sure to call the `boot` method of our parent. Then we are free to hook into the Application's `system.widget` event with a callback.
With that callback, we can now access the `widgets` service of our Application
instance to register our `HelloWidget`. Note how `register` requires the
given class to implement `TypeInterface` as we've seen in the sample code
above.

## Try out your widget

Go to the admin area and make sure to enable the extension. You can download
the `HelloExtension` from the marketplace, which will include the `HelloWidget`.

Switch to the *Widgets* tab. Click the *Add Widget* button and choose *Hello
Widget!*. Notice how the form you're presented with has an *Advanced* section
that says *Hello Widget Form.* right now. This output is generated by
`HelloWidget::renderForm` as seen above.

Choose a *Title* for your widget and make sure to set the *Status* to enabled and
to choose a position (for example *Top*). The position will determine the location
where the output will be rendered. Switch to the *Assignment* tab and select all
pages where the widget should be visible. We choose *Home* in this example. *Save* your widget and navigate to the Home page to see your rendered widget
in action.

## Create a dashboard widget

You can also create widgets for the *Dashboard* in the admin area. Those work
exactly the same, the only difference being the way the widget is registered
at the Application (and the configuration is stored in or in the `system_user`
table, because dashboard widgets are specific for every user's dashboard).

```php
<?php

namespace Pagekit\Hello;

use Pagekit\Extension\Extension;
use Pagekit\Framework\Application;
use Pagekit\Widget\Event\RegisterWidgetEvent;

class HelloExtension extends Extension
{

    public function boot(Application $app)
    {
        parent::boot($app);

        $app->on('system.dashboard', function(RegisterWidgetEvent $event) {
            $event->register(new HelloWidget);
        });
    }
}
```

To see your widget in action, add it to your admin dashboard:

1. Open *Settings > Dashboard* in the admin area.
2. Click *Add Widget* and choose the *Hello Widget*.
3. Save and go to the admin dashboard to view the widget

## Access the Pagekit environment from Widgets

You can hand in any values to your widget when rendering the widget view. If you want to check if a user is logged in, you can pass the user object for example.

```php
public function render(WidgetInterface $widget, $options = [])
{
    $user = $this['user'];
    return $this['view']->render('extension://hello/views/widget.razr', compact('user'));
}
```

```html
@if($user.isAuthenticated())
You are logged in.
@else
Not logged in.
@endif
``