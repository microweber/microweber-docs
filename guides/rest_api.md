# REST API


You can use the HTTP api to comunicate with the backend. This allows you to build external applications or save and get data via AJAX


## Adding API endpoint

You can add new api endpoint with the [api_expose](../functions/api_expose.md "api_expose") and [api_expose_admin](../functions/api_expose_admin.md "") 

| Function |  |  
|---|---|
| `api_expose` | makes public api endpoint |  
| `api_expose_admin` | makes api endpoint available for admin users |  
| `api_expose_user` | makes api endpoint available for logged in users |  


*Example* `userfiles/modules/my_module/functions.php`
```php

// example.com/api/do_stuff
api_expose('do_stuff');
function do_stuff($params=false){
var_dump($params);
}

// example.com/api/do_admin_stuff
api_expose_admin('do_admin_stuff');
function do_admin_stuff($params=false){
var_dump($params);
}

// example.com/api/another_endpoint
api_expose('another_endpoint', function($params){
  var_dump($params);
});

// example.com/api/another_endpoint_for_admin
api_expose_admin('another_endpoint_for_admin', function($params){
  var_dump($params);
});

// example.com/user/what_is_my_session_id

api_expose_user('user/what_is_my_name', function($params){
    return mw()->user_manager->nice_name();
});
```

This will open public API endpoint at `example.com/api/do_stuff` and admin API endpoint at `example.com/api/do_admin_stuff`





# Getting available API endpoints

You can get all existing endpoints as array

```php
var_dump(api_index());
```

# Current API Endpoints
This is all current Microweber API endpoint. 
Please note that some of them can be changed.
To see the exact endpoints, visit http://localhost/api/api_index

```php
[ 
   "api_index",
   "content_link",
   "save_content_admin",
   "template\/print_custom_css",
   "cart_sum",
   "checkout",
   "checkout_ipn",
   "currency_format",
   "empty_cart",
   "payment_options",
   "remove_cart_item",
   "update_cart",
   "update_cart_item_qty",
   "shop\/redirect_to_checkout",
   "delete_media_file",
   "upload_progress_check",
   "upload",
   "reorder_media",
   "delete_media",
   "save_media",
   "pixum_img",
   "thumbnail_img",
   "create_media_dir",
   "media\/upload",
   "media\/delete_media_file",
   "queue_dispatch",
   "queue_dispatch1",
   "set_current_lang",
   "user_social_login",
   "logout",
   "user_register",
   "social_login_process",
   "user_reset_password_from_link",
   "user_send_forgot_password",
   "user_login",
   "is_logged",
   "users\/register_email_send",
   "users\/search_authors",
   "users\/verify_email_link",
   "upload_progress_check",
   "upload",
   "delete_media",
   "pixum_img",
   "thumbnail_img",
   "post_form",
   "captcha",
   "template\/compile_css",
   "get_contact_entry_by_id",
   "delete_comment_user",
   "save_comment_user",
   "post_comment",
   "coupon_apply",
   "coupon_delete",
   "offers_get_by_product_id",
   "pingstats",
   "popup_module_get_content_by_id",
   "newsletter_save_sender",
   "newsletter_delete_sender",
   "newsletter_test_sender",
   "newsletter_save_template",
   "newsletter_delete_template",
   "newsletter_get_templates",
   "newsletter_subscribe",
   "newsletter_get_campaigns",
   "newsletter_save_campaign",
   "newsletter_delete_campaign",
   "newsletter_send_campaign",
   "newsletter_finish_campaign",
   "newsletter_get_lists",
   "newsletter_delete_list",
   "content_export_start",
   "content_export_download",
   "content_import",
   "calendar_get_events_groups_api",
   "calendar_get_events_api",
   "calendar_remove_event",
   "scwCookie_ajax",
   "save_testimonial",
   "delete_testimonial",
   "reorder_testimonials",
   "change_language",
   "save_mail_provider",
   "test_mail_provider",
   "rating\/Controller\/save",
   "theme_colors_palette_css",
   "theme_css_styles_get_url",
   "get_content_admin",
   "get_content",
   "get_posts",
   "content_title",
   "get_pages",
   "get_content_by_id",
   "get_products",
   "delete_content",
   "content\/delete",
   "content_parents",
   "get_content_children",
   "page_link",
   "post_link",
   "pages_tree",
   "save_edit",
   "save_content",
   "get_content_field_draft",
   "get_content_field",
   "notifications_manager\/delete",
   "notifications_manager\/delete_selected",
   "notifications_manager\/reset",
   "notifications_manager\/reset_selected",
   "notifications_manager\/read",
   "notifications_manager\/read_selected",
   "notifications_manager\/mark_all_as_read",
   "media_library\/search",
   "media_library\/download",
   "content\/get_admin_js_tree_json",
   "content\/set_published",
   "content\/set_unpublished",
   "content\/reorder",
   "content\/reset_edit",
   "content\/reset_modules_settings",
   "content\/bulk_assign",
   "content\/copy",
   "content\/redirect_to_content",
   "current_template_save_custom_css",
   "get_cart",
   "get_orders",
   "get_order_by_id",
   "checkout_confirm_email_test",
   "delete_client",
   "delete_order",
   "update_order",
   "shop\/update_order",
   "shop\/save_tax_item",
   "shop\/delete_tax_item",
   "shop\/export_orders",
   "send_lang_form_to_microweber",
   "save_language_file_content",
   "mw_save_framework_config_file",
   "delete_user",
   "user_make_logged",
   "users\/register_email_send_test",
   "users\/forgot_password_email_send_test",
   "clearcache",
   "get_media_by_id",
   "media\/upload",
   "reorder_media",
   "save_media",
   "save_picture",
   "get_media",
   "create_media_dir",
   "reorder_modules",
   "save_module_as_template",
   "save_form_list",
   "delete_forms_list",
   "delete_form_entry",
   "forms_list_export_to_excel",
   "mw_post_update",
   "mw_install_market_item",
   "mw_apply_updates",
   "mw_apply_updates_queue",
   "mw_set_updates_queue",
   "mw_save_license",
   "mw_validate_licenses",
   "mw_send_anonymous_server_data",
   "current_template_save_custom_css",
   "system_log_reset",
   "delete_log_entry",
   "mw_composer_save_package",
   "mw_composer_run_update",
   "mw_composer_install_package_by_name",
   "mw_composer_replace_vendor_from_cache",
   "template\/delete_compiled_css",
   "add_new_menu",
   "menu_delete",
   "delete_menu_item",
   "edit_menu_item",
   "reorder_menu_items",
   "add_content_to_menu",
   "get_category_by_id",
   "get_categories",
   "save_category",
   "delete_category",
   "reorder_categories",
   "content_categories",
   "get_category_children",
   "category_link",
   "get_page_for_category",
   "category_tree",
   "category\/save",
   "category\/delete",
   "get_category_items",
   "save_option",
   "uninstall_module",
   "install_module",
   "delete_module_as_template",
   "mark_comment_as_spam",
   "mark_comments_as_old",
   "mark_comment_post_notifications_as_read",
   "coupons_save_coupon",
   "coupon_log_customer",
   "coupon_log_get_by_code_and_customer_email_and_ip",
   "coupon_log_get_by_code_and_customer_ip",
   "coupon_logs_get_by_code",
   "coupon_get_all",
   "coupon_get_by_id",
   "coupon_get_by_code",
   "coupons_delete_session",
   "offer_save",
   "offers_get_all",
   "offers_get_products",
   "offer_get_by_id",
   "offer_delete",
   "mw_drafts_load_content_field_to_editor",
   "newsletter_get_sender",
   "newsletter_get_senders",
   "newsletter_get_template",
   "newsletter_get_subscriber",
   "newsletter_save_subscriber",
   "newsletter_delete_subscriber",
   "newsletter_get_campaign",
   "newsletter_get_list",
   "newsletter_save_list",
   "calendar_save_event",
   "calendar_export_to_csv_file",
   "calendar_import_by_csv",
   "calendar_save_group",
   "calendar_delete_group",
   "save_mail_template",
   "delete_mail_template",
   "save_white_label_config",
   "theme_css_styles_save"
]
```
