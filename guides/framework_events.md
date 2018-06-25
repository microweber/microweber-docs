# Framework Events

You can listen to events using the shorthand `event_bind()` function or the `on` method of the `EventManager` class.

```
event_bind('mw.admin', function() {
    echo 'Administration initialized.';
});

mw()->event_manager->on('site_header', function($template) {
    $template = str_replace('..', '', $template);
    $src = '<link rel="stylesheet" id="mw-user-stylesheet" href="'. $url .'" type="text/css" media="all">' . "\n";
    template_head($src);
});
```

* src/Microweber/Controllers/AdminController.php
    * mw.admin
    * mw_backend
    * on_load
    * mw.admin.header

* src/Microweber/Controllers/DefaultController.php
    * mw_cron
    * mw_robot_url_hit
    * mw.live_edit
    * mw_backend
    * mw.admin
    * mw_frontend
    * mw.front
    * mw.controller.index
    * recover_shopping_cart
    * on_load
    * site_header
    * mw.live_edit

* src/Microweber/Controllers/ModuleController.php
    * mw.live_edit
    * mw_backend
    * mw.admin
    * mw_frontend
    * site_header
    * mw_robot_url_hit

* src/Microweber/Providers/ContentManager.php
    * mw_save_content

* src/Microweber/Providers/Template.php
    * mw.template.print_custom_css_includes
    * mw.template.print_custom_css

* src/Microweber/Traits/ExtendedSave.php
    * mw.database.extended_save
    * mw.database.extended_save_images
    * mw.database.extended_save_attributes
    * mw.database.extended_save_custom_fields
    * mw.database.extended_save_data_fields
    * mw.database.extended_save_categories
    * mw.database.extended_save_tags

* userfiles/modules/admin/dashboard.php
    * mw.admin.dashboard.start
    * mw.admin.dashboard.content
    * mw.admin.dashboard.links
    * mw.admin.dashboard.links2
    * mw.admin.dashboard.help
    * mw.admin.dashboard.links3
    * mw.admin.dashboard.main

* userfiles/modules/admin/footer.php
    * content.create.menu

* userfiles/modules/admin/header.php
    * admin_head

* userfiles/modules/admin/panel/shop/dashboard/index.php
    * mw.admin.dashboard.content
    * mw.admin.dashboard.main

* userfiles/modules/admin/panel/shop/orders/list.php
    * mw_admin_quick_stats_by_session

* userfiles/modules/admin/panel/shop/orders/_partials/old.php
    * mw.ui.admin.shop.order.edit.status.after

* userfiles/modules/admin/panel/shop/orders/_partials/order_inner_stasus_bar.php
    * mw.ui.admin.shop.order.edit.status.after

* userfiles/modules/comments/templates/default.php
    * module.comments.item.before
    * module.comments.item.info
    * module.comments.item.body
    * module.comments.item.body.after
    * module.comments.item.after
    * module.comments.form.before
    * module.comments.form.start
    * module.comments.form.end
    * module.comments.form.after

* userfiles/modules/content/backend.php
    * admin_content_after_website_tree

* userfiles/modules/content/views/advanced_settings.php
    * mw.admin.content.edit.advanced_settings
    * mw_admin_edit_page_advanced_settings
    * mw.admin.content.edit.advanced_settings
    * mw_admin_edit_page_advanced_settings

* userfiles/modules/content/views/edit.php
    * content.edit.main

* userfiles/modules/content/views/edit_default_inner.php
    * content.edit.richtext

* userfiles/modules/content/views/edit_default.php
    * content.edit.title.after
    * mw_admin_edit_page_footer

* userfiles/modules/content/views/tabs.php
    * mw_admin_edit_page_tabs_nav
    * mw_admin_edit_page_tab_1
    * mw_edit_page_admin_menus
    * mw_admin_edit_page_after_menus
    * mw_admin_edit_page_tab_2
    * mw_admin_edit_page_tab_3
    * mw_edit_product_admin
    * mw_admin_edit_page_tab_4
    * mw_admin_edit_page_tabs_end

* userfiles/modules/content/views/toolbar.php
    * content.create.menu

* userfiles/modules/microweber/admin/footer.php
    * content.create.menu

* userfiles/modules/microweber/toolbar/toolbar.php
    * live_edit_toolbar_menu_start
    * live_edit_quick_add_menu_start
    * live_edit_quick_add_menu_end
    * live_edit_toolbar_menu_end
    * live_edit_toolbar_action_buttons
    * live_edit_toolbar_action_menu_start
    * live_edit_toolbar_action_menu_middle
    * live_edit_toolbar_action_menu_end
    * live_edit_toolbar_controls
    * live_edit_toolbar_end

* userfiles/modules/microweber/toolbar/toolbar_quick.php
    * live_edit_toolbar_end
    * mw_db_init_default
    * mw_db_init_modules
    * mw_db_init

* userfiles/modules/microweber/toolbar/toolbar_wide.php
    * live_edit_toolbar_menu_start
    * live_edit_quick_add_menu_start
    * live_edit_quick_add_menu_end
    * live_edit_toolbar_menu_end
    * live_edit_toolbar_action_buttons
    * live_edit_toolbar_action_menu_start
    * live_edit_toolbar_action_menu_middle
    * live_edit_toolbar_action_menu_end
    * live_edit_toolbar_controls
    * live_edit_toolbar_end

* userfiles/modules/microweber/toolbar/wysiwyg.php
    * live_edit_toolbar_btn

* userfiles/modules/microweber/toolbar/editor_tools/rte_image_editor/index.php
    * live_edit_toolbar_image_search

* userfiles/modules/settings/admin.php
    * mw_admin_settings_menu

* userfiles/modules/settings/group/internal.php
    * mw_admin_internal_settings

* userfiles/modules/shop/orders/edit_order.php
    * mw.ui.admin.shop.order.edit.status.after

* userfiles/modules/shop/orders/index.php
    * mw_admin_quick_stats_by_session

* userfiles/modules/users/edit_user.php
    * mw.admin.user.edit