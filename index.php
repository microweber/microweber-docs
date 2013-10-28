<?php 
require('one.php'); 
$content = page_content();
 
$this_file_link='https://github.com/microweber/microweber-docs/tree/master/'.url_path().'.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Microweber docs</title>

    <!-- Bootstrap core CSS -->
    <link href="<?php print site_url(); ?>assets/css/bootstrap.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="<?php print site_url(); ?>assets/css/simple-sidebar.css" rel="stylesheet">
    <link href="<?php print site_url(); ?>assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?php print site_url(); ?>assets/js/google-code-prettify/prettify.css" rel="stylesheet">
    <script src="<?php print site_url(); ?>assets/js/jquery.js"></script>
    <script src="<?php print site_url(); ?>assets/js/bootstrap.js"></script>
    <script src="<?php print site_url(); ?>assets/js/google-code-prettify/prettify.js"></script>
    <script>



    $(document).ready(function(){
        
		
		
		prettyPrint();
		
		
    });









    </script>
    </head>

    <body>
	<div id="wrapper"> 
		
		<!-- Sidebar -->
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a href="<?php print site_url(); ?>">Documentation</a></li>
					<li><a class="nav-title <?php if(url_path() == 'functions/_nav/template') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/template">URL</a> <?php print page_content('functions/_nav/url'); ?> </li>
				
				<li><a class="nav-title <?php if(url_path() == 'functions/_nav/content') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/content">Content</a> <?php print page_content('functions/_nav/content'); ?> </li>
				<li style="display:none"><a href="<?php print site_url(); ?>test">Custom fields</a>
					<ul>
						<li><a class="<?php if(url_path() == 'functions/get_custom_fields') print "active" ; ?>" href="<?php print site_url(); ?>functions/get_custom_fields">get_custom_fields</a></li>
						<li><a class="<?php if(url_path() == 'functions/save_custom_field') print "active" ; ?>" href="<?php print site_url(); ?>functions/save_custom_field">save_custom_field</a></li>
					</ul>
				</li>
				
				<li><a href="<?php print site_url(); ?>test">Shop</a>
					<ul>
						<li><a class="<?php if(url_path() == 'functions/get_cart') print "active" ; ?>" href="<?php print site_url(); ?>functions/get_cart">get_cart</a></li>
					</ul>
				</li>
				<li><a class="nav-title <?php if(url_path() == 'functions/_nav/options') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/options">Options</a> <?php print page_content('functions/_nav/options'); ?> </li>
				
				
				<li><a class="nav-title <?php if(url_path() == 'functions/_nav/template') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/template">Template</a> <?php print page_content('functions/_nav/template'); ?> </li>
				
			
				
				
				<li><a class="nav-title <?php if(url_path() == 'functions/_nav/content') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/db">Database</a> <?php print page_content('functions/_nav/db'); ?> </li>
			</ul>
		</div>
		
		<!-- Page content -->
		<div id="page-content-wrapper">
			<div class="page-content inset" id="page-content-body"> <?php print $content; ?> </div>
			<div class="docs-help-needed"><a class="text-muted" href="<?php print $this_file_link?>">edit this file</a> </div>
		</div>
	</div>
</body>
</html>