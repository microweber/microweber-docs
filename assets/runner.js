
$(document).ready(function(){

var html = '<input class="runner_btn btn-sm btn btn-default" type="button" value="Run" onclick="runcode(this)" />';
html = html+ '<pre class="runner_output" style="display:none;"></pre>'
 $('.runner').after(html)


});

function runcode(el){
	var this_el  = $(el); 
	var $el  = $(el).prev('.runner'); 
	var runner_output  = $(el).next('.runner_output'); 
	var code = $el.text();	
	
	$el.removeAttr('contenteditable');
	
	
 	
	 
	
	var proc = $el.hasClass('proc');	
	//console.log(code);
		//console.log($el);
		
		var is_hmtl = $el.hasClass('html');
		if(is_hmtl == true){
				code = "?>"+code;
				
			}
		
		if(proc == true){
			
			
			
			
			$('.code_runner_iframe').remove();
			$('.code_runner_iframe_form').remove();
			$('.runner_output').hide();
			var rand = Math.floor((Math.random()*1000)+1);
			$('<iframe />');  // Create an iframe element
			$('<iframe />', {
				class: 'code_runner_iframe',
				name: 'code_runner'+rand,
				id: 'code_runner'+rand
				
			}).appendTo(runner_output);
			
			 
			
			  $(runner_output).after('<form class="code_runner_iframe_form"  action="http://console.microweber.com/php-console" method="post"  target="'+'code_runner'+rand+'"  id="iframe_form_'+'code_runner'+rand+'"><input type="hidden" name="process" value="1" /><input type="hidden" name="embed_id" value="code_runner" /><input type="hidden" name="xxxxxcode" value="" /><textarea name="code">'+code+'</textarea><input type="hidden" name="js" value="1" /></form>');
	   
	  var form_id = 'iframe_form_'+'code_runner'+rand;
	   $('#'+form_id).submit();
			
			runner_output.show();
			 
			
			
		} else {
				$.post( "http://console.microweber.com/php-console", { code: code,js: 1 })
				  .done(function( data ) {
				   // alert( "Data Loaded: " + data );
				   runner_output.show();
				   runner_output.html(data);
				   
				   
				   
				  });	
		}
		
		
		
		
		

		$el.attr('spellcheck',false);	
	$el.attr('contenteditable',true);	
	if(typeof hljs !== "undefined"){
		//hljs.highlightBlock($el[0])
	}
	
	
	 
	//   $('<iframe src="http://console.microweber.com/php-console"></iframe>').after($el);
	
		

}