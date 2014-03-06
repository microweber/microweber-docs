
$(document).ready(function(){

var html = '<input class="runner_btn" type="button" value="run" onclick="runcode(this)" />';
html = html+ '<pre class="runner_output" style="display:none;"></pre>'
 $('.runner').after(html)


});

function runcode(el){
	var this_el  = $(el); 
	var $el  = $(el).prev('.runner'); 
	var runner_output  = $(el).next('.runner_output'); 
	var code = $el.text();	
	//console.log(code);
		//console.log($el);
		
	$.post( "http://console.microweber.com/php-console", { code: code,js: 1 })
  .done(function( data ) {
   // alert( "Data Loaded: " + data );
   runner_output.show();
   runner_output.html(data);
   
   
   
  });	
		$el.attr('spellcheck',false);	
	$el.attr('contenteditable',true);	
	if(typeof hljs !== "undefined"){
		hljs.highlightBlock($el[0])
	}
	
	
	 
	//   $('<iframe src="http://console.microweber.com/php-console"></iframe>').after($el);
	
		

}