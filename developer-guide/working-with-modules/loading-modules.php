<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h2>Loading modules</h2>
<p>In Microweber the modules are loaded via the <code>&lt;module type=&quot;your_module_name&quot; /&gt;</code> tag inside your template. Additionaby they can be dragged and dropped by the user in the <a href="<?php print site_url(); ?>developer-guide/making-template/editable-regions">editable regions</a> of your site.</p>
<p>The modules can have paremeters, which are passed by html attributes. </p>
<p>Here is how to load a module inside your template:</p>
<pre class="prettyprint"><code class="language-php">&lt;module type=&quot;my_module&quot; some-parameter=&quot;some value&quot; /&gt;</code></pre>
<p>To create a module you can read <a href="<?php print site_url(); ?>developer-guide/making-a-module/index">this page</a>, but for now see how the default modules work</p>
 <?php print page_content('modules/default-modules'); ?> 


<?php print page_content('developer-guide/working-with-modules/_nav'); ?> 