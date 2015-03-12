## mw.load_module

`mw.load_module` — loads a module into given selector

###Summary

`mw.load_module(name, placeholder, callback, attributes); `


### Return Values

This function makes Ajax call and places the module html into the place-holder element

### Example Options

`mw.load_module('posts','#my_div');`

You can use this function to dynamically load modules by Ajax and create rich user experiences

### Usage
```html
<button onclick="mw.load_module('posts','#placeholder');">Posts</button>
<button onclick="mw.load_module('pages','#placeholder');">Pages</button>
<div id="placeholder"></div>
```

### Usage with attributes and callback

```html
<script>
function load_comments(){
	var params = {}
	params.content_id = 4;
	mw.load_module('comments','#placeholder',my_callback,params);
}
function my_callback(){
	alert('Module is loaded');
}
</script>
<button onclick="load_comments()">Click me</button>
<div id="placeholder"></div>

```

### Load module from sub folder
```html
<button onclick="mw.load_module('users/login','#placeholder');">Show login</button>
<div id="placeholder"></div>
```
 