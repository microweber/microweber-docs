<?php if(!defined('ONE')){
	header("Location: index");

} ?>

<h2>Modules basics</h2>
<p id="row_1390907957202">The Microweber modules will help you to make easy modifications and add functionality to your pages.</p>
<p id="row_1390907957203">Every module is a PHP script that executes when the user have dropped it into a page. It works as a stand alone script, but it have access to all Microweber functions.</p>
<p>In the most cases the modules are the &quot;blocks&quot; that you drag and drop around your website. Such as gallery, menu, contact form and others.</p>
<p>The modules can work independently of the content and the &quot;design&quot; of the site and can even have their own templates </p>
<pre class="codettyprint"><code class="language-php">- userfiles
    - modules
      - my_module
        config.php
        index.php
        admin.php
        functions.php
        my_module.png
</code></pre>
<strong>What every file does?</strong><br />
<table   class="table table-hover">
  <tbody>
    <tr>
      <td  >config.php</td>
      <td  >this file contains the name and the version of your module<br /></td>
    </tr>
    <tr>
      <td  >index.php</td>
      <td  >this file loads when you drop the module or load the module <br /></td>
    </tr>
    <tr>
      <td >functions.php</td>
      <td >optional file, if your module have custom functions you can put them here<br /></td>
    </tr>
    <tr>
      <td >admin.php</td>
      <td >when someone opens the module settings from the admin or from the live edit, this file is loaded<br /></td>
    </tr>
    <tr>
      <td ><em>your_module_name</em>.png</td>
      <td > optional icon for your module (size 32x32). The file must be with the same name as your folder<br /></td>
    </tr>
  </tbody>
</table>
<h4>Writing custom module functions</h4>
<p id="row_1390907957216">Making <strong><code>functions.php</code></strong> file is optional and in it you can add code that loads with Microweber at start. </p>
<p>When you install your module, this functions.php file is loaded in the system <strong>on every page</strong>. The code that you put there is available in all pages and in all other modules.</p>

<h3>How to create a module</h3>
<p>All modules are located in the folder <code>userfiles/modules</code>. For example we will make new folder called <code>my_module</code>. </p>
<p>After this make a <strong>config.php</strong> file at <code>userfiles/modules/my_module/config.php</code></p>
<pre class="prettyprint"><code class="language-php">&lt;?php
$config = array();
$config['name'] = &quot;My module&quot;;
$config['author'] = &quot;Microweber&quot;;
$config['description'] = &quot;My module is awesome&quot;;
$config['website'] = &quot;http://example.com&quot;; 
$config['help'] = &quot;http://example.com/help&quot;; 
$config['version'] = 0.1;
$config['ui'] = true;
$config['ui_admin'] = true;
$config['categories'] = &quot;content&quot;;
$config['position'] = 100; </code></pre>
<p>Click on admin-&gt;modules-&gt;reload modules then install your module 
</p>
<p>Here is a <a href="<?php print site_url(); ?>assets/examples/my_module.zip" class="btn">sample module</a> that you can use as a base. Unzip it in the <code>userfiles/modules</code> folder <br />
</p>

<?php print page_content('developer-guide/making-a-module/_nav'); ?> 