<?php if(!defined('ONE')){
	header("Location: index");

} ?>

<h2>Module hooks</h2>
<p> You can use hooks if you want to insert custom scripts or modules at different places in the system.</p>
<h3>Where to put hooks.</h3>
<p>Put hooks in your module's <code>functions.php </code>file. </p>
<p>If you do not have this file you must create it in the module folder. For example <code>userfiles/modules/my_module/functions.php</code></p>
<p>If the file is not loaded please delete the system cache from admin-&gt;advanced-&gt;clear cache</p>
<p>Click here to <a href="<?php print site_url(); ?>assets/examples/my_hooks_test.zip" >download example module</a> and open functions.php file.
</p>



<h3>How to attach functions to hooks</h3>
<pre class="prettyprint"><code class="language-php">action_hook('hook_name','my_callback_function');
</code></pre>
<p>Typical hook function</p>
<pre class="prettyprint"><code class="language-php">action_hook('name_of_the_hook','my_custom_hook_function');

function my_custom_hook_function($params=false){
	//do stuff
	print 'my code';
}</code></pre>
<p>&nbsp;</p>
<h3>On-load hooks</h3>
<hr />
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">on_load</code></td>
      <td>execute background functions</td>
    </tr>
    <tr>
      <td><code class="language-php">site_header</code></td>
      <td>append to the site <code>&lt;head&gt;</code> tags</td>
    </tr>
  </tbody>
</table>
<h4>&nbsp;</h4>
<h4>on_load</h4>
<p>This hook allows you to execute background functions. It is trigger on page load before the module tags are processed.</p>
<pre class="prettyprint"><code class="language-php">action_hook('on_load','my_on_load_callback_function');
</code></pre>
<h4>site_header</h4>
<p>With this hook you can add html to the site header. Additionally you can use <a href="<?php print site_url(); ?>functions/template_header">template_header</a> function to add scripts and css to the site. Here is how you can append script in the <code>&lt;head&gt;</code> tag with this hook.</p>
<p><code>functions.php</code> file in your module folder</p>
<pre class="prettyprint"><code class="language-php">action_hook('site_header','my_custom_site_header_hook_function');

function my_custom_site_header_hook_function($params=false){
    $module_folder = __DIR__;
    $module_js = dir2url($module_folder.DS.'my_script.js');
    $output = &quot;&lt;script src='{$module_js}'&gt;&lt;/script&gt;&quot;;
    return $output;
}</code></pre>
<p>&nbsp;</p>
<h3>Live edit hooks</h3>
<p>These hooks are executed when the user is in "Live edit" mode.</p>
<hr />
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">live_edit_toolbar_menu_start</code></td>
      <td>Executed in the beginning of the &quot;Live edit&quot; toolbar menu</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_menu_end</code></td>
      <td>Executed in the end of the &quot;Live edit&quot; toolbar menu</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_quick_add_menu_start</code></td>
      <td>Executed inside the &quot;+Add&quot; button in the live edit</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_quick_add_menu_end</code></td>
      <td>Executed at the end of the &quot;+Add&quot; button in the live edit</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_btn</code></td>
      <td>Executed at the end of the toolbar text formatting buttons</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_action_buttons</code></td>
      <td>Executed before the &quot;Actions&quot; button in the live edit</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_action_menu_start</code></td>
      <td>Executed before the first item of the &quot;Actions&quot; button</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_action_menu_middle</code></td>
      <td>Executed in the middle of the &quot;Actions&quot; menu</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_action_menu_end</code></td>
      <td>Executed at the end of the menu</td>
    </tr>
    <tr>
      <td><code class="language-php">live_edit_toolbar_controls</code></td>
      <td>Executed after the main toolbar controls</td>
    </tr>
  </tbody>
</table>
<h3>Admin hooks</h3>
<hr />
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">admin_head</code></td>
      <td>Useful to print scripts in the admin <code>&lt;head&gt;</code></td>
    </tr>
    <tr>
      <td><code class="language-php">admin_header_menu_start</code></td>
      <td>Executed at start of the admin panel main navigation menu</td>
    </tr>
    <tr>
      <td><code class="language-php">admin_header_menu</code></td>
      <td>Executed at the middle of the admin panel main navigation menu</td>
    </tr>
    <tr>
      <td><code class="language-php">admin_header_menu_end</code></td>
      <td>Executed at the end of the admin panel main navigation menu</td>
    </tr>
  </tbody>
</table>
<p>&nbsp;</p>
<h3>Admin &quot;Website&quot; section hooks</h3>
<hr />
<p>These hooks are executed when the user is in the &quot;Website&quot; section in the admin panel.</p>
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">admin_content_side_menu</code></td>
      <td>Executed after the &quot;Add content buttons'</td>
    </tr>
    <tr>
      <td><code class="language-php">admin_shop_side_menu</code></td>
      <td>&nbsp;</td>
    </tr> <tr>
      <td><code class="language-php">admin_content_after_website_tree</code></td>
      <td>Executed after the website tree module in the admin </td>
    </tr>
  </tbody>
</table>
<p>&nbsp;</p>
<h3>Admin edit content hooks</h3>
<p>These hooks are executed when the user goes on the "Edit page" section in the admin panel</p>
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">mw_admin_edit_page_tabs_nav</code></td>
      <td>Executed inside the tab navigation.</td>
    </tr>
  
    <tr>
      <td><code class="language-php">mw_admin_edit_page_tab_1</code></td>
      <td>Executed in the 1st tab of the edit content screen</td>
    </tr>
     <tr>
      <td><code class="language-php">mw_admin_edit_page_tab_2</code></td>
      <td>Executed in the 2nd tab of the edit content screen</td>
    </tr>
     <tr>
      <td><code class="language-php">mw_admin_edit_page_tab_3</code></td>
      <td>Executed in the 3rd tab of the edit content screen</td>
    </tr>
    <tr>
      <td><code class="language-php">mw_admin_edit_page_tab_4</code></td>
      <td>Executed in the 4th tab of the edit content screen</td>
    </tr>
    <tr>
      <td><code class="language-php">mw_admin_edit_page_tabs_end</code></td>
      <td>Executed after the last tab of the edit content screen</td>
    </tr>
  </tbody>
</table>
<p>&nbsp;</p>
<h3>User login hooks</h3>
<hr />
<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">before_user_login</code></td>
      <td>&nbsp;</td>
    </tr>
    
    <tr>
      <td><code class="language-php">before_user_register</code></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code class="language-php">after_user_register</code></td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<p>&nbsp;</p>
<h4>Sample hooks file</h4>
<p><a href="https://gist.github.com/peter-mw/9935640" target="_blank">functions.php</a>
 - put this file in your module's folder</p>
 


<p>&nbsp;</p>
<?php print page_content('developer-guide/making-a-module/_nav'); ?> 