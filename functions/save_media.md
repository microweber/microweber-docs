## save_media

save_media - Saves a media in the database

### Summary

    save_media($params);

### Usage

Add a picture to a post
```php
$picture = array(
    'rel_type'=>'content',
    'rel_id'=>3,
    'title'=>"My new pic",
    'media_type'=>"picture",
    'src'=> "http://lorempixel.com/400/200/"
);
$saved_pic_id = save_media($picture);

print "Picture ID saved: ".$saved_pic_id;

$picture_data = get_media_by_id($saved_pic_id);

$src = $picture_data['filename'];
$title = $picture_data['title'];
print "<img src='".$src."' alt='".$title."'  />";
```
 