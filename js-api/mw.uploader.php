<h2>mw.uploader</h2>
<p>mw.uploader — creates a file uploader</p>
<h3>Summary</h3>
<code class="codettyprint"><code class="language-php">mw.uploader($config);
</code></code>
<h3>Return Values</h3>
<p> <code>Object</code> with the uploaded file data or <code>false</code> if the the file is not up.</p>
<h3>Usage</h3>
<code class="codettyprint"><code class="language-php">&lt;script type=&quot;text/javascript&quot;&gt;
  var uploader = mw.files.uploader({
  filetypes:&quot;images,videos&quot;,
  multiple:false
  });
  $(document).ready(function(){
  
      mw.$(&quot;#mw_uploader&quot;).append(uploader);
          $(uploader).bind(&quot;FileUploaded&quot;, function(obj, data){
          mw.$(&quot;#mw_uploader_loading&quot;).hide();
          mw.$(&quot;#mw_uploader&quot;).show();
          mw.$(&quot;#upload_backup_info&quot;).html(&quot;&quot;);
          alert(data.src);
      });
      
    $(uploader).bind('progress', function(up, file) {  
        mw.$(&quot;#mw_uploader&quot;).hide();
        mw.$(&quot;#mw_uploader_loading&quot;).show();
        mw.$(&quot;#upload_backup_info&quot;).html(file.percent + &quot;%&quot;);
     });
     
    $(uploader).bind('error', function(up, file) {
        mw.notification.error(&quot;The file is not uploaded.&quot;);   
    });
    
 });
&lt;/script&gt; 
&lt;span id=&quot;mw_uploader&quot; class=&quot;mw-ui-btn&quot;&gt;&lt;span class=&quot;ico iupload&quot;&gt;&lt;/span&gt;&lt;span&gt;Upload file&lt;span id=&quot;upload_backup_info&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;
</code></code>
<h4>See also</h4>
<?php print page_content('js-api/_nav/index'); ?>