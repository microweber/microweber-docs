 # Tabs Navigations
 


```
<div id="tabsnav">
    <div class="mw-ui-btn-nav mw-ui-btn-nav-tabs">
        <a href="javascript:;" class="mw-ui-btn active tabnav">Home</a>
        <a href="javascript:;" class="mw-ui-btn tabnav">About</a>
        <a href="javascript:;" class="mw-ui-btn tabnav">Contact</a>
    </div>
    <div class="mw-ui-box">
      <div class="mw-ui-box-content tabitem">Home - Lorem Ipsum </div>
      <div class="mw-ui-box-content tabitem" style="display: none">About - Lorem Ipsum </div>
      <div class="mw-ui-box-content tabitem" style="display: none">Contact - Lorem Ipsum </div>
    </div>
</div>


<script>
    $(document).ready(function(){
       mw.tabs({
          nav:'#tabsnav  .tabnav',
          tabs:'#tabsnav .tabitem'
       });
    });
</script>

```        