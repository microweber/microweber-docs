<?php require('one.php'); ?>
        <?php

if(is_ajax()){
  print page_content(); exit;
}
$time = 100;
?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php print page_title(); ?></title>
        <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700,400italic,700italic' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Nunito:400,300,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Fira+Mono:400,700' rel='stylesheet' type='text/css'>        <link href="<?php print site_url(); ?>assets/mw-ui/default.css" rel="stylesheet">
        <link href="<?php print site_url(); ?>assets/mw-ui/ui.css" rel="stylesheet">
        <link href="<?php print site_url(); ?>assets/docs.css" rel="stylesheet">
        <link href="<?php print site_url(); ?>assets/js/highlight/styles/github.css" rel="stylesheet">
        <script src="<?php print site_url(); ?>assets/js/highlight/highlight.pack.js"></script>
        </head>
        <body>
        <div class="header">
          <?php require('header_nav.php'); ?>
        </div>
        <div class="page-container" style="background-color: white;">
          <div class="mw-ui-row">
            <div class="mw-ui-col sidebar-col" style="width: 280px;">
              <div class="sidebar">
              <div class="sidebar-content"><?php print page_nav(); ?></div>
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
        <script src="<?php print site_url(); ?>assets/js/anchorific.min.js"></script> 
        <script>







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
  
  
  
  $(".sidebar ul").find('a.active').parents('ul:first').parent().addClass('chapter-active');
  
  
  
  
  
  
  
  
  $('.content').anchorific({
    navigation: '.anchorific', // position of navigation
    speed: 200, // speed of sliding back to top
    anchorClass: 'anchor', // class of anchor links
    anchorText: '#', // prepended or appended to anchor headings
    top: '.top', // back to top button or link class
    spy: true, // scroll spy
    position: 'append', // position of anchor text
    spyOffset: 0 // specify heading offset for spy scrolling
});
  
  
  
  
  
 //$(".sidebar ul").find('a.active').parents('ul').html('zazaza'); 
  

 $(window).on("popstate", function() {

   // _go();
 });

if(!!history.pushState){
  $(".sidebar a").bind("click", function(){
    if(!$(this).hasClass('active') && !$(this).attr('no-anim')){
        //history.pushState({}, '', this.href);
        //_go();
		//return false;
    }
      
  });
}



  $(window).bind('load resize', function(e){

   // $(".page-container").css('minHeight', $(this).height() - $(".page-container").offset().top );

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
        