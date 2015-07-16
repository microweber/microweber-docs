## delete_media

delete_media — Deletes a media

### Summary

    delete_media(array $params)

### Description

This function will delete media item from the database

#### Delete media

    $to_delete = array('id' => 1);
    $delete = delete_media($to_delete);
