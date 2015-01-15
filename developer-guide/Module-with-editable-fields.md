Here is a tutorial inpired by this article http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video and this code http://codepen.io/dudleystorey/pen/knqyK by Dudley Storey
 https://twitter.com/dudleystorey


We are going to make a module with a video backgound and editable text. 

It should be pretty simple, as we hve the codepen code. 

### Create the basic files

Create new folder at `userfiles/modules/video_with_text`

Every module needs the following files to work

 
|Filename  | Description|
|--------------|--------------|
|config.php  | this file the info for your module |
|index.php  | this file loads the module is dropped or opened from the frontend  |
|admin.php  | when you open the module settings from the admin or from the live edit, this file is loaded  |
|functions.php  | optional file, it is loaded on system start with the website |
|video_with_text.png  | icon for your module (size 32x32) |

#### config.php

Ctreate a file at `userfiles/modules/video_with_text/config.php`

```php
<?php

$config = array();
$config['name'] = "Video with text";
$config['author'] = "Microweber";
$config['categories'] = "media,content";
$config['position'] = 99;
$config['version'] = 0.1;
$config['ui'] = true;
```


#### admin.php
```html
<?php only_admin_access(); ?>
<?php $video =  get_option('video', $params['id']); ?>

<label>Video url</label>
<input class="mw_option_field mw-ui-field"  name="video"  value="<?php print $video; ?>" />
```


#### index.php

```html
<link rel="stylesheet" href="<?php print $config['url_to_module']; ?>style.css" />
<?php $video =  get_option('video', $params['id']); ?>
<?php 
if($video==false) { 
$video = "//demosthenes.info/assets/videos/polina.mp4";
}
?>
<div  class="bgvid">
  <video autoplay>
    <source src="<?php print $video; ?>" type="video/mp4">
  </video>
  <div class="video_with_text_holder">
    <div class="edit" field="video_text" rel="<?php print $params['id'] ?>">
      <h1>Hello world</h1>
      <p>You can edit this text</p>
    </div>
  </div>
</div>

```

#### style.css 

```css

.bgvid video {
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -100;
	background-size: cover;
}
.video_with_text_holder {
	position: absolute;
	top: 50%;
	right: 30%;
	font-family: Agenda-Light, Agenda Light, Agenda, Arial Narrow, sans-serif;
	font-weight: 100;
	background: rgba(0,0,0,0.3);
	color: white;
	padding:30px;
}

```