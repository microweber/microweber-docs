# Template Examples

* [Example Blog Layout](#blog)
  * [Post Layout](#blog-post)
* [Example Shop Layout](#shop)
  * [Product Layout](#shop-product)
* [Example Contact Form Layout](#contact)

## <a name="blog"></a> Example Blog Layout
This is an example of how you could make a layout for a blog page containing a `posts` module and a sidebar.

First, create a layout file in the template folder, e.g. `layouts/blog.php`. This file will be rendered when a page with a `Blog` layout is displayed.

*Example* `layouts/blog.php`
```
<?php
/*
  type: layout
  content_type: dynamic
  name: Blog
*/
?>
<?php
include template_dir().'header.php'; ?>
<div class="container">
    <div class="blog-content edit" field="content" rel="content">
        <h2>Recent Posts:</h2>
        <module type="posts" />
    </div>
    <div class="blog-sidebar edit" field="sidebar" rel="inherit">
        <h2>Categories</h2>
        <module type="categories" />
    </div>
</div>
<?php include template_dir().'footer.php';
```

### <a name="blog-post"></a> Creating Post Layout

A blog layout should also have an inner page to show single posts.
You could store the layout in `layouts/blog_inner.php`. Another option is to keep it in the template root folder and use it as a default layout for posts in all pages.
Editable regions and a `comments` module would seem appropriate for such layout.

*Example* `layouts/blog_inner.php`
```
<?php
/*
  type: layout
  content_type: static
  name: Post
  description: Post layout

*/
?>
<?php include template_dir().'header.php'; ?>
<div class="container">
    <h1 class="post-title edit" field="title" rel="content">My post title</h1>
    <div class="blog-post edit" field="content" rel="content">
        <p>My post content</p>
    </div>
    <div class="blog-comments edit" field="post-comments" rel="content">
        <module type="comments" />
    </div>
    <div class="blog-sidebar edit" field="sidebar" rel="inherit">
        <h2>My sidebar</h2>
        <module type="categories" />
    </div>
</div>
<?php include template_dir().'footer.php';
```

## <a name="shop"></a> Example Shop Layout
If we want to have a shop pages in out template we will need to make a shop layout and a layout to display products from the shop.

The shop layout is created by including is_shop property in the definition of the layout file. You can add products only to pages that are defined as shop by using a shop layout.

Make a new file at userfiles/templates/my_template/layouts/shop.php, this file will load when you create new page and choose the "Shop" layout.

*Example* `shop.php`
```
<?php
/*
type: layout
content_type: dynamic
name: Shop
is_shop: y
position: 3
*/
?>
<?php include template_dir().'header.php'; ?>
<div class="container">
    <div class="edit" field="content" rel="content">
        <p>My shop page</p>
    </div>
    <div class="edit" field="shop-products" rel="content">
        <module type="shop/products" />
    </div>
    <div class="shop-sidebar edit" field="sidebar" rel="inherit">
        <h2>Shop sidebar</h2>
        <module type="categories" />
        <h4>Shopping Cart</h4>
        <module type="shop/cart" />
    </div>
</div>
<?php include template_dir().'footer.php'; ?>
```
The `categories`, `shop/products` and `shop/cart` modules 
are now rendered by the layout.

### <a name="shop-product"></a> Product
*Example* `layouts/shop_inner.php`
```
<?php
/*
  type: layout
  content_type: static
  name: Product
*/
?>
<?php
include template_dir().'header.php'; ?>
<div class="container">
  <div class="edit"  field="content" rel="content">
      <module type="pictures" rel="content" />
      <div class="edit"  field="content_body" rel="content">
        <p class="element">My product text</p>
      </div>
      <module type="shop/cart_add" />
  </div>
</div>
<?php include template_dir().'footer.php';
```

## <a name="contact"></a> Example Contact Form Layout

*Example* `layouts/contact_us.php`
```
<?php
/*
type: layout
content_type: static
name: Contact Form
position: 7
*/
?>
<?php include template_dir(). "header.php"; ?>
<div class="container">
  <div class="edit" field="content" rel="content">
    <h3>Find us on the map</h3>
    <module type="google_maps" />
    <h3>Or fill our form</h3>
    <module type="contact_form" />
    <div class="edit" field="content_body" rel="content">
      <h3>Address</h3>
      <hr />
      <p>1600 Pennsylvania Avenue Northwest, Washington, DC 20500, USA</p>
    </div>
  </div>
</div>
<?php include template_dir(). "footer.php";
```