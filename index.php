<?php

if(isset($_SERVER['HTTPS']) and $_SERVER['HTTPS'] == "on"){
    $redirect = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    header("Location: $redirect");
	exit;
}

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

<!--      <link href="<?php print site_url(); ?>assets/ace-editor/api/resources/csses/ace_api.css" rel="stylesheet" type="text/css" />

  <script src="<?php print site_url(); ?>assets/ace-editor/build/src-min/ace.js"></script>
        <script src="<?php print site_url(); ?>assets/ace-editor/build/src-min/ext-static_highlight.js"></script>
-->
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
          <button data-target=".bs-navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="<?php print site_url(); ?>" id="logo">Microweber Docs</a> </div>
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
              <div id="section-title">
                <h3><?php print $seg_title; ?></h3>
              </div>
              <div id="sidenav-menu"> <?php print page_content('sidebar'); ?> </div>
              <div id="select_holder">
                <div class="row" >
                  <div class="col-xs-2">
                    <label style="padding-top: 5px;">Sections</label>
                  </div>
                  <div class="col-xs-10">
                    <div id="select_container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" col-md-9">
          <div id="main-content"><?php print $content; ?>
          <!--  <div  >
              <hr />
              <h4>Leave your comment</h4>
             
            </div>-->
          </div>
          <div class="row" style="padding:20px;"><small class="pull-right" style="color:#AEAEAE;">This documentation is a work in progress. <a style="color:#9D9D9D;" href="<?php print $this_file_link; ?>">Help us by improving this file</a>.</small></div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php

 
 if(isset($_SERVER['REMOTE_ADDR']) and $_SERVER['REMOTE_ADDR'] != '78.90.67.20' and strstr($_SERVER['REMOTE_ADDR'],'192.168') == false):  ?> 
 <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1065179-29']);
  _gaq.push(['_setDomainName', 'microweber.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<script type="text/javascript">
  var GoSquared = {acct: "GSN-395984-X"};
  (function(w){
    function gs(){
      w._gstc_lt = +new Date;
      var d = document, g = d.createElement("script");
      g.type = "text/javascript";
      g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
      var s = d.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(g, s);
    }
    w.addEventListener ? w.addEventListener("load", gs, false) : w.attachEvent("onload", gs);
  })(window);
</script>


<!-- TYXO -->
  <script type="text/javascript">
  <!--
  tyd=document;tyd.write('<a href="http://www.tyxo.bg/?146467" title="Tyxo.bg counter"><img width="1" height="1" border="0" alt="Tyxo.bg counter" src="'+location.protocol+'//cnt.tyxo.bg/146467?rnd='+Math.round(Math.random()*2147483647));
  tyd.write('&sp='+screen.width+'x'+screen.height+'&r='+escape(tyd.referrer)+'"></a>');
  //-->
  </script><noscript><a href="http://www.tyxo.bg/?146467" title="Tyxo.bg counter"><img src="http://cnt.tyxo.bg/146467" width="1" height="1" border="0" alt="Tyxo.bg counter" /></a></noscript>
<!-- / TYXO -->

<?php endif; ?>
</body>
</html>