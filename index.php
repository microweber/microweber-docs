<?php require('one.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php print page_title(); ?></title>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700,400italic,700italic' rel='stylesheet'
          type='text/css'>
    <link href="<?php print site_url(); ?>assets/mw-ui/default.css" rel="stylesheet">
    <link href="<?php print site_url(); ?>assets/mw-ui/ui.css" rel="stylesheet">

    <link href="<?php print site_url(); ?>assets/docs.css" rel="stylesheet">
    	<link href="<?php print site_url(); ?>assets/js/highlight/styles/github.css" rel="stylesheet">

    <script src="<?php print site_url(); ?>assets/js/highlight/highlight.pack.js"></script>

</head>
<body>
<div class="header"><?php require('header_nav.php'); ?></div>
<div class="page-container mw-ui-box mw-ui-box-content" style="background-color: white;">

    <div class="mw-ui-row">
        <div class="mw-ui-col" style="width: 300px;">
            <div class="sidebar">
                <?php print page_nav(); ?>
            </div>
        </div>
        <div class="mw-ui-col">
            <div class="container">
                <div class="content"><?php print page_content(); ?></div>
            </div>
        </div>
    </div>


</div>
<script src="<?php print site_url(); ?>assets/jquery.min.js"></script>
<script >

$(document).ready(function(){
   $(".sidebar ul").addClass("xxxxmw-ui-navigation mw-ui-box");
   $(".content table").addClass("mw-ui-table");
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
});

</script>
<?php require('stats.php'); ?>
</body>
</html>
        