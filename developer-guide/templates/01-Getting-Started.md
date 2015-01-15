How to make a template?

In Microweber a template is a set of files that determines the overall look of a website. These files are used to generate the site layout and the html code. 

Any html page can be turned into a template by defining editable regions in it.  You can use PHP and HTML to make your template as flexible as you need it to be.

Here is how to get started...  What you need to know …
Template structure

All templates are located into userfiles/templates directory

Each template is contained within its own folder and you need to create a new folder when creating a new template. Usually, the name of the folder is given the name of your new template.

Here is the most basic template structure

userfiles
- templates
  - my_template
     config.php
     header.php
     index.php
     footer.php

Basic template files and their purpose
config.php 	holds the name of your template
index.php 	homepage template and default layout
header.php, footer.php
	optional files to hold your template's header and footer
inner.php 	optional file to load a post
config.php

This file indicates the name of your template and its version. 

Here is example config file you must create in your template folder

userfiles/templates/my_template/config.php

<?php
$config = array();
$config['name'] = "My template";
$config['author'] = "Your name";
$config['version'] = 0.1;
$config['url'] = "http://example.com/";

The config file defines the name of your template as it will appear in the "Template selection" menu and in the "Settings" area.

The version parameter is optional and its used if you want to offer updates.

After making the config.php file you can start making the layouts of your template