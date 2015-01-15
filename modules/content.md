## content

Module to show content, like pages, posts and products

    <module type="content" /> 
<!--?php print page_content('params/modules/content'); ?-->

## Examples

#### Get a list of pages

    <?php //shows pages ?>
    <module type="content" content-type="page" />

#### Show only the main pages

    <?php //shows main pages ?>
    <module type="content" content-type="page" parent="0" />

#### Get list of posts and apply module template

    <?php //shows posts ?>
    <module type="content" content-type="post" template="sidebar" />

#### Limit the number of results and sort by date

    <?php //shows all content by last edited ?>
    <module type="content" limit="5" hide-paging="true" order-by="updated_at desc" />

#### Get posts from category

    <?php //shows all posts from a category ?>
    <module type="content" content-type="post" category="22" />

#### Get content and limit the results

    <?php print "Results page 1"; ?>
    <module type="content" limit="2" current-page="1" />

    <?php print "Results page 2"; ?>
    <module type="content" limit="2" current-page="2" />

#### Show only certain fields

    <?php //shows only some fields ?>
    <module type="content" content-type="page" parent="0" show="title,thumbnail,read_more" />