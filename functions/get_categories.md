## get_categories

get_categories — returns array of categories or false

### Summary

    get_categories($params);

### Return Values

`Array` with categories or `false` if the categories are not found.

### Usage

    //get main categories for the content
    $categories = get_categories('rel=content&parent_id=0&orderby=position asc');

    //you can use the categories functuonality to for your custom data with the rel parameter
    $modules_categories = get_categories('rel=modules&parent_id=0');

### Parameters

You can pass parameters as string or as array.

<table class="table table-striped table-hover"><thead><tr><th>parameter</th><th>description</th><th>usage</th></tr></thead><tbody><tr><td>id</td><td>the id of the category</td><td>get_categories('id=3');</td></tr><tr><td>parent_id</td><td>the id of the parent category</td><td>get_categories('parent_id=0');</td></tr><tr><td>rel</td><td>the category relation to other db table</td><td>get_categories('rel=content');</td></tr><tr><td>rel_id</td><td>the item from the related db table</td><td>get_categories('rel=content&rel_id=5');&nbsp;gets categories for the content with id 5</td></tr><tr><td>created_by</td><td>get by author id</td><td>get_categories('created_by=1');</td></tr><tr><td>created_on</td><td>the date of creation</td><td>strtotime&nbsp;compatible date</td></tr><tr><td>updated_on</td><td>the date of last edit</td><td>strtotime&nbsp;compatible date</td></tr><tr><td>title</td><td>Title of the category</td><td></td></tr><tr><td>content</td><td>The html content saved in the database</td><td></td></tr><tr><td>description</td><td>Description used for the content list</td><td></td></tr><tr><td>position</td><td>The order position</td><td></td></tr><tr><td>users_can_create_content</td><td>flag if users can add content in this category</td><td>"n" or "y"</td></tr></tbody></table>

#### See also

<!--?php print page_content('functions/_nav/categories'); ?-->