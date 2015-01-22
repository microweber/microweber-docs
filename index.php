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
    <style>

      .sidebar ul{
        padding-bottom: 20px;
      }

      .sidebar li{
        list-style: none
      }

     .sidebar li a{
       color: #696969;
       font-weight: 400;
       display: block;
       padding: 5px 0 5px 17px;
       position: relative;
     }

     .sidebar{
       padding: 20px 20px 20px 20px;
       margin-right: 30px;
       background: rgba(239, 237, 237, 0.42);
     }

     .sidebar h3{
       color: rgba(71, 71, 71, 0.98);
      font-size: 22px;
      font-weight: 400;
      text-transform: uppercase;

     }
     .page-container{
       border: 1px solid #e5e5e5;
     }

     .page-container a:hover,
     .page-container a:focus{
       color: #4494c7;
     }

     .page-container a.active{
       color: #4494c7;
       text-decoration: none;
       font-weight: bold;
     }
     .container{
       padding-top: 30px;
     }
     .hljs{
       padding: 25px;
     }

     .container .content{

       font-size: 19px;
     }



     .container .content h1 + pre,
     .container .content h2 + pre,
     .container .content h3 + pre,
     .container .content h4 + pre,
     .container .content h5 + pre,
     .container .content h1 + p,
     .container .content h2 + p,
     .container .content h3 + p,
     .container .content h4 + p,
     .container .content h5 + p{
       margin-bottom: 50px;
     }
.sidebar li a.active:before {


    content: "Ň";
    font-size: 14px;
    letter-spacing: 2px;
    position: absolute;
    top: 9px;
    left: 2px;
    font-family: Microweber;
}


.content > h2:first-child{
  padding-bottom: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid #eee;
}

    </style>

</head>
<body>
<div class="header"><?php require('header_nav.php'); ?></div>
<div class="page-container" style="background-color: white;">

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

   $(".content table").addClass("mw-ui-table");
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});



    $(window).bind('load resize', function(e){

      $(".page-container").css('minHeight', $(this).height() - $(".page-container").offset().top );

    })
});

</script>
<?php require('stats.php'); ?>
</body>
</html>
        