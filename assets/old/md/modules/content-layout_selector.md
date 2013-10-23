##module: content/layout_selector
 

##Description
    Displays a preview of the page in a small frame
 

##Params and Database fields  
You use this fields to store and structure your content

|parameter  | description |  optional value|
|--------------|--------------|--------------|
| page-id       | if set it will load preview with the existing page content | any existing content id
| inherit-from       | if set it will do the same as above, but with empty content | any existing content id
| site-template       | set the template for the preview | template folder name
| layout-file       |  loads a layout from a template |  path to the layout file in the template folder
| data-small       |  if set it will load just a small preview |   *true*
| autoload       |  if set it will load the iframe automatically |   *true*
| content-type       | if set shows layouts for the content type | *page*, *post*,*product*, etc..

 



inherit_from


##Examples
```php
<module type="content/layout_selector" />
``` 
 