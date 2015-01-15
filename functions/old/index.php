<?php if(!defined('ONE')){
	header("Location: index");

} ?>


<h2>Microweber functions</h2>
<p>Microweber comes with a lot of functions to help you get and save things in your website. In most cases those functions are simple wrappers to the more complex OOP core. </p>
<p>You can use them while you develop your site. The functions are defined into the system on load and they are globally available in the core, the site templates and modules. </p>
<h3>Writing custom functions</h3> 
<p>There the few ways to write custom functions.</p>
<ol>
  <li>To add functions with a module, create <code>functions.php</code> file inside your module folder</li>
  <li>To add function when certain site template is active, create <code>functions.php</code> file inside the site template folder</li>
  <li>To make custom functions available only on your application create a file at <code>/src/Microweber/functions/my_functions.php</code></li>
</ol>
<p>&nbsp;</p>




<h3>Explore the  functions bellow</h3>
<p>You can call them inside your templates and modules.</p>

<?php print page_content('functions/_nav/index'); ?>