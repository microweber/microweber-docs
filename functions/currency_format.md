## currency_format

currency_format — formats a currency according to the site settings

### Summary

    currency_format($amount, $currency=false);

### Usage

    $currency_format = currency_format(100);
    var_dump($currency_format);
    //string "$ 100.00"

    //format any currency
    $currency_format = currency_format(100, "GBP");
    var_dump($currency_format);
    //string "£ 100.00"

    $currency_format = currency_format(100, "BGN");
    var_dump($currency_format);
    //string "100.00 лв."

#### See also

<!--?php print page_content('functions/_nav/shop'); ?-->