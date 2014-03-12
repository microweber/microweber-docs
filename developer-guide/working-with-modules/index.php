<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h2>What is a module</h2>
<p id="row_1390907957202">The Microweber modules will help you to make easy modifications and add functionality to your pages.</p>
<p id="row_1390907957203">Every module is a PHP script that executes when the user have dropped it into a page. It works as a stand alone script, but it have access to all Microweber functions.</p>
<p>In the most cases the modules are the &quot;blocks&quot; that you drag and drop around your website. Such as gallery, menu, posts, categories, contact form and others.</p>
<p>For example on this screenshot all red fields are different modules used for making a site.</p>
<p><img src="<?php print site_url(); ?>assets/img/what-is-a-module.jpg" /></p>
<p>The modules can work independently of the content and the &quot;design&quot; of the site and can even have their own templates </p>
<p>Microweber comes with a lot <a href="<?php print site_url(); ?>modules">default modules</a> that you can use and extend. Also feel free to write your own modules. </p>
<h3>Where to find modules</h3>
<p>Each module have its own folder located at <code>userfiles/modules/</code></p>
<?php print page_content('developer-guide/working-with-modules/_nav'); ?> 