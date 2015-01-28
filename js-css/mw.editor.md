#mw.editor

mw.editor - loads WYSWYG editor at a selector

##Summary

mw.editor(selector); 

##Usage
```
<button onclick="mw.editor('#some_element')">Edit element</button>
<div id="some_element">Some element</div>
```



```
<script>
my_editor = mw.editor('#some_element');
editor_value = my_editor.value
alert(editor_value);
</script>
```
