# mw.uploader

mw.uploader(options); 

## Return Values

Object with the uploaded file data or false if the the file is not up.

##Usage

```
<script type="text/javascript">
 
$(document).ready(function(){
  
 var uploader = mw.uploader({
    filetypes:"images,videos",
    multiple:false,
    element:"#mw_uploader"
  });
  

  $(uploader).bind("FileUploaded", function(event, data){
          mw.$("#mw_uploader_loading").hide();
          mw.$("#mw_uploader").show();
          mw.$("#upload_info").html("");
          alert(data.src);
      });
      
    $(uploader).bind('progress', function(up, file) {  
        mw.$("#mw_uploader").hide();
        mw.$("#mw_uploader_loading").show();
        mw.$("#upload_info").html(file.percent + "%");
     });
     
    $(uploader).bind('error', function(up, file) {
        mw.notification.error("The file is not uploaded.");   
    });
    
 });
</script> 
<span id="mw_uploader" class="mw-ui-btn">
<span class="ico iupload"></span>
<span>Upload file<span id="upload_info"></span>
</span>
</span>
```