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
        <link href='http://fonts.googleapis.com/css?family=Fira+Mono:400,700' rel='stylesheet' type='text/css'>


        <link href="<?php print site_url(); ?>ui/1.2.9/css/default.css" rel="stylesheet">
        <link href="<?php print site_url(); ?>ui/1.2.9/css/ui.css" rel="stylesheet">
        <script src="<?php print site_url(); ?>ui/1.2.9/api/apijs_combined.js"></script>


        <link href="<?php print site_url(); ?>assets/docs.css" rel="stylesheet">
             <style>

/*
                pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#101010;background:#fff}.hljs ::selection,.hljs::selection{background-color:#d0d0d0;color:#101010}.hljs-comment{color:#b0b0b0}.hljs-tag{color:#000}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#101010}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#ff0086}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#fd8900}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#aba800}.hljs-strong{font-weight:700;color:#aba800}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#00c918}.hljs-built_in,.hljs-doctag,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp{color:#1faaaa}.hljs-attribute,.hljs-function .hljs-title,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#3777e6}.diff .hljs-meta,.hljs-keyword,.hljs-template-tag,.hljs-type{color:#ad00a1}.hljs-emphasis{color:#ad00a1;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#c63}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}

             */

.hljs{display:block;overflow-x:auto;padding:1em;background:#fafafa;color:#37474f;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;text-size-adjust:100%;font:300 100%/1 Roboto Mono,monospace;font-size:14px}.hljs-section,.hljs>::selection{background-color:#d6edea}.hljs-comment{color:#616161;font-style:italic}.hljs-meta,.hljs-regexp,.hljs-selector-tag,.hljs-tag{color:#9c27b0}.hljs-string,.hljs-subst{color:#0d904f}.hljs-number,.hljs-template-variable,.hljs-variable{color:#80cbc4}.hljs-attribute,.hljs-keyword,.hljs-name,.hljs-type{color:#3b78e7}.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-function>.hljs-title,.hljs-link,.hljs-symbol,.hljs-title{color:#6182b8}.hljs-params{color:#d81b60}.hljs-addition{color:#3b78e7}.hljs-addition,.hljs-deletion{display:inline-block;width:100%}.hljs-deletion{color:#e53935}.hljs-selector-class,.hljs-selector-id{color:#8796b0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}

             </style>
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
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
  $(".sidebar ul > li > ul > li > ul").find('a').parent().addClass('sub-chapter-item');
  $(".sidebar ul > li > ul > li > ul").find('li').parent().addClass('sub-chapter');
  $(".sidebar ul > li > ul > li > ul").find('li').parent('ul').prev().addClass('sub-chapter-title');

  $(".sidebar ul > li > ul > li > ul").find('a.active').parent().addClass('sub-chapter-active');
  $(".sidebar ul > li > ul").find('li > ul a.active').parent().parent().parent().parent().parent().addClass('parent-chapter-active');


  $(".content a").filter(function() {

    return this.hostname && this.hostname !== location.hostname;
}).addClass('external').attr('target',"_blank");


  // $('.content h1:first-child').after('<div class="anchorific"></div>')


  $('.content').anchorific({
    navigation: '.anchorific', // position of navigation
    speed: 200, // speed of sliding back to top
    anchorClass: 'anchor', // class of anchor links
    anchorText: '#', // prepended or appended to anchor headings
    top: '.top', // back to top button or link class
    //spy: true, // scroll spy
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


const _copy = (value) => {
    const tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    mw.notification.success(mw.lang('Code Copied'));
}

addEventListener('load', () => {
    Array.from(document.querySelectorAll('.mw-demo')).forEach(el => {
        var preview = document.createElement('div');
        var source = document.createElement('pre');
        var code = document.createElement('code');
         while(el.firstChild) {
             preview.append(el.firstChild)
         }
         el.append(preview);

         var html = preview.innerHTML;
         var language = html.indexOf('<' !== -1) ? 'php' : 'js';




        code.innerHTML = html.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');

        source.append(code);
         el.append(source);
         var cp = document.createElement('span');
          cp.className = 'mw-doc-demo-copy';
         cp.innerHTML = '<svg width="20" height="20" on="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"></path></g></svg>';

        cp.addEventListener('click', function () {
            _copy(preview.innerHTML.trim())
        })
        setTimeout(function (){

            source.append(cp);
            hljs.highlightElement (code, { language });
        }, 10)
    })
})


</script>
        <?php require('stats.php'); ?>
        </body>
        </html>
