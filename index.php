<?php require('one.php'); ?><?php

if(is_ajax()){
  print page_content(); exit;
}

?><!DOCTYPE html>
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
       msssargin-bottom: 50px;
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

<?php $time = 600; ?>

.content{
  -webkit-transition: all <?php print ($time/1000); ?>s;
  -moz-transition: all <?php print ($time/1000); ?>s;
  -ms-transition: all <?php print ($time/1000); ?>s;
  -o-transition: all <?php print ($time/1000); ?>s;
  transition: all <?php print ($time/1000); ?>s;
  position: relative;
}
.content.loading{
  -webkit-transform: translateY(30px);
  -moz-transform: translateY(30px);
  -ms-transform: translateY(30px);
  -o-transform: translateY(30px);
  transform: translateY(30px);
  opacity: 0;
}
.hljs-comment{

}
#autocomplete{
  display: none;
}


.not-ready {
 text-align:center;
 font-size:14px;
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
<div class="not-ready">The documentation is under development. <a style="" href="https://github.com/microweber/microweber-docs/edit/master/<?php print url_path(); ?>">Help us by editing this page</a>.</div>

<script src="<?php print site_url(); ?>assets/jquery.min.js"></script>

<script >







_high = function(){
    $(".content table").addClass("mw-ui-table");
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
}
_going = false;
_go = function(){
    if(_going === true) { return false; }
    _going = true;
    $(".content").addClass('loading');
    time1 = new Date().getTime();
    $.post(window.location.href, function(data){
      time2 = new Date().getTime();
       $(".sidebar a").removeClass('active');
       var harr = window.location.href.split('/');
       $(".sidebar a[href='"+harr[harr.length-1]+"']").addClass('active');
       $("html,body").animate({scrollTop:0});
       var final = <?php print $time; ?> - (time2 - time1) ;
       if(final < 0){
         $(".content").html(data);
         $(".content").removeClass('loading');
         _high();
       }
       else{
        setTimeout(function(){
          $(".content").html(data);
          $(".content").removeClass('loading');
          _high();
        }, final);
       }

    }).always(function(){
      _going = false;
    });
}

$(document).ready(function(){
  _high();

 $(window).on("popstate", function() {

   // _go();
 });

if(!!history.pushState){
  $(".sidebar a").bind("click", function(){
    if(!$(this).hasClass('active') && !$(this).attr('no-anim')){
        history.pushState({}, '', this.href);
        _go();
		return false;
    }
      
  });
}



  $(window).bind('load resize', function(e){

    $(".page-container").css('minHeight', $(this).height() - $(".page-container").offset().top );

  })
  $("#searchbtn").bind("mousedown", function(e){
     if(e.target.nodeName != 'INPUT' && document.getElementById('searchfield') === document.activeElement){
        e.preventDefault();
     }
  });
  $("#searchbtn").bind("click", function(e){
    if(e.target.nodeName != 'INPUT'){
      $("#searchfield").focus();
    }
  });

  sint = null;
  oldvalue = '';
  $( "#searchfield" ).bind('keyup change paste', function(e){
    clearTimeout(sint);
    if(e.type == 'keyup'){
       if (e.keyCode == '40') {
        var curr = $(".search-results-list li.hover");
        if(curr.length == 0){
          var next = $(".search-results-list li:first");
        }
        else{
          var next = $(".search-results-list li.hover").next('li');
          if(next.length == 0){
            var next = $(".search-results-list li:first");
          }
        }
       }
       else if (e.keyCode == '38') {
        var curr = $(".search-results-list li.hover");
        if(curr.length == 0){
          var next = $(".search-results-list li:last");
        }
        else{
          var next = $(".search-results-list li.hover").prev('li');
          if(next.length == 0){
            var next = $(".search-results-list li:last");
          }
        }
       }

       if(e.keyCode == '38' || e.keyCode == '40'){
         curr.removeClass('hover')
         next.addClass('hover')
       }

       if (e.keyCode == '13' && $(".search-results-list li.hover").length > 0) {
        window.location.href = $(".search-results-list li.hover a").attr("href");
       }
    }
    if(this.value == oldvalue){
      return false;
    }
    oldvalue = this.value;
    if(this.value.replace(/\s/g, '') == ''){
      $("#autocomplete").hide();
      return false;
    }
    sint = setTimeout(function(){
        $.post("<?php print site_url(); ?>search.php", {q:$( "#searchfield" ).val()}, function(data){
            $("#autocomplete").html(data);
             $("#autocomplete").show();
        });
    }, 700);
  });

  $(document).bind('click', function(e){
     if($(e.target).parents("#autocomplete,#searchbtn").length == 0){
          $("#autocomplete").hide();
     }
  });



});

</script>
<?php require('stats.php'); ?>
</body>
</html>
        