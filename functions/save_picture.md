## save_picture

save_picture - Saves a picture in the database

### Summary

    save_picture($params);

### Usage

Add a picture to a post

    $picture = array(
    'content-id'=>3,
    'title'=>"My new pic",
    'src'=> "http://lorempixel.com/400/200/"
    );
    $saved_pic_id = save_picture($picture);

    print "Picture ID saved: ".$saved_pic_id;

    $picture_data = get_picture_by_id($saved_pic_id);

    $src = $picture_data['filename'];
    $title = $picture_data['title'];
    print "<img src='".$src."' alt='".$title."'  />";

 