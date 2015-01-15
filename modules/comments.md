## comments

Comments element with form to post a comment

    <module type="comments" /> 

<!--?php print page_content('params/modules/comments'); ?--> 

## Examples

#### Display comments for blog post

    <?php //show comments for content ?>
    <module type="comments" content-id="4" />

#### Hide the comments post form

    <?php //show comments for content ?>
    <module type="comments" content-id="11" no-form="true" />
 