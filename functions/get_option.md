## get_option

get_option — return site config option value

### Summary

    get_option($key, $option_group = 'website');

### Usage

    //get an option
    $items_per_page = get_option('items_per_page', 'website'); 
    print $items_per_page;
 