# Framework Managers

Manager classes contain reusable logic that powers a Microweber website.
They are registered at startup and bound to the `Application` object.
You can easily access it by using the `mw()` function or Laravel's `app()` helper.

*Example:*

```
$results = mw()->database_manager->get('table=users&is_admin=0');
```

This results in accessing the `database_manager` manager class `\Microweber\Providers\DatabaseManager`.
Next calls the `get` method on the manager, receiving an array of non-admin users.
You can perform complex tasks with just a few functions.
Exploring this document can save a lot of programming efforts.

The bindings are created in `MicroweberServiceProvider`.
Here is a list of bound properties you can use in your code:


| App Property                  | Manager Class |
| ----------------------------: | ------------- |
| `attributes_manager`          | `Providers\Content\AttributesManager` |
| `cache_manager`               | `Providers\CacheManager` |
| `cart_manager`                | `Providers\Shop\CartManager` |
| `captcha`                     | `Utils\Captcha` |
| `category_manager`            | `Providers\CategoryManager` |
| `checkout_manager`            | `Providers\Shop\CheckoutManager` |
| `config_manager`              | `Providers\ConfigurationManager` |
| `content_manager`             | `Providers\ContentManager` |
| `content_manager_crud`        | `Providers\Content\ContentManagerCrud` |
| `content_manager_helpers`     | `Providers\Content\ContentManagerHelpers` |
| `data_fields_manager`         | `Providers\Content\DataFieldsManager` |
| `database_manager`            | `Providers\DatabaseManager` |
| `email_notifications_manager` | `Providers\EmailNotificationsManager` |
| `event_manager`               | `Providers\Event` |
| `fields_manager`              | `Providers\FieldsManager` |
| `format`                      | `Utils\Format` |
| `forms_manager`               | `Providers\FormsManager` |
| `layouts_manager`             | `Providers\LayoutsManager` |
| `log_manager`                 | `Providers\LogManager` |
| `media_manager`               | `Providers\MediaManager` |
| `modules`                     | `Providers\Modules` |
| `notifications_manager`       | `Providers\NotificationsManager` |
| `option_manager`              | `Providers\OptionManager` |
| `order_manager`               | `Providers\Shop\OrderManager` |
| `shop_manager`                | `Providers\ShopManager` |
| `tax_manager`                 | `Providers\Shop\TaxManager` |
| `template`                    | `Providers\Template` |
| `template_manager`            | `Providers\TemplateManager` |
| `ui`                          | `Providers\Ui` |
| `url_manager`                 | `Providers\UrlManager` |
| `user_manager`                | `Providers\UserManager` |

## CacheManager

Stores and manages arbitrary data in cache for faster data access.

**Methods:**

* `clear`()

Clears all cache data.

* `debug`()

Prints cache debug information.

* `delete`($cache_group = 'global')

Deletes cache for given `$cache_group` recursively.

* `get`($cache_id, $cache_group = 'global', $timeout = false)

Get data from cache. Returns `false` if data is not found.

*Example:*

```
$data = mw()->cache->get('my_cache_id', 'my_cache_group');
```

* `save`($data_to_cache, $cache_id, $cache_group = 'global', $expiration = false)

Store custom data in cache.

*Example:*

```
$data = array('something' => 'some_value');
$cache_content = mw()->cache->save($data, 'my_cache_id', 'my_cache_group');
```

## CategoryManager

Manage taxonomy entities in your website.
You can use categories for content or have them service your custom data.

**Methods:**

* `delete`($data)

*See:* [`delete_category`](/functions/delete_category.md).

* `delete_item`($data)

* `get`($params)

*See:* [`get_categories`](/functions/get_categories.md).

* `get_by_id`($id  =  0, $by_field_name = 'id')

Get a single row from the `categories` table by given ID and returns it as one dimensional array.

*See:* [`get_category_by_id`](/functions/get_category_by_id.md).

* `get_by_slug`($slug)

* `get_category_id_from_url`($url = false)

* `get_children`($parent_id = 0, $type = false, $visible_on_frontend = false)

* `get_for_content`($content_id, $data_type = 'categories')

* `get_items`($params, $data_type = 'categories')

Gets category items.

* `get_items_count`($id, $rel_type = false)

Gets category items count.

* `get_page`($category_id)

Returns the page for given category.

*See:* [`get_page_for_category`](/functions/get_page_for_category.md). 

```
$category_page = mw()->category_manager->get_page(420);
echo $category_page['title'];
```

* `get_parents`($id = 0, $without_main_parrent = false, $data_type = 'category')

Returns an array of parent categories.

* `html_tree`($parent, $link = false, $active_ids = false, $active_code = false, $remove_ids = false, $removed_ids_code = false, $ul_class_name = false, $include_first = false, $content_type = false, $li_class_name = false, $add_ids = false, $orderby = false, $only_with_content = false, $visible_on_frontend = false, $depth_level_counter = 0, $max_level = false, $list_tag = false, $list_item_tag = false, $active_code_tag = false, $ul_class_deep = false, $only_ids = false)

Prints the selected categories as an `<ul>` tree. You can pass several options for more flexibility.

* `link`($id)

Returns URL to given category.

*See:* [`category_link`](/functions/category_link.md). 

*Example:*

```
echo '<a href="' . mw()->category_manager->link(420) . '">List category #420</a>';
```

* `reorder`($data)

* `save`($data, $preserve_cache = false)

*See:* [`save_category`](/functions/save_category.md).

* `save_item`($params)

* `tree`($params  =  false)

Prints nested tree of categories and sub-categories.

*See:* [`category_tree`](/functions/category_tree.md).

*Example:*

```
$params = array(
    'parent' => 0, // parent category ID
    'link' => '<a href="{link}" id="category-{id}">{title}</a>', // sets the list item content 
    'active_ids' => array(5, 6), // IDs of active categories 
    'active_code' => 'active', // inserts this code for the active IDs 
    'remove_ids' => array(1, 2), // remove given caregory IDs 
    'include_first' => false, // if true will include the root category 
    'add_ids' => array(10, 11), // if given array of IDs will add them to the category tree
    'orderby' => array('position', 'asc'), // you can order by any field
    'list_tag' => 'ul', 
    'list_item_tag' => 'li',
    'ul_class' => 'main-category',
    'li_class' => 'sub-category'
);
echo mw()->category_manager->tree($params);
```

## ConfigurationManager

This manager allows for access to configuration.
You can store the configuration to persist changes made in runtime.

*Example:*

```
mw()->config_manager->set('my_key', 'new_value');
mw()->config_manager->save();
```

This will result in loading the new value on new requests from then on.

**Methods:**

* `get`($key)

Get configuration value. You can use `dotted.notation` to access nested keys.

* `set`($key, $val)

Set configuration value. This is covered in more detail [here](https://laravel.com/docs/master/configuration).

* `save`()

Store current configuration values in persistent storage.

## ContentManager

This class allows you to manage content such as posts, pages, products or your own custom types.

**Methods:**

* `attributes`($content_id)

* `breadcrumb`($params = false)

* `custom_fields`($content_id, $full = true, $field_type = false)

* `data`($content_id)

Get data fields for content with given ID.

* `define_constants`($content = false)

Defines all constants that are needed to parse the page layout.
Accepts array or `$content` that must have `$content['id']` set.

| Constant               | Description |
| -----------------------| :--------------|
| `ACTIVE_PAGE_ID`       | Same as `PAGE_ID`. |
| `CATEGORY_ID`          | Current category ID, if any. |
| `CONTENT_ID`           | Current post or page ID. |
| `DEFAULT_TEMPLATE_DIR` | Path to the site's default template. |
| `DEFAULT_TEMPLATE_URL` | URL of the site's default template. |
| `MAIN_PAGE_ID`         | Parent page ID. |
| `PAGE_ID`              | Current page ID. |
| `POST_ID`              | Current post ID. |

* `edit_field`($data, $debug = false)

* `get`($params = false)

Get array of content items from the database.
Any table column name works as parameter to filter or order content by.
Parameters can be passed as string or array.

* `get_by_id`($id)

Get single content item by ID from the `content` table.

* `get_by_url`($url = '', $no_recursive = false)

* `get_children`($id = 0, $without_main_parrent = false)

* `get_data`($params = false)

Get data fields.

* `get_inherited_parent`($content_id)

Get the first parent that has layout.

* `get_page`($id = 0)

Get single content item by id from the `content` table.

*See:* [get_content](/functions/get_content.md).

* `get_pages`($params = false)

* `get_parents`($id = 0, $without_main_parrent = false)

* `get_posts`($params = false)

* `get_products`($params = false)

* `homepage`()

Returns the homepage as array.

* `lang_current`()

Get the current language of the site. Defines the `MW_LANG` constant.

* `lang_set`($lang = 'en')

Set the current language.

* `link`($id = 0)

Gets a link for given content id. If you don't pass id parameter it will try to use the current page id.

*See:* `post_link()`, `page_link()`, `content_link()`.

* `next_content`($content_id = false, $mode = 'next', $content_type = false)

* `pages_tree`($parent = 0, $link = false, $active_ids = false, $active_code = false, $remove_ids = false, $removed_ids_code = false, $ul_class_name = false, $include_first = false)

Print nested tree of pages. The shorthand function for this is `pages_tree`.

*Example returning `<select>` with `<option>`*:

```
mw()->content_manager->pages_tree(array(
    'link' => '{title}',
    'list_tag' => ' ',
    'list_item_tag' => 'option',
    'active_ids' => $data['parent'],
    'active_code_tag' => ' selected="selected" ',
    'ul_class' => 'nav',
    'li_class' => 'nav-item'
));
```

Parameters can be used to set a `'parent'` ID, `'id_prefix'` or
`'include_first'` which sets whether to include the parent in the tree.

* `paging`($params)

Returns HTML string with `<ul>`/`<li>` pagination.

Parameters (`$params`) can have the following keys:
`num` (default 5), `limit` (default 0), `class`, `li_class`, `paging_param`, `current_page`, `display` (default is 'default').

If `$params['display']` is `false` returns the paging array instead
It's the same as `$posts_pages_links` in template scope.

* `paging_links`($base_url = false, $pages_count, $paging_param = 'curent_page', $keyword_param = 'keyword')

* `prev_content`($content_id = false)

* `reorder`($params)

* `save`($data, $delete_the_cache = true)

* `save_content`($data, $delete_the_cache = true)

* `save_content_admin`($data, $delete_the_cache = true)

* `save_content_data_field`($data, $delete_the_cache = true)

* `save_content_field`($data, $delete_the_cache = true)

* `save_edit`($post_data)

* `set_published`($params)

Set content to be published. Switches the `is_active` flag to `'y'`.
Returns the URL of the content.

* `set_table_names`($tables = false)

Sets the database table names used by the class.
Table names are set with keys 
`attributes`,
`categories`,
`categories_items`,
`content`,
`content_data`,
`content_fields`,
`content_fields_drafts`,
`custom_fields`,
`media`,
`menus`.

The function also defines corresponding constants:
`MW_DB_TABLE_TAXONOMY`,
`MW_DB_TABLE_TAXONOMY_ITEMS`,
`MW_DB_TABLE_CONTENT`,
`MW_DB_TABLE_CONTENT_DATA`,
`MW_DB_TABLE_CONTENT_FIELDS`,
`MW_DB_TABLE_CONTENT_FIELDS_DRAFTS`,
`MW_DB_TABLE_CUSTOM_FIELDS`,
`MW_DB_TABLE_MEDIA`,
`MW_DB_TABLE_MENUS`.

* `set_unpublished`($params)

Set content to be unpublished. Switches the `is_active` flag to `'n'`.
Returns the URL of the content. Also see `content_set_unpublished()`.

* `site_templates`()

* `title`($id)

## DatabaseManager

Exposes a simple abstract way to interface persistent storage.

**Properties:**

* `$use_cache` Flag that determines whether or not query caching should be used to speed up data access.

**Methods:**

* `delete_by_id`($table, $id = 0, $field_name = 'id')

Deletes item by ID from database table. You can set custom column to delete by, using the `$field_name` argument.

* `get`($table, $params = null)

Get items from the database. Returns array with data or `false`. Alternatively returns an integer if `page_count` is set.

* `get_by_id`($table, $id = 0, $field_name = 'id')

Get full table row by ID. You can set custom column to select by, using the `$field_name` argument.

*Example:*

```
$results = mw()->database_manager->get('table=content&is_active=1');
```

*See:* [`db_get`](/functions/db_get.md).

* `last_id`($table)

Get last inserted ID from a table, you must have 'id' column in it.

* `q`($q, $silent = false)

Execute raw query.

* `query`($q, $cache_id = false, $cache_group = 'global', $only_query = false, $connection_settings = false)

Executes plain query in the database.
Returns an array of results or `false` if nothing is found.

Make sure your query arguments are escaped before calling this function.

* `save`($table, $data = false, $data_to_save_options = false)

Generic save function, stores data to the database. Returns the ID of the saved row.

* `table`($table)

Returns a `QueryBuilder` instance for table with the given name.

## FieldsManager

Manages custom fields.

**Methods:**

* `decode_array_vals`($it)

* `delete`($id)

* `get`($table, $id = 0, $return_full = false, $field_for = false, $debug = false, $field_type = false, $for_session = false)

* `get_all`($params)

* `get_by_id`($field_id)

* `get_value`($content_id, $field_name, $return_full = false, $table = 'content')

* `get_values`($custom_field_id)

* `make_default`($rel, $rel_id, $fields_csv_str)

* `make_field`($field_id = 0, $field_type = 'text', $settings = false)

* `make`($field_id = 0, $field_type = 'text', $settings = false)

* `names_for_table`($table)

* `reorder`($data)

* `save`($data)

* `unify_params`($data)

## FormsManager

Handy reusable logic for web forms.

**Methods:**

* `countries_list`($full = false)

* `delete_entry`($data)

* `delete_list`($data)

* `export_to_excel`($params)

* `get_entires`($params)

* `get_lists`($params)

* `post`($params)

* `save_list`($params)

* `states_list`($country = false)

## LayoutsManager

Useful functions to work with layouts.

**Methods:**

* `add_external`($arr)

* `delete_all`()

* `get`($params = false)

* `get_all`($options = false)

Lists the layout files from a given directory.
Returns array of layouts with description, icon, etc.

You can use this function to get layouts from various folders in your web server.
Caches the result in the `'templates'` cache group.

If `$options['path']` is set the method will look for layouts in the given folder.

If `$options['get_dynamic_layouts']` is set `get_all` will scan for templates for the `'layout'` module in all template folders.

* `get_link`($options = false)

* `save`($data_to_save)

* `scan`($options = false)

See above. Performs the actual scan.

* `template_check_for_custom_css`($template_name, $check_for_backup = false)

* `template_remove_custom_css`($params)

* `template_save_css`($params)

## LogManager

Helpful functions for log messages and managing existing entries.

**Methods:**

* `delete`($params)

* `delete_entry`($data)

* `get`($params)

* `get_entry_by_id`($id)

* `reset`()

* `save`($params)

## MediaManager

Class that powers working with uploaded pictures, video and other user content.

**Properties:**

* `$download_remote_images`

* `$no_cache` Boolean that indicates the usage of cache while making queries. Default value is `false`.

* `$table_prefix` Sets a prefix for database table names.

**Methods:**

* `base64_to_file`($data, $target)

* `create_media_dir`($params)

* `delete`($data)

* `delete_media_file`($params)

* `get`($params)

* `get_all`($params)

* `get_by_id`($id)

* `get_first_image_from_html`($html)

* `get_picture`($content_id, $for = 'content', $full = false)

* `pixum`($width = 150, $height = false)

* `pixum_img`()

* `relative_media_start_path`()

* `reorder`($data)

* `save`($data)

* `thumbnail`($src, $width = 200, $height = 200)

* `thumbnail_img`($params)

* `thumbnails_path`()

* `upload`($data)

* `upload_progress_check`()

## MenuManager

Utility functions to work with website menus.

**Properties:**

* `$no_cache` Boolean that indicates the usage of cache while making queries. Default value is `false`.

**Methods:**

* `get_menu`($params = false)

* `get_menu_items`($params = false)

* `get_menus`($params = false)

* `menu_create`($data_to_save)

* `menu_delete`($id = false)

* `menu_item_delete`($id = false)

* `menu_item_get`($id)

* `menu_item_save`($data_to_save)

* `menu_items_reorder`($data)

* `menu_tree`($menu_id, $maxdepth = false)

* `is_in_menu`($menu_id = false, $content_id = false)

## Modules

Utility class to aid working with Microweber modules.

**Properties:**

* `$current_module`

* `$current_module_params`

* `$table_prefix` Sets a prefix for database table names.

* `$ui`

**Methods:**

* `css_class`($module_name)

* `delete_all`()

* `delete_module`($id)

* `exists`($module_name)

* `get`($params = false)

* `get_modules`($params)

See `get()`.

* `get_modules_from_current_site_template`()

* `set_table_names`($tables = false)

Sets the database table names used by the class.
Table names are set with keys
`elements`,
`module_templates`,
`modules`,
`options`,
`system_licenses`.

* `info`($module_name)

* `install`()

* `scan`($options = false)

See `scan_for_modules()`.

* `scan_for_modules`($options = false)

* `save`($data_to_save)

* `locate`($module_name, $custom_view = false, $no_fallback_to_view = false)

* `ui`($name, $arr = false)

* `load`($module_name, $attrs = array())

* `license`($module_name = false)

* `templates`($module_name, $template_name = false, $get_settings_file = false)

* `url`($module_name = false)

* `path`($module_name)

See `dir()`.

* `dir`($module_name)

* `is_installed`($module_name)

* `reorder_modules`($data)


* `icon_with_title`($module_name, $link = true)

* `uninstall`($params)

* `set_installed`($params)

* `update_db`()

* `get_saved_modules_as_template`($params)

* `delete_module_as_template`($data)

* `save_module_as_template`($data_to_save)

* `scan_for_elements`($options = array())


## NotificationsManager

Functions to manage notifications.

**Methods:**

* `delete`($id)

* `delete_for_module`($module)

* `get`($params = false)

* `get_by_id`($id)

* `mark_all_as_read`()

* `mark_as_read`($module)

* `read`($id)

* `save`($params)

*Example:*

```
```

## OptionManager

Class for working with website options.

**Properties:**

* `$adapters_dir`

* `$options_memory` Internal array to hold options in cache.

* `$override_memory` Array to hold options values that are not persistent in database and changed on runtime.

* `$table_prefix` Sets a prefix for database table names.

**Methods:**

* `delete`($key, $option_group = false, $module_id = false)

* `get`($key, $option_group = false, $return_full = false, $orderby = false, $module = false)

Get options from the database.

If you pass an array as the `$key` argument the function will replace the database params.
If `$return_full` is `true` the whole row will be returned as array rather than just the value.
Set the `$module` argument to store and option for given module.

*Example:*

```
mw()->option_manager->get('my_key', 'my_group');
```

* `get_all`($params = '')

* `get_by_id`($id)

* `get_groups`($is_system = false)

* `get_items_per_page`($group = 'website')

* `save`($data)

You can use this function to store options in the database. `$data` can be array or string.

*Example:*

```
mw()->option_manager->save(array(
    'option_value' => 'my value',
    'option_key' => 'my_option',
    'option_group' => 'my_option_group'
));
```

* `set_default`($data)

* `set_table_names`($tables = false)

Sets the database table name used by the class.
Table name is set with key `options`.

The function also defines corresponding constant `MW_DB_TABLE_OPTIONS`.

* `override`($option_group, $key, $value)

## ShopManager

Encapsulates logic for interacting with the website shop.

**Properties:**

* `$no_cache` Boolean that indicates the usage of cache while making queries. Default value is `false`.

* `$table_prefix` Sets a prefix for database table names.

**Methods:**

* `after_checkout`($order_id, $suppress_output = true)

* `cart_sum`($return_amount = true)

* `cart_total`()

* `checkout`($data)

* `checkout_confirm_email_test`($params)

* `checkout_ipn`($data)

See `CheckoutManager`.

* `checkout_url`()

* `confirm_email_send`($order_id, $to = false, $no_cache = false, $skip_enabled_check = false)

* `currency_get_for_paypal`()

* `currency_convert_rate`($from, $to)

* `currency_format`($amount, $curr = false)

* `currency_symbol`($curr = false, $key = 3)

* `currency_get`()

* `delete_client`($data)

* `delete_order`($data)

See `OrderManager`.

* `domain_name`($domainb)

* `empty_cart`()

* `esip`($ip_addr)

* `get_cart`($params = false)

* `get_domain_from_str`($address)

* `get_order_by_id`($id = false)

* `get_orders`($params = false)

* `order_items`($order_id = false)

* `payment_options`($option_key = false)

* `place_order`($place_order)

* `remove_cart_item`($data)

* `set_table_names`($tables = false)

Sets the database table names used by the class.
Table name is set with keys
`cart`,
`cart_orders`,
`cart_shipping`,
`cart_taxes`.

* `update_cart_item_qty`($data)

* `update_cart`($data)

* `update_order`($params = false)

See `save()`.

* `update_quantities`($order_id = false)

Remove quantity from product. On completed order this function deducts the product quantities.
Returns boolean indicating successfull update.

## TemplateManager

Class that manages website templates.

**Methods:**

* `directory_map`($source_dir, $directory_depth = 0, $hidden = false, $full_path = false)

Reads the specified directory and builds an array representation.
Subfolders contained with the directory will be mapped as well.

For `$directory_depth` `0` means fully recursive, `1` only includes the current directory, etc.

* `get_styles`()

* `site_templates`($options = false)

Get the template layouts info under the layouts subdirectory of your active template.

For `$options['type']` the default is `'layout'`. You can define your own types as post/form, etc in the layout.txt file.

## UI

Functions that are used to build parts of the website user interface.

**Properties:**

* `$admin_logo`

* `$admin_logo_login`

* `$admin_logo_login_link`

* `$brand_name`

* `$custom_fields`

* `$custom_support_url`

* `$disable_marketplace`

* `$disable_powered_by_link`

* `$enable_service_links`

* `$logo_live_edit`

* `$marketplace_access_code`

* `$marketplace_provider_id`

* `$modules_ui`

* `$powered_by_link`

**Methods:**

* `admin_logo`()

* `admin_logo_login`()

* `brand_name`()

* `create_content_menu`()

* `custom_fields`()

* `defaults`()

* `live_edit_logo`()

* `module`($name = false, $arr = false)

* `powered_by_link`()

## UpdateManager

Provides a set of functions to manage Microweber updates.

**Properties:**

* `$skip_cache` default value is `false`.

**Methods:**

* `apply_updates`($params)

*Example:*

```
```

* `apply_updates_queue`()

* `browse`()

* `call`($method = false, $post_params = false)

* `check`($skip_cache = false)

*Example:*

```
```

* `collect_local_data`()

* `composer_get_required`()

* `composer_merge`($composer_patch_path)

* `composer_replace_vendor_from_cache`()

* `composer_run`()

*Example:*

```
```

* `composer_save_package`($params)

* `get_licenses`($params = false)

* `get_modules`()

* `get_templates`()

* `http`()

Returns a new instance of `\Microweber\Utils\Http`.

* `http_build_query_for_curl`($arrays, &$new = array(), $prefix = null)

* `install_from_market`($item)

*Example:*

```
```

* `install_element`($module_name)

* `install_market_item`($params)

* `install_module`($module_name)

*Example:*

```
```

* `install_version`($new_version)

* `marketplace_link`($params = false)

* `marketplace_admin_link`($params = false)

* `post_update`($version = false)

* `save_license`($params)

* `send_anonymous_server_data`($params = false)

* `set_updates_queue`($params = false)

* `validate_license`($params = false)

## UrlManager

Class defining handy URL-related utility logic.

**Properties:**

* `$current_url_var` Full path URL of the current request 

* `$site_url_var` URL of the website.

**Methods:**

* `api_link`($str = '')

* `current`($skip_ajax = false, $no_get = false)

Returns the current URL as a string.
If `$no_get` is `true` will remove the params after '?'.

* `download`($requestUrl, $post_params = false, $save_to_file = false)

* `hostname`()

* `is_ajax`()

Returns `true` if the current request is made via AJAX.

* `link_to_file`($path)

* `param`($param, $skip_ajax = false, $force_url = false)

* `param_set`($param, $value = false, $url = false)

* `param_unset`($param, $url = false)

* `params`($skip_ajax = false)

See below. Calls `param()` with `'__MW_GET_ALL_PARAMS__'` argument.

* `redirect`($url)

* `replace_site_url`($arr)

* `replace_site_url_back`($arr)

* `segment`($num = -1, $page_url = false)

Returns single URL segment.
`$num` is the index of the segment.
If `$page_url` is `false` it will use the current URL.

* `set`($url = false)

* `set_current`($url = false)

* `site`($add_string = false)

* `site_url`($add_string = false)

* `string`($skip_ajax = false)

Returns the current url path, does not include the domain name.
If `$skip_ajax` is `true` will try to get the referring URL from XHR request.
Returns the URL string.

* `segments`($page_url = false)

Returns all URL segments as array.
If `$page_url` is `false` will use the current URL.

* `slug`($text)

* `to_path`($path)

## UserManager

Manage website users.

**Methods:**

* `admin_access`()

Stops script execution and outputs `'You must be logged as admin'`.

* `after_register`($user_id, $suppress_output = true)

* `api_login`($api_key = false)

* `attributes`($user_id = false)

* `count`()

* `csrf_form`($unique_form_name = false)

* `csrf_token`($unique_form_name = false)

* `csrf_validate`(&$data)

* `data_fields`($user_id = false)

* `delete`($data)

* `forgot_password_url`()

* `get`($params = false)

* `get_all`($params)

Returns an array of users.
You can pass `$params` either as array or string.
Set filter keys like `'username'`, `'email'` or `'password'`.

*See:* [`get_users`](/functions/get_users.md).

```
mw()->user_manager->get_all('email=you@domain.com');
```

* `get_by_id`($id)

Generic function to get the user by ID. Uses the `getUsers` function to get the data. Returns an array.

* `get_by_username`($username)

* `hash_pass`($pass)

* `id`()

* `is_admin`()

* `is_logged`()

* `login`($params)

Allows you to login a user into the system.
Also sets user session when the user is logged.
On 5 unsuccessful logins, blocks the IP for few minutes.

You can pass `$params` as string or array.
You can set credentials using `$params['email']` and `$params['password']`, which is passed through `hash_pass()` function.
In case you have pre-hashed password you can use `$params['password_hashed']` instead.

*Example:*

```
$result = mw()->user_manager->login(array('email' => 'you@domain.com', 'password' => '********'));
if(isset($result['error'])) {
    echo $result['error'];
} else if(isset($result['success'])) {
    echo $result['success'];
}
```

* `login_set_failed_attempt`()

* `login_url`()

* `logout`($params = false)

Returns `true` on success.

* `logout_url`()

* `make_logged`($user_id)

* `name`($user_id = false, $mode = 'full')

Gets the user's full name.
If `$user_id` is `false` the curent user will be used.
`$mode` can be one of the following: `full`, `first`, `last`, `username`.

* `nice_name`($id, $mode = 'full')

Function to get user printable name by given ID.

* `picture`($user_id = false)

* `register`($params)

* `register_email_send`($user_id = false)

* `register_url`()

* `reset_password_from_link`($params)

* `save`($params)

Stores user information in the database. By default applies security rules.
If you are admin you can save any user in the system, otherwise you must post param `id` with the current user ID.

```
$params['id'] = $user_id;
$params['is_active'] = 1; // default is 'n'
```

For security reasons, to create a new user please use `user_register()` (requires captcha)
or write your own `save_user` wrapper function that calls `mw_var('force_save_user', true)` and pass its params `to save_user()`.

*Example:*

```
$upd = array(
    'id' => 1,
    'email' => $params['new_email'],
    'password' => $params['passwordhash']
);
// Create new user or foce save. Skips ID check and is admin check.
mw_var('force_save_user', true);
// Skips password hash function and saves password as is. It's up you to ensure the password is hashed.
mw_var('save_user_no_pass_hash', true);
$is_saved = save_user($upd);
```

* `send_forgot_password`($params)

* `session_all`()

Returns all data stored in the current user session.

* `session_del`($name)

* `session_end`()

* `session_get`($name)

Get value stored in the session.

* `session_id`()

Returns the ID of the user session.

* `session_set`($name, $val)

* `set_table_names`($tables = false)

Sets the database table names used by the class.
Table name is set with keys `log` and `users`.

* `social_login`($params)

* `social_login_process`($params = false)

* `socialite_config`($provider = false)

* `update_last_login_time`()


## Content/AttributesManager

Manage content attributes.

**Methods:**

* `get`($data = false)

* `get_values`($params)

Calls `get` and returns results as associative array.

* `save`($data)

## Content/ContentManagerCrud

Helper function to abstract content CRUD (data access) operations.

**Properties:**

* `$no_cache` Boolean that indicates the usage of cache while making queries. Default value is `false`.

* `static $precached_links`

* `static $skip_pages_starting_with_url = ['admin', 'api', 'module']`

**Methods:**

* `get`($params = false)

* `get_by_url`($url = '', $no_recursive = false)

* `get_edit_field`($data, $debug = false)

    `$data['is_draft']`

    `$data['rel_type']` can be `content`, `page`, `post`, `product` or any custom type.

    `$data['data-id']`

    `$data['cache_group']`

    `$data['all']`

* `map_params_to_schema`($params)

* `reorder`($params)

* `save`($data, $delete_the_cache = true)

* `set_table_names`($tables = false)

Sets the database table names used by the class.
Table name is set with keys
`attributes`,
`categories`,
`categories_items`,
`content`,
`content_data`,
`content_fields`,
`content_fields_drafts`,
`custom_fields`,
`media`,
`menus`.

The function also defines corresponding constants
`MW_DB_TABLE_TAXONOMY`,
`MW_DB_TABLE_TAXONOMY_ITEMS`,
`MW_DB_TABLE_CONTENT`,
`MW_DB_TABLE_CONTENT_DATA`,
`MW_DB_TABLE_CONTENT_FIELDS`,
`MW_DB_TABLE_CONTENT_FIELDS_DRAFTS`,
`MW_DB_TABLE_CUSTOM_FIELDS`,
`MW_DB_TABLE_MEDIA`,
`MW_DB_TABLE_MENUS`.

## Content/ContentManagerHelpers

Functions to help working with content on the website.

**Methods:**

* `add_content_to_menu`($content_id, $menu_id = false)

* `bulk_assign`($data)

* `create_default_content`($what)

* `copy`($data)

* `delete`($data)

* `download_remote_images_from_text`($text)

* `get_edit_field_draft`($data)

* `reset_edit_field`($data)

* `save_content_field`($data, $delete_the_cache = true)

* `save_from_live_edit`($post_data)

## Content/DataFieldsManager

Class defining utilities for managing website data fields.

**Methods:**

* `get_values`($params)

* `save`($data)

    $data['content_id']
    $data['field_name']
    $data['field_value']
    $data['id']
    $data['rel_id']
    $data['rel_type']

## Database/Crud

Abstract interface for database CRUD (data access) operations.

```
$crud = new \Microweber\Providers\Database\Crud();
$crud->table = 'my_table';
```

*See:* `DatabaseManager`.

**Properties:**

* `$table` name of the table this class manages.

**Methods:**

* `delete`($data)

* `get`($params)

* `get_by_id`($id = 0, $field_name = 'id')

* `has_permission`($params)

* `save`($params)

* `table`()

Returns a `QueryBuilder` instance of the class table.

## Database/UserCrud

Abstract interface for database user-related CRUD (data access) operations.

Extends `Database/Crud`.
Performs additional checks on overloaded methods.

**Methods:**

* `delete`($data)

Checks for ID and permissions.

* `get`($params)

Checks for active user session and returns content only authored by the user.

* `save`($params)

Checks for ID and permissions.

## Database/Utils

Utilities for working with the database.

**Properties:**

* `$cache_minutes = 60`

* `$default_limit = 30`

* `$table_fields`

**Methods:**

* `add_table_index`($aIndexName, $aTable, $aOnColumns, $indexmeta = false)

* `assoc_table_name`($assoc_name)

Removes prefix from given string.

* `build_table`($table_name, $fields_to_add, $use_cache = false)

* `build_tables`($tables)

* `clean_input`($input)

Strips given string off XSS and malicious parts.

* `escape_string`($value)

Escapes a string to avoid SQL injection.

* `get_fields`($table)

Gets all column names from database table.

* `get_prefix`()

Returns website table prefix.

* `get_sql_engine`()

Returns an identifier of the website database configuration, i.e. `mysql`, `sqlite`, etc...

* `get_table_ddl`($full_table_name)

Returns table `CREATE` statement for given database table.

* `get_tables_list`()

Returns list of tables in the website database.

* `import_sql_file`($full_path_to_file)

Imports a SQL file in the website database.

* `map_array_to_table`($table, $array)

Filters an array only keeping keys that are valid table column names.

*Example:*

```
$table = $this->table_prefix . 'content';
$data = array('id' => 1, 'non_ex' => 'i do not exist and will be removed');
$criteria = $this->map_array_to_table($table, $array);
```

* `query_log`()

Returns a log of performed database queries for diagnostics.

* `real_table_name`($assoc_name)

Ensures table prefix for given table name.

* `remove_comments_from_sql_string`($output)

Strips comment lines of given SQL string.

* `remove_sql_remarks`($sql)

Removes remarks (`#`) of given SQL string.

* `split_sql_file`($sql, $delimiter)

Splits given SQL string in parts without breaking SQL statements.

* `update_position_field`($table, $data = array())

## Shop/CartManager

Functions for working with user cart contents.

**Methods:**

* `delete_cart`($params)

    `session_id`, `order_id`

* `empty_cart`()

* `get`($params = false)

* `get_by_order_id`($order_id = false)

* `get_tax`()

* `recover_cart`($sid = false, $ord_id = false)

* `remove_item`($data)

* `sum`($return_amount = true)

* `table_name`()

* `total`()

* `update_cart`($data)

* `update_item_qty`($data)

## Shop/CheckoutManager

Powers checkout functionality for website orders.

**Methods:**

* `after_checkout`($order_id, $suppress_output = true)

* `checkout`($data)

`$data` is an array of details needed for checkout with keys:
`address`,
`address2`,
`city`,
`country`,
`email`,
`first_name`,
`last_name`,
`payment_address`,
`payment_city`,
`payment_country`,
`payment_email`,
`payment_gw`,
`payment_name`,
`payment_state`,
`payment_zip`,
`phone`,
`promo_code`,
`state`,
`zip`.

Returns an array of an `error` or `success` key with corresponding message.

* `checkout_ipn`($data)

* `confirm_email_send`($order_id, $to = false, $no_cache = false, $skip_enabled_check = false)

* `domain_name`($domainb)

* `esip`($ip_addr)

* `get_domain_from_str`($address)

* `payment_options`($option_key = false)

## Shop/OrderManager

Manage shop orders.

**Methods:**

* `delete_order`($data)

* `export_orders`()

Returns `array('success' => 'Your file has been exported!', 'download' => $download)`
where `$download` is an array with the following keys:

    'id', 'created_at', 'created_at', 'amount', 'transaction_id', 'shipping', 'currency', 'is_paid',
    'user_ip', 'last_name', 'email', 'country', 'city', 'state', 'zip', 'address', 'phone', 'payment_gw',
    'order_status', 'taxes_amount', 'cart', 'transaction_id'

* `get`($params = false)

* `get_by_id`($id = false)

* `get_items`($order_id = false)

* `place_order`($place_order)

* `save`($params = false)

## Shop/TaxManager

Manage tax information used in the website shop.

**Methods:**

* `calculate`($sum)

Returns the tax that has to be added to a given order total.

* `delete_by_id`($data)

* `get`($params)

* `save`($params)
