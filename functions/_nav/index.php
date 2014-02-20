












<script>

String.prototype.contains = function(a) {
    return !!~this.indexOf(a);
  };

GS = [];


$(document).ready(function(){

$("#page-content-body .subnav a").each(function(){
  var t = $(this).text();
  var keys = t.toLowerCase() + " " + t.toLowerCase().split("_").join(" ");
  GS.push({keys:keys, toshow:t, url:this.href});
});


StR = 0;
StRk = null;

$(document.querySelector("#page-content-body .subnav").children).each(function(i){
    if(i%2 === 0){
        StRk = $(this);
        StR = StRk.height();
    }
    else{
        StR>$(this).height()?$(this).height(StR):StRk.height($(this).height());
        StR = 0;
        StRk = null;
    }
});



$(".mw-search input").keyup(function(e){
    var val = $.trim(this.value.toLowerCase());
    var val = val.replace(/ +(?= )/g,'');
    if(val != ''){
            var l = GS.length,
            i = 0,
            html = '';
        for( ; i<l; i++){
            var item = GS[i];
            if(item.keys.contains(val)){
              html += '<a href="' + item.url +'">' + item.toshow + '</a>';
            }
        }
        if(html!=''){
          $(".mw-search-list").html(html);
        }
        else{
           $(".mw-search-list").html("<span class='noresults'>No results found for <b>" + val+"</b></span>");
        }
        $(".mw-search-list").show();
    }
    else{
       $(".mw-search-list").hide();
    }
})


});

</script>




<div class="functions-refference">


 <div class="main-title-wrap">

      <h1 class="main-title">


       <span class="ticon-functions"></span>

        Functions Reference

      </h1>


      </div>



<form action="" method="post" id="mainsearch">




     <div class="mw-search">

        <input type="text" value="" placeholder="Search Functions" class="form-control input-lg" /><div class="mw-search-list"></div>


        <span class="glyphicon glyphicon-search" style=""></span>

     </div>





  </form>





    <?php print page_content('functions/_nav/functions'); ?>
</div>