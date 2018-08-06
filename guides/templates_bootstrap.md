 

# Template structure


Microweber templates are a set of files that determines the overall look of your website. These files are used to generate the site layout and the html code. 

You can use PHP and HTML to make your template as flexible as you need it to be.

Here is a link you can use to download our bootstrap 3 template and check it out code by code: 

https://github.com/microweber-dev/bootstrap3

OK, let's get down to some basic explaining.

# Modules

Each template is made of modules. You can think of them as the building blocks of your template. 

Examples of modules are: menu, posts list, contact form, shopping cart, user login, etc.

You can use the modules if you do not want to write custom functionality or re-use code you have already written. 

The Modules are loaded with the `<module type="the_name_of_the_module" template="the_skin_you_want" id="the_id_of_the_module" />` tag


|Filename  | Description|
| ------------- | ------------- |
| Post list  | List of all the posts in your blog section |
| Product list  | Product list of your online shop |
|Categories| All the categories for your posts or shop|
|Pictures| Gallery pictures|
|Shop| Displaying the Microweber's shop module|
|Menu| Displaying the menu module|
|Comments| List of comments for the current item|
|Social network| Quick buttons for our favourite social networks|


This is just a short list of all the free modules we offer you. You can find more in the `/userfiles/modules/` and experiment with them as much as you like!




# Layouts

Layouts are pre-defined simple pieces of code that can be added in the page.

You are build one for the purpose of your page or you can use/modify one from ours.

The Layouts are loaded with the `<module type="some_module_name" />` tag


## Basic files
 
All templates are located into `userfiles/templates` directory. Each template is contained within its own folder and you need to create a new folder when creating a new template. Usually, the name of the folder is the name of your new template.

Template folders must be in lower-case and must not contain spaces or special characters.

Here is the most basic template structure
 
```
userfiles
 /templates
    /my_template
     config.php
     editor.php
     header.php
     index.php
     footer.php
     inner.php
     clean.php
```



### Files and their purpose

|Filename  | Description|
| ------------- | ------------- |
| config.php  | holds the information for  your template, like name, version  |
| index.php  | homepage default layout  |
| header.php  | site header  |
| footer.php  | site footer  |
| clean.php  | default layout for page  |
| inner.php  | default layout for post  |
| editor.php  | used to visualize page's preview in the editor  |
| template_settings.php  | template's settings  |


# Configuration and Template Setup

For the purpose of this tutorial we are going to use [this free template](https://bootswatch.com/paper/ ""). You can get the source code from Bootswatch at https://bootswatch.com/paper/



Lets download the template css file from here https://bootswatch.com/paper/bootstrap.css and unzip it in new folder at `userfiles/templates/bootswatch_paper`


After unzip create a new file at `userfiles/templates/startbootstrap-agency/config.php`, this file holds information about the template name, author, version, etc.

The `config.php` file must contain a `$config` array with the following information.

```php
<?php
$config = array();
$config['name'] = "Template's name";
$config['author'] = "Your name";
$config['version'] = "0.1";
$config['url'] = "https://github.com/ironsummitmedia/startbootstrap-agency/";
```



# Getting to work

Now that we have the template and our config file in place, lets get to work and connect it to the CMS

The `index.php` file is loaded when the user goes on the home page. You can see the HTML source code of the downloaded template [here](https://github.com/IronSummitMedia/startbootstrap-agency/blob/gh-pages/index.html ""). 

We will need to separate the header and the footer part, so we can re-use them in our inner pages layouts. 


## header.php

Create a file at `userfiles/templates/startbootstrap-agency/header.php` and move the template styles and scripts there. 



```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>Some Title</title>

<!-- Bootstrap Core CSS -->
<link href="<?php print template_url(); ?>css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="<?php print template_url(); ?>css/agency.css" rel="stylesheet">
<link href="<?php print template_url(); ?>css/custom.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="<?php print template_url(); ?>font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body id="page-top">

<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header page-scroll">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      <a class="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a> </div>
    
    <!-- Include menu module -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <div class=" navbar-right">
        <module type="menu" name="header_menu" id="header_menu" />
      </div>
    </div>
    
  </div>
</nav>

<!-- Header -->

```


Let's get to some explanation, shall we?! Most of the code should be simple- we put the html mark-up inside for the head section and the first part of the body
for the header. Including your .css and .js files are pretty easy, too. 

For the .css you use 
```html
<link href="<?php print template_url(); ?>css/agency.css" rel="stylesheet">
``` 
where
```php
<?php print template_url(); ?> 
```
is the template's url. Don't worry,
Microweber knows what to do with that.The same goes for the .js files. Using 

```html
<script type="text/javascript" src="<?php print template_url('assets/site.js'); ?>"></script>
``` 
 we are pointing where the file is
and Microweber is taking care for the rest.

Declaring module is simple, too. Here <module type="menu" name="header_menu" id="header_menu" /> we are saying that we want a module that is menu type, which has a name,an id and as we are going to see in the footer.php page you can assign a template as well. Moving on.




##footer.php
Well, same as the header.php, this is going to be a file that will be part of every page and, as the name suggests, inside we are going to put our footer information.
```html
<div id="footer">
  <div class="container">
    <div class="edit" rel="global" field="bootstrap3-site-footer">
      <div class="mw-row">
        <div class="mw-col" style="width: 30%">
          <div class="mw-col-container"> <a href="http://facebook.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.fb_b.png" /></a> <a href="http://twitter.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.tt_b.png" /></a> <a href="http://youtube.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.yt_b.png" /></a> </div>
        </div>
        <div class="mw-col" style="width: 70%">
          <div class="mw-col-container">
            <module type="menu" name="footer_menu" id="footer-navigation" template="small" />
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div id="footer-bottom">
      <div class="row">
        <div class="col-md-8">
          <div class="edit" rel="footer" field="footer-copyright">Copyright &copy; <span class="unselectable" contentEditable="false"><?php print date('Y'); ?></span>, All rights reserved </div>
        </div>
        <div class="col-md-4"><span class="muted pull-right"><?php print powered_by_link(); ?></span></div>
      </div>
    </div>
  </div>
</div>
</body></html>
```
The code is again as simple as it can be. Few things to note! 
You will see that we have this 
```html
<div class="mw-row">
        <div class="mw-col" style="width: 30%">
          <div class="mw-col-container"> <a href="http://facebook.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.fb_b.png" /></a> <a href="http://twitter.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.tt_b.png" /></a> <a href="http://youtube.com/Microweber" target="_blank"><img src="<?php print template_url(); ?>img/mw.soc.yt_b.png" /></a> </div>
        </div>
        <div class="mw-col" style="width: 70%">
          <div class="mw-col-container">
            <module type="menu" name="footer_menu" id="footer-navigation" template="small" />
          </div>
        </div>
      </div>
```
 
Notice the class="mw-row" and class="mw-col". This will allow you to resize the columns in real time via the live editor. You can also set the initial width with style="width:x%".

Now all you have to do is to use 

```php
<?php include template_dir(). "header.php"; ?>
```
and this

```php
<?php include template_dir(). "header.php"; ?>
```

to include this files wherever you want them to appear! Simple as that!
 
##index.php
 
```html

 <?php

/*

  type: layout
  content_type: static
  name: Home
  position: 11
  description: Home layout

*/

?>
<?php include template_dir(). "header.php"; ?>

<div class="container edit" id="home-layout"  rel="page" field="content">
  <div class="row clearfix">
    <div class="col-md-12 column">
      <div class="jumbotron">
        <h1> Hello, world! </h1>
        <p> This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique. </p>
        <p> <a class="btn btn-primary btn-large" href="#">Learn more</a> </p>
      </div>
    </div>
  </div>
  <div class="mw-row clearfix">
    <div class="mw-col" style="width:33.33%">
      <div class="mw-col-container">
        <div class="element">
        
          <h2> Heading </h2>
          <p> Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p> <a class="btn" href="#">View details</a> </p>
        </div>
      </div>
    </div>
    <div class="mw-col" style="width:33.33%">
      <div class="mw-col-container">
        <div class="element">
          <h2> Heading </h2>
          <p> Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p> <a class="btn" href="#">View details</a> </p>
        </div>
      </div>
    </div>
    <div class="mw-col" style="width:33.33%">
      <div class="mw-col-container">
        <div class="element">
          <h2> Heading </h2>
          <p> Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p> <a class="btn" href="#">View details</a> </p>
        </div>
      </div>
    </div>
  </div>
   
  <div class="container">
    <div class="element"> <br>
      <br>
      <h3 align="center" class="symbol">Powerful &nbsp;&amp;&nbsp; User Friendly &nbsp;Content Management System &nbsp;of &nbsp;New Generation</h3>
      <h4 align="center">with rich PHP and JavaScript API</h4>
        <br>
    </div>
  </div>
  <div class="container">
    <div class="mw-row">
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <div class="element">
            <hr class="visible-desktop column-hr">
          </div>
        </div>
      </div>
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <h2 align="center">
            <?php _e("Latest Posts"); ?>
          </h2>
        </div>
      </div>
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <div class="element">
            <hr class="visible-desktop column-hr">
          </div>
        </div>
      </div>
    </div>
 
    <module
          data-type="posts"
          data-limit="3"
          id="home-posts"
          data-description-length="100"
          data-show="thumbnail,title,created_at,read_more,description"
          data-template="columns" />
  </div>
  <div class="container">
    <div class="mw-row">
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <div class="element">
            <hr class="visible-desktop column-hr">
          </div>
        </div>
      </div>
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <h2 align="center">
            <?php _e("Latest Products"); ?>
          </h2>
        </div>
      </div>
      <div class="mw-col" style="width:33.33%">
        <div class="mw-col-container">
          <div class="element">
            <hr class="visible-desktop column-hr">
          </div>
        </div>
      </div>
    </div>
    <module
          data-type="shop/products"
          data-limit="3"
          id="home-products"
          
            />
  </div>
</div>
<?php include template_dir().  "footer.php"; ?>

```
 
Here, we include the header and the footer and between them we put some content.

A few notes about this: 

```php

<?php

/*
type: layout
content_type: static
name: Home
position: 2
is_default: true
description: Clean layout

*/
?>

```
This is the section where you give your page some attributes like name, description, type, etc. Microweber will go trough that comment and will extract everything it needs . For the rest of the tutorial we are going to call this 

```php
<?php
/*
file information
*/
```




When having .edit class, we are saying that we want the elements, that are in the containing tag, to be editable. With this information, Microweber will know that in Live Edit mode we want to have absolute control over the content.
Id, rel and field should be also included in order to make the fields unique and prevent different edit field from colliding and outputing errors.

```html
<div class="container edit" id="home-layout"  rel="page" field="content">
.....
</div>
```


More function and explanations you can find in our documentations : http://microweber.com/docs/guides/README.md 

##clean.php

```html
<?php

/*
file information
*/
?>
<?php include template_dir(). "header.php"; ?>
<section id="content">
  <div class="container edit"  field="content" rel="content">
    <p class="element">Type your text here</p>
  </div>
</section>
<?php include template_dir(). "footer.php"; ?>
```

Clean page is for one purpose- to be clean and ready for filling. Call it blank page if you want.


##layouts\shop.php

```html
<?php

/*
file information
*/


?>
<?php include template_dir(). "header.php"; ?>

<section id="content">
  <div class="container">
    <div class="row" id="shop-products-conteiner">
      <div class="col-sm-12 edit"  field="content" rel="page">
        <p class="p0 element">This text is set by default and is suitable for edit in real time. By default the drag and drop core feature will allow you to position it anywhere on the site. Get creative & Make Web.</p>
      </div>
    </div>
    <div class="row" id="shop-products-conteiner">
      <div class="col-sm-8 edit"  field="content2" rel="page">
        <module type="shop/products"  limit="18" description-length="70"    />
      </div>
      <div class="col-sm-4">
        <?php include template_dir(). 'layouts' . DS."shop_sidebar.php"; ?>
      </div>
    </div>
  </div>
</section>

<?php include template_dir(). "footer.php"; ?>

```

Like all the pages we saw before, this is a simple and standard page for Microweber. As the name suggests it's for the SHOP part of the site and it's purpose is to view the main content. REMEMBER that this is for the main part. If you want to create a view for a single product for example, we can do it like this

```html
<?php include template_dir(). "header.php"; ?>

<section id="content">
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h2 class="edit"  field="title" rel="post">Product inner page</h2>
        <hr>
        <div class="edit"  field="content" rel="post">
          <div class="mw-row">
            <div class="mw-col" style="width:50%">
              <div class="mw-col-container">
                <module type="pictures" rel="content" template="product_gallery" />
              </div>
            </div>
            <div class="mw-col" style="width:50%">
              <div class="mw-col-container">
                <div class="product-description">
                  <div class="edit"  field="content_body" rel="post">
                    <p class="element">This text is set by default and is suitable for edit in real time. By default the drag and drop core feature will allow you to position it anywhere on the site. Get creative &amp; <strong style="font-weight: 600">Make Web</strong>.</p>
                  </div>
                  <module type="shop/cart_add" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="edit"  field="related_products" rel="inherit">
          <h4 class="element sidebar-title">Related Products</h4>
          <module type="shop/products"   related="true" />
          <p class="element">&nbsp;</p>
        </div>
      </div>
      <!------------ Sidebar -------------->
      <div class="col-sm-4">
        <?php include_once "shop_sidebar_inner.php"; ?>
      </div>
    </div>
  </div>
</section>
<?php include template_dir(). "footer.php"; ?>


```

Note: In order to create a single-view product that is connected to the main part it has to be called something like "theNameOfThePage_inner.php". The "_inner" part is helping Microweber to transfer all the data that it needs and display the right information within the field you told it to.

If you want to add a page inside a page, you can do it like that

```php
 <?php include_once "shop_sidebar_inner.php"; ?>
```


##blog.php

Creating a view for the blog is no different than creating a shop layout

```html
<?php

/*
file information
*/


?>
<?php include template_dir(). "header.php"; ?>

<div id="content">
	<div class="container" id="blog-container">
		<div class="row">
			<div class="col-md-8 " id="blog-main">
				<div class="edit"  field="content" rel="page">
					 <h2>My blog</h2>
 
					<p class="p0 element">This text is set by default and is suitable for edit in real time. By default the drag and drop core feature will allow you to position it anywhere on the site. Get creative, Make Web.</p>
					<module data-type="posts" />
				</div>
			</div>
			<div class="col-md-3 col-md-offset-1" id="blog-sidebar">
				<?php include_once "blog_sidebar.php"; ?>
			</div>
		</div>
	</div>
</div>
<?php include template_dir(). "footer.php"; ?>
```

And the inner page for the blog will be:


```html
<?php include template_dir(). "header.php"; ?>

<div class="container" id="blog-container">
  <div id="blog-content-<?php print CONTENT_ID; ?>">
    <div class="row">
      <div class="col-sm-9" id="blog-main-inner">
        <h3 class="edit" field="title" rel="content">Page Title</h3>
        <div class="edit post-content" field="content" rel="content">
          <module data-type="pictures" data-template="slider"  rel="content"  />
          <div class="edit"  field="content_body" rel="content">
            <div class="element">
              <p align="justify">This text is set by default and is suitable for edit in real time. By default the drag and drop core feature will allow you to position it anywhere on the site. Get creative, Make Web.</p>
            </div>
          </div>
        </div>
        <div class="edit" rel="content" field="comments">
          <module data-type="comments" data-template="default" data-content-id="<?php print CONTENT_ID; ?>"  />
        </div>
      </div>
      <div class="col-sm-3" id="blog-sidebar">
        <?php  include template_dir(). "layouts/blog_sidebar.php";  ?>
      </div>
    </div>
  </div>
</div>
<?php include   template_dir().  "footer.php"; ?>

```

##Creating other layouts

There are a lot of ways of creating a layout. You can put a plain HTML code inside, you can use modules, predefined layouts or all the mentioned together. It's up to you. Make sure to check all the files inside the zip file for more information.


#Module skins

You don't like the current skin? Well in Microweber nothing is permanent. Here is how to change a module's skin.

In your template's folder create a folder called "modules". Now, for every module, that you want to edit, you create a separate folder. Let's say we want to create new skin for the menu module. We create a folder called "menu" inside our "modules" folder and then we create another folder called "templates" inside "menu". Inside, we add a new php file- let's call it navbar.php. The choice of name is up to you. Inside we put

```html
<?php

/*

type: layout

name: Navbar

description: Navigation bar

*/

?>
<script>

$(document).ready(function() {
 	$('ul.nav .dropdown').hover(function() {
	  $(this).find('.dropdown-menu:first',this).stop(true, true).delay(200).fadeIn();
	}, function() {
	  $(this).find('.dropdown-menu:first',this).stop(true, true).delay(200).fadeOut();
	}); 
});

</script>

<div class="navbar-collapse collapse">
  <?php
$menu_filter['ul_class'] = 'nav navbar-nav';
   $menu_filter['ul_class_deep'] = 'dropdown-menu';
 $menu_filter['li_class'] = 'dropdown';

 
		$mt =  menu_tree($menu_filter);

		if($mt != false){
		    print ($mt);
		} else {
		    print lnotif("There are no items in the menu <b>".$params['menu-name']. '</b>');
		}
   		?>
</div>

```

If you do not specify skin's name, Microweber will look for a file called default.php!



And this is it. If you want to hard-code the template, in the module declaration you have to write

```html
<module type="menu" template="the_name_of_the_file_you_created" id="always_put_unique_id"/>
```

Or you can choose it from the Live Edit mode by clicking on the name you put in the commented section above. And that's it!

For references you can go in \userfiles\modules and check out all the modules you have access to with all there skins inside. If you want to create new skins for them, you repeat the same steps for the new module.
