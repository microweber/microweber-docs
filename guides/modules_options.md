## Module options

The functions [save_option](../functions/save_option.md "save_option") and [get_option](../functions/get_option.md "") are used to store or retrieve simple key-value data.
Each entry is identified by a name and a group it belongs to, which are passed as arguments. 



### Getting options


You can add custom options for every module. For example now we will add dynamic text, which can be changed from the module "settings" part.

*Example* `userfiles/modules/example_module/index.php`
```php
<h1><?php print get_option('my_text', $params['id']); ?></h1>
```

The `$params['id']` value represents the current module instance ID. If you wish to get options from another group you can use your own value as the second parameter.



### Saving options automatically

Just add `mw_option_field` class to any input field.

*Example* `userfiles/modules/example_module/admin.php`
```html
<label class="mw-ui-label">Say something
  <input
      name="my_text"
      class="mw_option_field"
      type="text"
      value="<?php print get_option('my_text', $params['id']); ?>" />
</label>
```

In admin.php you can have an input field with the class `mw_option_field`. When you change this field, its value will be saved in the database automatically. 

The `name` attribute of the input is used as a key in the `get_option` function, which you can use to retrieve the value from PHP. The value is saved for the current module instance. If you wish to store option for another instance you can set a custom `option-group` attribute on your input field.


### Saving options manually

You can save options also by AJAX by using the REST api and calling the `save_option` function.

For example, now we will save a field with name `text_color`

*Example* `userfiles/modules/example_module/admin.php`
```html
<?php $selected_color = get_option('text_color', $params['id']); ?>
<?php $colors = array('red', 'blue', 'green'); ?>

<script>
    $(document).ready(function () {
        $("#my_text_color").change(function () {
            var data = {};
            data.option_group = "<?php print $params['id'] ?>";
            data.option_key = "text_color";
            data.option_value = $(this).val();
            $.post("<?php print api_url('save_option') ?>", data, function (resp) {
                mw.reload_module_parent('#<?php print $params['id'] ?>');
            });
        });
    });
</script>


<select id="my_text_color">
    <option value="" <?php if (!$selected_color): ?> selected="selected" <?php endif; ?>>None</option>
    <?php foreach ($colors as $color): ?>
        <option value="<?php print $color ?>" 
        <?php if ($selected_color == $color): ?> selected="selected" <?php endif; ?>><?php print $color ?></option>
    <?php endforeach; ?>
</select>
```



The options are simple way for making your module have dynamic content.






 

 
 