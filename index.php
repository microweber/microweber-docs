<?php
require('one.php'); 
$content = page_content();
$repo_dir = "https://github.com/microweber/microweber-docs/tree/master/";
$this_file_link= $repo_dir.url_path().'.php';

if(is_ajax()){
 print $content;
 exit();
}

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
	<link href="<?php print site_url(); ?>assets/css/main.css" rel="stylesheet">
	<link href="<?php print site_url(); ?>assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<script src="<?php print site_url(); ?>assets/js/jquery.js"></script>
	<script src="<?php print site_url(); ?>assets/js/bootstrap.js"></script>
	<link href="<?php print site_url(); ?>assets/js/highlight/styles/github.css" rel="stylesheet">
	<script src="<?php print site_url(); ?>assets/js/highlight/highlight.pack.js"></script>
	<script>
     $(window).bind("load resize", function(){
       $(document.getElementById('sidebar-wrapper-holder')).css({
         "height":$(window).height() - $("#logotholder").outerHeight(),
         "top":$("#logotholder").outerHeight()
       });
     })
	if('ontouchstart' in document.documentElement){
      document.body.className+=' touchdevice'
    }
    </script>
	<script>
    $(document).ready(function(){
	    make_pretty_code();

        var ac = $("#main_dropdown a.active").html();
        var dataref = $("#main_dropdown a.active span").attr("data-ref");
        $("#main_dropdown_value").html(ac);

    });
	$(window).on('hashchange', function () {

	}); 

	function make_pretty_code(){
		  //Prism.highlightAll();
		   $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

	}

	 
	


	
	
	</script>
	</head>
	<body>
    <div id="wrapper">
      <div id="sidebar-wrapper"> <span id="fader"></span>
        <div id="sidebar-wrapper-holder">
          <div class="sidebar-brand">
            <div id="logotholder"><a href="<?php print site_url(); ?>" id="logot">API Documentation </a></div>
          </div>
          <ul class="sidebar-nav">
          </ul>
          <div class="dropdown sidebar-dropdown" id="main_dropdown"> <a data-toggle="dropdown" href="#"><b class="caret pull-right"></b><span id="main_dropdown_value">Functions reference</span></a>
            <ul class=" dropdown-menu" role="menu">
              <li><a class="nav-title dd_functions_ref <?php if(strstr(url_path(), 'functions/')) print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/functions"><span data-ref="functions">Functions Reference</span></a> </li>
              <li><a class="nav-title dd_class_ref <?php if(strstr(url_path(), 'classes/')) print "active" ; ?>" href="<?php print site_url(); ?>classes/_nav/classes" data-ref="class">Class Reference </a></li>
            </ul>
          </div>
          <?php if(strstr(url_path(), 'functions/') or url_path() == ''): ?>
          <ul class="sidebar-nav">
            <li> <?php print page_content('functions/_nav/functions'); ?> </li>
          </ul>
          <?php endif; ?>
          <?php if(strstr(url_path(), 'classes/')): ?>
          <ul class="sidebar-nav">
            <li> <?php print page_content('classes/_nav/classes'); ?> </li>
          </ul>
          <?php endif; ?>
        </div>
      </div>
      
      <!-- Page content -->
      <div id="page-content-wrapper">
        <div class="page-content inset" id="page-content-body"> <?php print $content; ?> </div>
        <?php /*<div class="docs-help-needed"><a class="text-muted" href="<?php print $this_file_link?>">edit this file</a> </div>*/ ?>
      </div>
    </div>
</body>
</html>