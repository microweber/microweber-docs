# mw.require

mw.require - loads Javascript or CSS file

## Summary

`mw.require(url, in_head);` This function is useful if you want to dynamically load external files in your modules.

### Parameters
| parameter  | description  | 
|---|---|
|`url`| (string) url of the script to load|   
|`in_head`|if set to true it will load the files in the site `<head>` and will not replace them on module reload|   



 

### Example usage
```
<script>
mw.require("url_to.js");
mw.require("url_to.css");
</script>
```

#### Usage inside your module
```
<script>
mw.require("<?php print $config['url_to_module']; ?>css/style.css", true);
</script>
```

 