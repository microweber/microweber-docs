## delete_content

delete_content — Deletes a content

### Summary

    delete_content(array $params)

### Description

This function will mark content item as deleted and can put in in the trash.

### Return Values

`Array` with the deleted content ids or `false` if the content is not deleted

### Usage

#### Mark content as deleted

    $to_delete = array('id' => $item['id']);
    $delete = delete_content($to_delete);

#### Undelete content

    $to_undelete = array('id' => $item['id'], 'undelete' => true);
    $delete = delete_content($to_undelete);

#### Deletes content item forever

    $to_delete = array('id' => $item['id'], 'forever' => true);
    $delete = delete_content($to_delete);

