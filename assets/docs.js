
$(document).ready(function(){

 $("#sidenav-menu  li a.active").parents("li").eq(1).addClass("current");
 
 
/*var active_li = document.querySelector("#sidenav-menu  li a.active");
 
if(active_li !== null){
active_li.scrollIntoView()	
}*/

  $('pre code').each(function(i, e) {
	 
	    hljs.highlightBlock(e)
	  //make_ace_code_editor(e);
	  });
	  
	  
	  
	  
	   $('pre code.runner').each(function(i, e) {
 $(this).click(function(){ 
		 var a = $(this).attr('contenteditable');
		
		 if(a != true && a != 'true'){	
		 var code = $(this).text();
		 $(this).text(code);
			 
		  	$(this).attr('spellcheck',false);	
	        $(this).attr('contenteditable',true);	
			$(this).addClass('no-highlight');	
			
			
			//hljs.highlightBlock(this)
		 }
		    
		  
		  });

 });
 
 
 
 
 
 
  $("#sidenav .nav-title").click(function(){
    //$(this).next("ul").toggle();
    //return false;
  });


  var select = document.createElement('select');
  $(select).bind("change", function(){
   window.location.href = this.value;
  })
  select.id = 'sections-mobile-menu';
  select.className = 'form-control';
  var html = '';
  $("#sidenav-menu .nav-title").each(function(){
    var el = $(this);
    var curr = '<optgroup label="'+el.text()+'">';
    $('a', el.next("ul")[0]).each(function(){
        var selected = $(this).hasClass('active')?'selected' : '';
        curr+='<option '+ selected +' value="'+$(this).attr("href")+'">'+$(this).text()+'</option>';
    });
    curr+='</optgroup>';
    html+=curr;
  });
  select.innerHTML = html;

  $("#select_container").append(select);




  $(window).bind("load resize", function(){
     var formula_sidebar = $(window).height() - $("#header").height() - $("#section-title").outerHeight() - 40;
     var formula_content = $(window).height() - $("#header").height() - 40;
     $("#sidenav-menu").css("height", formula_sidebar);
     $("#main-content").css("minHeight", formula_content);
     if(window.outerWidth < 1009){
         $("#section-title").hide();
         $("#sidenav-menu").hide();
         $("#select_holder").show();
     }
     else{
        $("#section-title").show();
        $("#sidenav-menu").show();

        $("#select_holder").hide();
     }
  });
  $(window).bind("load scroll resize", function(){
    if($(window).scrollTop()>$("#content").offset().top){
        var n = $("#sidenav")
        n.addClass("fixed").width(n.parent().width());
    }
    else{
       $("#sidenav").removeClass("fixed").width('auto');
    }
  });

  $("#search").hover(function(){$(this).addClass('hover')}, function(){$(this).removeClass('hover')})

  isSearching = false;
  sTime = null;
  $("#searchfield").bind("keydown", function(e){
    if(e.keyCode === 38){e.preventDefault()}
    if(e.keyCode === 40){e.preventDefault()}
  });
  $("#searchfield").bind("keyup", function(e){
    var k = e.keyCode;

    if(k!==37 && k!==38 && k!==39 && k!==40 && k!=13){
      clearTimeout(sTime);
      var _this=this;
      sTime = setTimeout(function(){
        if(!isSearching){
          if(_this.value.replace(/\s+/g, '') == ''){
             $("#search_autocomplete").hide()
            return false;
          }
          isSearching = true;
          $("#search").addClass("searching");
          $.post(SEARCH_URL, {q:_this.value}, function(data){
              $("#search_autocomplete").html(data).show().scrollTop(0);
              isSearching = false;
              $("#search").removeClass("searching");
          });
        }
      }, 600);
    }
    else{
      if($("#search_autocomplete li a").length>0){
        var active = $("#search_autocomplete li a.hover");
        if(k===38){
            if(active.length !== 0){
               var next = active.parent().prev("li").length>0?active.parent().prev("li").find("a"):$("#search_autocomplete a:last");
               active.removeClass("hover")
               next.addClass("hover")
            }
            else{
                $("#search_autocomplete a:last").addClass("hover")
            }
        }
        else if(k===40){
            if(active.length !== 0){
               var next = active.parent().next("li").length>0?active.parent().next("li").find("a"):$("#search_autocomplete a:first");
               active.removeClass("hover");
               next.addClass("hover");
			   /*
               var parent_box = next.parent().parent().parent();
			   var boxpos = parent_box.innerHeight();
			   var rowpos = next.position();
			   if(rowpos.top > boxpos){
                    $("#search_autocomplete").animate({scrollTop: $("#search_autocomplete").scrollTop() - $("#search_autocomplete").offset().top + $(next).offset().top})
			   }*/
            }
            else{
                $("#search_autocomplete a:first").addClass("hover")
            }
        }
        else if(k===13 && $("#search_autocomplete li a.hover").length>0){
           window.location.href = $("#search_autocomplete li a.hover").attr("href");
        }
      }

    }

  }).blur(function(){

  }).focus(function(){
    $(this).addClass('xfocus');
    if(this.value.replace(/\s+/g, '') != ''){
           $("#search_autocomplete").show()
    }
  });

  $(document.body).mousedown(function(){
     if(!$("#search").hasClass("hover") ){
           $("#search_autocomplete").hide();
           $("#searchfield").removeClass('xfocus');
     }
  })



});






function make_ace_code_editor(el){
	
 
    var editor = ace.edit(el);
   
     editor.setTheme("ace/theme/twilight");
 	
	
}