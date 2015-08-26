 # Tabs Navigations
 


```
<div id="tabsnav">
    <div class="mw-ui-btn-nav mw-ui-btn-nav-tabs">
        <a href="javascript:;" class="mw-ui-btn active">Home</a>
        <a href="javascript:;" class="mw-ui-btn">About</a>
        <a href="javascript:;" class="mw-ui-btn">Contact</a>
    </div>
    <div class="mw-ui-box">
      <div class="mw-ui-box-content">Home - Lorem Ipsum </div>
      <div class="mw-ui-box-content" style="display: none">About - Lorem Ipsum </div>
      <div class="mw-ui-box-content" style="display: none">Contact - Lorem Ipsum </div>
    </div>
</div>


<script>
    $(document).ready(function(){
       mw.tabs({
          nav:'#tabsnav .mw-ui-btn-nav-tabs a',
          tabs:'#tabsnav .mw-ui-box-content'
       });
    });
</script>

```        