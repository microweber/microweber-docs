# REST API


You can use the HTTP api to comunicate with the backend. This allows you to build external applications or save and get data via AJAX


## Adding API endpoint

You can add new api endpoint with the [api_expose](../functions/api_expose.md "api_expose") and [api_expose_admin](../functions/api_expose_admin.md "") 

*Example* `userfiles/modules/my_module/functions.php`
```php
api_expose('do_stuff');
function do_stuff($params=false){
var_dump($params);
}

api_expose_admin('do_admin_stuff');
function do_admin_stuff($params=false){
var_dump($params);
}
```

This will open public API endpoint at `example.com/api/do_stuff` and admin API endpoint at `example.com/api/do_admin_stuff`


# Getting available API endpoints

You can get all existing endpoints as array

```php
var_dump(api_index());
```

# List of some available API functions

* add_content_to_menu
* add_new_menu
* api_index
* captcha
* category/delete
* category/save
* category_link
* category_tree
* checkout
* checkout_confirm_email_test
* checkout_ipn
* clearcache
* content_categories
* content_link
* content_parents
* content_title
* create_media_dir
* create_media_dir
* current_template_save_custom_css
* delete_category
* delete_client
* delete_content
* delete_form_entry
* delete_forms_list
* delete_log_entry
* delete_media
* delete_media
* delete_media_file
* delete_menu_item
* delete_module_as_template
* delete_order
* delete_user
* edit_menu_item
* empty_cart
* forms_list_export_to_excel
* get_categories
* get_category_by_id
* get_category_children
* get_category_items
* get_content
* get_content_admin
* get_content_by_id
* get_content_children
* get_content_field_draft
* get_page_for_category
* get_pages
* get_posts
* get_products
* install_module
* is_logged
* logout
* mark_comments_as_old
* media/delete_media_file
* media/upload
* menu_delete
* notifications_manager/delete
* notifications_manager/mark_all_as_read
* notifications_manager/read
* notifications_manager/reset
* page_link
* pages_tree
* pixum_img
* pixum_img
* post_comment
* post_form
* post_link
* remove_cart_item
* reorder_categories
* reorder_media
* reorder_media
* reorder_menu_items
* reorder_modules
* save_category
* save_content
* save_content_admin
* save_edit
* save_form_list
* save_language_file_content
* save_media
* save_media
* save_module_as_template
* save_option
* save_user
* send_lang_form_to_microweber
* social_login_process
* stats_image
* system_log_reset
* template/print_custom_css
* thumbnail_img
* thumbnail_img
* uninstall_module
* update_cart
* update_cart_item_qty
* update_order
* upload
* upload
* upload_progress_check
* upload_progress_check
* user_login
* user_register
* user_reset_password_from_link
* user_send_forgot_password
* user_social_login

