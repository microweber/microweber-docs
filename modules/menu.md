## menu

Renders menu tree

    <module type="menu" /> 
<!--?php print page_content('params/modules/menu'); ?--> 

## Examples

#### Prints menu tree

    <?php //show main menu ?>
    <module type="menu" />

#### Prints menu with template

    <?php //show footer menu ?>
    <module type="menu" menu-name="footer_menu" template="small" />

### How to style the menu module

To create a skin for this module there are 2 options

#### Create skin for the "menu" module in the site template dir

Use this option if your skins are dependant on the site template.

Create a folder in `userfiles/templates/my_site_template/modules/menu/templates/`

All skins that you put in this folder will work only in your site template

#### Create skin for the "menu" module in the modules dir

Use this option if your skin use its own CSS and its not dependant on the site template.

Create your skin in this folder `userfiles/modules/menu/templates/`

All skins that you put in this folder will work only in all site templates

#### Sample skin

`my_skin.php`
    <?php
    /*
    type: layout
    name: My menu
    description: My Menu skin
    */
    ?>

    <div class="my-menu-skin">
    <?php
    $menu_filter['ul_class'] = 'my-nav-small';
    print menu_tree($menu_filter);
    ?>
    </div>

This module uses the [menu_tree](<!--?php print site_url(); ?-->functions/menu_tree) function to render the output in the skin. Check the function parameters [here](<!--?php print site_url(); ?-->functions/menu_tree).

### Sticky top menu

If your site uses sticky header menu like [this template](http://startbootstrap.com/all-templates), you may have problems with the menu going behind the toolbar.

There is a solution to this. Add this css code to your template

    body.mw-live-edit nav {
    top:75px;
    }

Check out [this link](https://github.com/microweber/microweber/issues/178) for other solutions.