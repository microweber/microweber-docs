# Multisite

Microweber allows for hosting more than one website on a single installation.
This is a core feature and a result of leveraging the Laravel framework and contemporary software design patterns and approaches.

Each site can have its own configuration, meaning you can virtually separate most of the computing resources for each user.

To enable this aspect of Microweber you only have to [setup multisite](../guides/installation.md#multi-site-setup).
Then each domain that resolves to your Microweber installation will be handled separately.



# Create new site

In order to make multi domain setup you must make a folder for each domain in the `config` directory with a file named `microweber.php` in it

for example for domain.com you must make empty file at `config/domain.com/microweber.php`
for domain2.com you must make empty file at `config/domain2.com/microweber.php`

After that when you visit domain.com you should see the install screen and the installation will be made for this domain only





# DNS Records
One way to link your domains is to just add an A record to your DNS for the same IP, for example:

DomainA.com
```
@ 123.45.67.8
*.DomainA.com 123.45.67.8 
```

DomainB.com
```
@ 123.45.67.8
*.DomainB.com 123.45.67.8
```

The second line in the example zone files instructs DNS to also resolve all subdomains but you may not always want this behavior.

The configuration subsystem is entirely domain-based so you can switch to multisite at any time after obtaining a copy of the Microweber code.

You might further want to see ways of [scripted installation] as a part of your deployment process.
