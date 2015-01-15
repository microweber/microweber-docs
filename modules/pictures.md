## pictures

Shows a picture gallery

    <module type="pictures" content-id="1" /> 

### Module parameters

<table class="table table-striped table-hover"><thead><tr><th>parameter</th><th>description</th><th>optional values</th></tr></thead><tbody><tr><td>`content-id`</td><td>the id of the content</td><td>any valid content id</td></tr><tr><td>`template`</td><td>set the gallery template, you can also [make your own module template](<!--?php print site_url() ?-->developer-guide/making-a-module/module-template)</td><td>default templates are: `default`, `masonry`, `product_gallery`, `product_gallery_multiline`, `simple`, `slider`</td></tr></tbody></table>

## Examples

     <?php $content_id = 1; ?>
    <module type="pictures" content-id=<?php print $content_id; ?> />

## Set gallery template

     <?php //set a skin ?>
    <module type="pictures" content-id="1" template="masonry"  />

Test other templates

     <?php $template = 'product_gallery'; ?>
    <h2>Preview of <?php print $template ?></h2>
    <module type="pictures" content-id="1" template="<?php print $template ?>"  />

    <?php $template = 'slider'; ?>
    <h2>Preview of <?php print $template ?></h2>
    <module type="pictures" content-id="1" template="<?php print $template ?>"  />

### How to style the pictures module

#### Create skin  in the site template dir

Use this option if your skins are dependant on the site template.

Create a folder in `userfiles/templates/my_site_template/modules/pictures/templates/`

All skins that you put in this folder will work only in your site template

#### Create skin   in the modules dir

Use this option if your skin use its own CSS and its not dependant on the site template.

Create your skin in this folder `userfiles/modules/pictures/templates/`

All skins that you put in this folder will work only in all site templates

#### Sample skin

 `my_skin.php`
     <?php

    /*
    type: layout
    name: My pictures template
    description: Simple Pictures List
    */

    ?>
    <script>mw.moduleCSS("<?php print $config['url_to_module']; ?>css/my_style.css"); </script>
    <script>mw.require("<?php print $config['url_to_module']; ?>js/my_style.js"); </script>

    <?php if (is_array($data)): ?>
        <?php  foreach ($data as $item): ?>
            <a href="<?php print ($item['filename']); ?>">
              <img src="<?php print thumbnail($item['filename'], 300); ?>"/>
            </a>
        <?php endforeach;  ?>
    <?php else : ?>
    <?php endif; ?>

<!--<h3>Integrating third-party scripts</h3>

-->