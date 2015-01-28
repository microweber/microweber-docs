#mw.colorPicker





``` 
<script>

$(window).load(function(){
   mw.colorPicker({
    element:'#color_picker',
    position:'bottom-left',
    onchange:function(color){
      alert(color);
    }
  });
  
});

</script>


<input id="color_picker" />
 
```   





