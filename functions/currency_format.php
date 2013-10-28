
<h2>currency_format</h2>
<p>currency_format — formats a currency according to the site settings</p>
<h3>Synopsis</h3>
<pre class="prettyprint"><code class="language-php">currency_format($amount, $currency=false);
</code></pre>
<h2>Example</h2>
<pre class="prettyprint"><code class="language-php">
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
</code></pre>
<h4>See also</h4>
<?php print page_content('functions/_nav/shop'); ?>