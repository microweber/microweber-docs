<?php if(!defined('ONE')){
	header("Location: index");

} ?>
<h2>Module hooks</h2>
<p> You can use hooks if you want to insert custom scripts or modules at different places in the system.</p>
<h3>Where to put hooks.</h3>
<p>Put hooks in your module's <code>functions.php </code>file. </p>
<p>If you do not have this file you must create it in the module folder. For example <code>userfiles/modules/my_module/functions.php</code></p>
<p>If the file is not loaded please delete the system cache from admin-&gt;advanced-&gt;clear cache</p>
<h3>How to attach functions to hooks</h3>
<pre class="prettyprint"><code class="language-php">action_hook('hook_name','my_callback_function');
</code></pre>
<p>Typical hook function</p>
<pre class="prettyprint"><code class="language-php">action_hook('name_of_the_hook','my_custom_hook_function');

function my_custom_hook_function($params=false){
	//do stuff
	return $params;
}</code></pre>
<p>&nbsp;</p>
<p>There are few hook types</p>
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
<p>With this hook you can modify the site header. Additionally you can use 
<a href="<?php print site_url(); ?>functions/template_header">template_header</a> function to add scripts and css to the site. Here is how you can append script in the <code>&lt;head&gt;</code> tag with this hook.</p>
<p><code>functions.php</code> file in your module folder</p>
 
<pre class="prettyprint"><code class="language-php">action_hook('site_header','my_custom_site_header_hook_function');

function my_custom_site_header_hook_function($params=false){
    $module_folder = __DIR__;
    $module_js = dir2url($module_folder.DS.'my_script.js');
    $output = &quot;&lt;script src='{$module_js}'&gt;&lt;/script&gt;&quot;;
    return $output;
}</code></pre>
<p>&nbsp;</p>
<h3>Live edit hooks</h3> <hr />


<table class="table table-striped table-hover params-table">
  <thead>
    <tr>
      <th>hook name</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">mw_live_edit_content_toolbar_menu_start</code></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code class="language-php">mw_live_edit_content_toolbar_menu_end</code></td>
      <td>&nbsp;</td>
    </tr>
    
    
    <tr>
      <td><code class="language-php">mw_live_edit_content_quick_add_menu_start</code></td>
      <td>&nbsp;</td>
    </tr>
    
    
    <tr>
      <td><code class="language-php">mw_live_edit_content_quick_add_menu_end</code></td>
      <td>&nbsp;</td>
    </tr>
    
    
    <tr>
      <td><code class="language-php">mw_after_editor_toolbar</code></td>
      <td>&nbsp; </td>
    </tr>
    
      <tr>
      <td><code class="language-php">mw_editor_btn</code></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code class="language-php">rte_image_editor_image_search</code></td>
      <td>&nbsp;</td>
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
       <td><code class="language-php">mw_admin_header_menu</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_header_menu_start</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_header_menu_end</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_dashboard_quick_link</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_dashboard_help_link</code></td>
       <td>&nbsp;</td>
     </tr>
   </tbody>
 </table>
 <p>&nbsp;</p>
<h3>Admin content hooks</h3>
 <hr />
 
 <p>&nbsp; </p>
<table class="table table-striped table-hover params-table">
   <thead>
     <tr>
       <th>hook name</th>
       <th>description</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td><code class="language-php">mw_admin_content_right_sidebar_menu_list_start</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_content_right_sidebar_menu_list_end</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_content_side_menu_start</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_admin_shop_side_menu_end</code></td>
       <td>&nbsp;</td>
     </tr>
     <tr>
       <td><code class="language-php">mw_edit_page_admin_menus</code></td>
       <td>&nbsp;</td>
     </tr>
       <tr>
       <td><code class="language-php">mw_admin_edit_page_after_menus</code></td>
       <td>&nbsp;</td>
     </tr>
       <tr>
       <td><code class="language-php">mw_edit_product_admin</code></td>
       <td>&nbsp;</td>
     </tr>
       <tr>
       <td><code class="language-php">mw_admin_edit_page_footer</code></td>
       <td>&nbsp;</td>
     </tr>
       <tr>
       <td><code class="language-php">mw_admin_settings_menu</code></td>
       <td>&nbsp;</td>`
     </tr>
   </tbody>
 </table>
 <p>&nbsp;</p>
 
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
       <td><code class="language-php">mw_admin_content_right_sidebar_menu_list_end</code></td>
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
<?php print page_content('developer-guide/making-a-module/_nav'); ?> 