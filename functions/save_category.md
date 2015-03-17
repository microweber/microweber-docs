## save_category

save_category — saves a category

### Summary

    save_category($params);

### Return Values

`Integer` with the saved category id or `false` if the category is not saved

### Usage

    $params = array(
    'title' => 'Test Category 1',
    'parent_page' => $parent_page
    );
    //saving
    $category_id = save_category($params);
    print $category_id;

### Parameters

You can pass parameters as string or as array.

<table class="table table-striped table-hover"><thead><tr><th>parameter</th><th>description</th><th>usage</th></tr></thead><tbody><tr><td>id</td><td>the id of the category</td><td>save_category('id=3&title=Test Category 1');</td></tr><tr><td>parent_page</td><td>the id of the parent page to add the category to</td><td></td></tr><tr><td>title</td><td>Title of the category</td><td></td></tr><tr><td>content</td><td>The html content saved in the database</td><td></td></tr><tr><td>description</td><td>Description used for the content list</td><td></td></tr><tr><td>position</td><td>The order position</td><td></td></tr><tr><td>users_can_create_content</td><td>flag if users can add content in this category</td><td>"n" or "y"</td></tr></tbody></table>

 