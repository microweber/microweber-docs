# Creating Templates

Microweber templates live within their own folders under `userfiles/templates/`. The template folder name is restricted to lowercase alphanumeric (`a-z`, `0-9`), underscore (`_`) and dash (`-`). The template in examples on this page is located in `userfiles/templates/my_template`

* [Basic File Structure](#file-structure)
* [Configuration](#configuration)
* [Header + Footer](#header-footer)
* [Rendering Modules](#rendering-modules)
* [Layouts](#layouts)

## <a name="file-structure"></a> Basic File Structure
<pre>
/userfiles
    /templates
        /my_template
         config.php
         header.php
         index.php
         footer.php
         clean.php
</pre>

## <a name="configuration"></a> Configuration
Defining the `$config` array makes the template appear in the admin panel.

*Example* `config.php`
```
<?php
$config = array(
  'name' => 'My Template',
  'author' => 'Author Name',
  'version' => 1.0,
  'url' => 'http://author.com/my-template'
);
```

## <a name="header-footer"></a> Header + Footer
Template header and footer can be loaded within the template layout to add common assets, scripts and styles for the website.


*Example* `header.php`
```
<!DOCTYPE HTML>
<html prefix="og: http://ogp.me/ns#">
    <head>
        <title>{content_meta_title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

        <!--  Site Meta Data  -->
        <meta name="keywords" content="{content_meta_keywords}">
        <meta name="description" content="{content_meta_description}">

        <!--  Site Open Graph Meta Data  -->
        <meta property="og:title" content="{content_meta_title}">
        <meta property="og:type" content="{og_type}">
        <meta property="og:url" content="{content_url}">
        <meta property="og:image" content="{content_image}">
        <meta property="og:description" content="{og_description}">
        <meta property="og:site_name" content="{og_site_name}">

        <!--  Loading CSS and Javascripts  -->
        <link rel="stylesheet" type="text/css"
          href="<?php print template_url('css/style.css'); ?>" />
        <script type="text/javascript"
          src="<?php print template_url('assets/site.js'); ?>"></script>

    </head>
    <body>
```
*Note:* Registering the `og` prefix in the `<html>` tag imports a metadata namespace from `ogp.me` for SEO optimization and improved link previews on user share in social media.

You can use the `template_url()` function to get the URL to the template folder. The `template_dir()` function returns the full filesystem path to the template.

The curly bracket syntax (`{content_meta_title}`) is replaced with the appropriate content when the template is rendered.

Put any closing tags in `footer.php`, as well as common content like footer menus, copyright info, etc.

*Example* `footer.php`
```
    </body>
</html>
```

## <a name="rendering-modules"></a> Rendering Modules
To make the template functional modules need to be rendered.
You can also put global editable regions, so users can alter the content.

Modules are loaded in place of the custom `<module type="module_name" />` tag.

*Example* in `header.php`
```
<div id="header">
    <div class="edit" rel="global" field="header">
        <h1>
          <a href="<?php print site_url(); ?>">
            <?php echo option_get('website_title', 'website'); ?>
          </a>
        </h1>
        <module type="menu" name="header_menu"
          id="main-navigation" template="pills"  />
    </div>
</div>
```
*Example* in `footer.php`
```
<div id="footer" class="edit" field="footer" rel="global">
    <div>Copyright &copy; <?php print date('Y');  ?> All rights reserved</div>
    <module type="menu" name="footer_menu" />
</div>
```

## Layouts <a name="layouts"></a>

Templates have one or more "layouts", or pages.
The vast majority of sites need complex structure with different types of screens; this can be acheived by adding a variety of page layouts to your template.

Each page layout is rendered separately but you can define common regions, such as `header`, `footer` or `sidebar` to share code between layouts.

Create different layouts to allow users to change the layout, design or impression depending on the type of pages for their blog, shop or contact form.

<img src="img/layout_selector.png" />

Layouts are php scripts located in the template's folder or subfolders, e.g. `/userfiles/templates/my_template/layouts/`. The `index.php` file is used as a homepage layout.

Microweber recognizes layout files by scanning the template folder for scripts annotated with the following comment syntax in the beginning:
```
<?php
/*
  type: layout
  name: Shop
  content_type: static
  description: Suitable for e-commerce pages
*/
```

Different layouts can be set for every page when editing it in the website administration.


The `clean` layout is used by default for new pages and also as a fallback layout if no other can be found.

*Example* `clean.php`
```
<?php
/*
type: layout
content_type: static
name: Clean
position: 2
description: Default
*/
?>
<?php include template_dir(). "header.php"; ?>
<div id="content"> 
  <div class="container edit"  field="content" rel="content">
    <p>This is my text</p>
  </div>
</div>
<?php include template_dir(). "footer.php"; ?>
```

## Editable Regions
Editable regions can be defined by adding the `edit` class to any html element.

*Example* `index.php`
```
<?php
/*
  type: layout
  content_type: static
  name: Home
  description: Landing page
*/
include template_dir().'header.php'; ?>
<div class="container">
    <div class="edit" field="content" rel="content">
        <h2>Welcome to my homepage!</h2>
        <p>
          This is my awesome Microweber template.<br />
          You can edit this text since its container has an "edit" class.
        </p>
        <p>Just click here and start typing!</p>
    </div>
</div>
<?php include template_dir().'footer.php';
```