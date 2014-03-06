<?php
require('one.php'); 
$content = page_content();


$title = page_content(false,'h1','clean');
 
if($title == false){
$title = page_content(false,'h2','clean');
}
if($title == false){
$title = "Microweber docs";	
}
$title = strip_tags($title);
//$description = page_content(false,'p:first');
$description = page_content(false,'*','clean');
$description = substr($description , 0, 550);  
 
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
<title><?php print $title; ?></title>
<meta name="description" content="<?php print $description; ?>">
<meta name="author" content="Microweber">

<script src="<?php print site_url(); ?>assets/js/jquery.js"></script>
<link href="<?php print site_url(); ?>assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="<?php print site_url(); ?>assets/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
<script src="<?php print site_url(); ?>assets/bootstrap/js/bootstrap.min.js"></script>
<link href="<?php print site_url(); ?>assets/js/highlight/styles/github.css" rel="stylesheet">
<link href="<?php print site_url(); ?>assets/docs.css" rel="stylesheet">
<link href="<?php print site_url(); ?>assets/labels.css" rel="stylesheet">

<script src="<?php print site_url(); ?>assets/js/highlight/highlight.pack.js"></script>
<script>
    SEARCH_URL = "<?php print site_url(); ?>s.php";
</script>
<script src="<?php print site_url(); ?>assets/docs.js"></script>
<script src="<?php print site_url(); ?>assets/runner.js"></script>

</head>
<body>
<div id="wrapper">
  <div id="header">

 <header class="navbar navbar-static-top bs-docs-nav">
  <div class="container">
    <div class="navbar-header">
      <button data-target=".bs-navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="<?php print site_url(); ?>" id="logo">Microweber Docs</a>
    </div>
    <nav role="navigation" class="collapse navbar-collapse bs-navbar-collapse">

    <div id="search" class="pull-right">
        <input tabindex="1" type="text" autocomplete="off" class="form-control" placeholder="Search" id="searchfield" />
        <span class="glyphicon glyphicon-search"></span>
        <div id="search_autocomplete"></div>


    </div>

      <ul class="nav navbar-nav">
        <?php print page_content('header_nav'); ?>
      </ul>

    </nav>
  </div>
</header>
  </div>

  <div id="content" class="well">
    <div class="container">
       <div class="row">
          <div class=" col-md-3 " id="sidecell">
            <div id="sidenav">
                <div id="sidenavcontent">
                <?php $seg = url_segment(0); ?>
                
                 <div class="nav-label-color <?php print "label-".$seg; ?>"></div>
                 
                 <?php $seg_title =  ucwords(str_replace('-', ' ',$seg));
				 if($seg_title == ''){
					$seg_title = "Index"; 
				 }
				 
				  ?>
                 
                  <div id="section-title"><h3><?php print $seg_title; ?></h3></div>
                 
                  <div id="sidenav-menu">
                      <?php print page_content('sidebar'); ?>
                  </div>
                  <div id="select_holder">
                  <div class="row" >
                    <div class="col-xs-2">
                        <label style="padding-top: 5px;">Sections</label>
                    </div>
                    <div class="col-xs-10">
                        <div id="select_container"></div></div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div class=" col-md-9"><div id="main-content"><?php print $content; ?></div></div>
       </div>
    </div>
  </div>

</div>
</body>
</html>