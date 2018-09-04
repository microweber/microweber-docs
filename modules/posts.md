## posts

Module to show posts from the site

<module type="posts" /> 


## Examples

#### Get a list of posts
```
<?php //shows posts from the whole site ?>
<module type="posts" />
```

#### Show only posts from parent page
```
<?php //shows blog ?>
<module type="posts" parent="2" />
```

#### Get list of posts and apply module template
```
<?php //shows posts with template?>
<module type="posts" template="sidebar" />
```

#### Limit the number of results and sort by date
```
<?php //shows posts ordered by last edited ?>
<module type="posts" limit="2" hide-paging="true" order-by="updated_at desc" />
```

#### Get posts from category
```
<?php //shows all posts from a category ?>
<module type="posts" category="22" />
```

#### Get posts and limit the results
```
<?php // "Results page 1"; ?>
<module type="posts" limit="2" current-page="1" />
```
```
<?php // "Results page 2"; ?>
<module type="posts" limit="2" current-page="2" />
```
#### Show only certain fields
```
<?php //shows only some fields ?>
<module type="posts" show="title,thumbnail" />
```

### How to style the posts module

To create a skin for this module there are 2 options

#### Create skin for the "posts" module in the site template dir

Use this option if your skins are dependant on the site template.

Create a folder in `userfiles/templates/my_site_template/modules/posts/templates/`

All skins that you put in this folder will work only in your site template

#### Create skin for the "posts" module in the modules dir

Use this option if your skin use its own CSS and its not dependant on the site template.

Create your skin in this folder `userfiles/modules/posts/templates/`

All skins that you put in this folder will work only in all site templates

#### Sample skin

`my_skin.php`

```php
<?php

/*

type: layout

name: My posts template

description: My sample posts template

*/
?>

<?php if (!empty($data)): ?>
    <?php foreach ($data as $item): ?>
	<a href="<?php print $item['link'] ?>"><?php print $item['title'] ?></a>
	<?php print $item['description'] ?>
	<?php endforeach; ?>
<?php endif; ?>
<?php if (isset($pages_count) and $pages_count > 1 and isset($paging_param)): ?>
<?php print paging("num={$pages_count}&paging_param={$paging_param}&current_page={$current_page}") ?>
<?php endif; ?>
```
#### Possible parameters
`
* template - Name of the template.
	Templates provided from Microweber:
	- default - loads when no template is specified
            
* limit - number of posts to show per page. Default is the value specified in the Admin -> Settings (10) .

* description-length
	- number: Number of symbols you want to show from description. Default: 400

* title-length
	- number: Number of symbols you want to show from title. Default: 120

* current_page - usage is for paging
	- number: The number of the page where the posts will appear. Default: 1

* hide-paging
	- y/n - Default: n

* data-show:
	 Possible values:
    	 - thumbnail,
	 - title,
    	 - read_more,
         - description,
	 - created_at

* strict_categories
`
