# Template guide


Microweber templates are a set of files that determines the overall look of a website. These files are used to generate the site layout and the html code. 

You can use PHP and HTML to make your template as flexible as you need it to be.




## Create a template
 


All templates are located into userfiles/templates directory

Each template is contained within its own folder and you need to create a new folder when creating a new template. Usually, the name of the folder is given the name of your new template.

Template folders must be in lower-case and must not contain spaces or special characters.

Here is the most basic template structure

    userfiles
     /templates
        /my_template
         config.php
         header.php
         index.php
         footer.php

###Basic template files and their purpose

|Filename  | Description|
| ------------- | ------------- |
| config.php  | holds the information for  your template, like name, version  |
| index.php  | homepage template and default layout  |
| header.php  | site header  |
| footer.php  | site footer  |
| inner.php  | layout for post  |

 	
 	
 
#### config.php
Here is example config file you must create in your template folder

     userfiles/templates/my_template/config.php

####Set template name, author and version

The `config.php` file must contain a `$config` array with the following information.

```php

<?php
$config = array();
$config['name'] = "My template";
$config['author'] = "Your name";
$config['version'] = 0.1;
$config['url'] = "http://example.com/";

```


The config file defines the name of your template as it will appear in the "Template selection" menu and in the "Settings" area.

The version parameter is optional and its used if you want to offer updates.



### Adding CSS and Javascript

In the common case every template have a lot of files, those may be images, css files, javascripts and what not. You can put those files in the template folder and load them in your layout file

To add some basic styling, please create a css/ folder inside your theme folder and add some CSS in css/theme.css 




```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    
    <link rel="stylesheet" href="<?php print template_url(); ?>style.css">
    <script type="text/javascript" src="<?php print template_url(); ?>scripts.js"></script>
      
    </head>
    <body>
       ...
    </body>
</html>
```





## Template layouts

Each template is made of "layouts"

Think of layouts as "pages" of your template. You can have just one layout... or as many as you like. 

The vast majority of sites need more complex structure and that can be accomplished by adding a variety of page layouts to your template folder.

Microweber allows you to have different layouts for different pages in your site. Although each page layout can be different you can define common regions such as a “header", “footer" and a “sidebar” to share among layouts.


Every template can have multiple layouts. Besides a simple page, you can make different page layouts that can be used by the users and chosen at the page creation process.

Example of layouts usage is to allow the user to have different looking pages for their blog, shop or contact us

![layout_selector.png](img/layout_selector.png "")



#### Layouts location

The layouts are located in your template folder. 

For example: `userfiles/templates/my_template/layouts/`


##### Creating layouts

The layout files are simply php files located in any subfolder of yout template. Microweber reconizes a layout file by scanning the template folder for php files which contains the following code in them.

To create a layout simply make a new php file in your template folder with this code.

`my_layout.php` 

```php

<?php
/*
  type: layout
  name: My layout
  description: My sample layout
*/
?>
<?php include (TEMPLATE_DIR. "header.php"); ?>

<div id="content">
    <div class="container edit" field="content" rel="content">
      <p class="element">Type your text here</p>
    </div>
</div>

<?php incWlude (TEMPLATE_DIR. "footer.php"); ?>

```




Those page layouts can show content from the current page or from other places. They can even have shared common editable regions.  All you need to do is include modules and write your php code in the layout file.



### Creating blog layout
Here, for example, is how we would make a layout for a blog page with a posts module and a sidebar.

`blog.php`

```php
<?php

/*

  type: layout
  content_type: dynamic
  name: Blog
  description: Blog layout

*/

?>
<?php include TEMPLATE_DIR. "header.php"; ?>

<div class="container">
    <h1 class="post-title edit" rel="content" field="title">Welcome to my blog</h1>
    <div class="blog-content edit" field="content" rel="content">
        <p>Check out my posts</p>
        <module type="posts" />
    </div>
    
    <div class="blog-sidebar edit" field="sidebar" rel="inherit">
    My sidebar
    </div>
</div>

<?php include TEMPLATE_DIR. "footer.php"; ?>
```



### Creating blog inner page

We can have an inner page to show the posts added to our blog. Otherwise the content will be shown in the blog.php layout. You can achieve even more flexibility by creating a file blog_inner.php to show posts added the blog layout.


`inner.php`

```php
<?php

/*

  type: layout
  content_type: static
  name: Post
  description: Post layout

*/

?>
<?php include TEMPLATE_DIR. "header.php"; ?>

<div class="container">
    <h1 class="post-title edit" rel="content" field="title">Welcome to my post</h1>
    <div class="blog-post edit" field="content" rel="content">
        <p>My post content</p>
    </div>
    <div class="blog-comments edit" field="post-comments" rel="content">
        <module type="comments" />
    </div>
    <div class="blog-sidebar edit" field="sidebar" rel="inherit"> My sidebar </div>
</div>

<?php include TEMPLATE_DIR. "footer.php"; ?>
```

Notice that we added two editable regions and comments module to our inner layout.




## Editable regions

The editable regions are the places where the users can drag and drop modules and edit content in real time.

You can define as few or as many regions that you like

Every layout can have many editable regions. 




### How to make editable regions
You can define editable regions in your template where the user will be able to type text and Drag and Drop modules
The content of this region will be dynamic and will be editable on every layout that includes it.

Here is how it looks like:

```html
<div class="edit"  field="your_region_name" rel="content">      
	<p>Edit your content</p>
</div>
```


Simply add class "*edit*" and "*field*" and "*rel*" attributes to ANY html element.
As a developer you can decide how many editable regions you want. They are very flexible and can be re-used across pages.

<div class="mw-ui-box  mw-ui-box-info ">
<div class="mw-ui-box-header">
<span class="mw-icon-info"></span><span>Creating editable field</span>
</div>
<div class="mw-ui-box-content">
<ul>
<li>Add class "edit"</li>
<li>Add "field" attribute</li>
<li>Add "rel" attribute</li>
</ul>
</div>
</div>




 
#### Editable region attributes

Each editable region behaves differently in dependence of the rel and field attributes you add to it

**`field` attribute**
 
The `field` attribute will help you to define multiple content-editable regions in your layout.

Add attribute `field="some_name"` and set the name of your field in your template.
The main content region that the user sees during the "Add content" process must have `field="content"`


**`rel` attribute**

The `rel` attribute is responsible for the "scope" of your content-editable field.  

You can define custom scope and reuse the content of the editable regions across the whole website.

Add attribute rel and set the scope of your field.
* `rel="content"` - changes for every page or post
* `rel="global"` - changes for the whole site
* `rel="page"` - changes for every page and sub-page
* `rel="post"` - changes for every post
* `rel="inherit"` - changes for every main page, but not is sub-pages and posts
* `rel="your_custom_rel"` you can define your own scope

##### other attributes

There is optional attribute "rel-id", which allows you to display editable regions that belong to another content

 
#### Default content region

The default region that shows in the Admin panel is defined by `rel="content"` and  `field="content"` attributes of your html element

![editable_regions_classes.png](img/editable_regions_classes.png "") 



## Adding modules in your template


You can add a module in your template if you want to show dynamic content or work with some custom functionality 


The modules are added with `<module type="name_of_your_module" />`