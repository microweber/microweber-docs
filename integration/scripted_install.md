# Scripted Installation

The recommended way to obtain a copy of Microweber is from GitHub. That, of course, requires you to [have git installed](http://lmgtfy.com/?q=Installing+git+tutorial).


### Get Microweber

One way to clone it is with this command:

```
git clone --depth 1 https://github.com/microweber/microweber.git mw_site
```

That will make a shallow copy of the repository (only the latest version) in a directory caled `mw_site`.

#### With Composer

It's best to have composer installed (for [Linux, OSX](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) and [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)) for Microweber dependency management.

Then you can obtain the source and resolve dependencies (i.e. skip next step) with one command:
```
composer create-project microweber/microweber mw_site
```

### Get Dependencies

Run `composer install` in the root directory of your installation.
If everything goes smooth you are good to go.

### Update Dependencies

In many cases you might want to be able update the code base with a single command. 
To acheive this just run `composer update` in the root directory of your installation.

### Issues With Install/Update

In the real world things go wrong. If you run into problems while installing or upgrading Microweber you can see the [troubleshoot guide](troubleshoot.md) or ask online. We're probably on the same sites as you.