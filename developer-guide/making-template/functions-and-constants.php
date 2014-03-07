<?php if(!defined('ONE')){
	header("Location: index");

} ?>

<h2>Template functions and constans</h2>
<p id="row_1390920629610">Here you will find the functions, constants and variables that are available in every page of your site.</p>
<p id="row_1390920629611">You can use them also in your modules<br />
</p>
<h4>Template Constants</h4>
<p id="row_1390920629611">These are related to your template URL and folder </p>
<table class="table table-hover">
  <tbody>
    <tr>
      <td >Constant<br /></td>
      <td >Example value<br /></td>
    </tr>
    <tr>
      <td ><code>TEMPLATE_URL</code></td>
      <td >http://example.com/userfiles/templates/my_template/</td>
    </tr>
    <tr>
      <td ><code>TEMPLATE_DIR</code></td>
      <td >/home/user/public_html/userfiles/templates/my_template/</td>
    </tr>
  </tbody>
</table>
<h4>Content Constants</h4>
<p id="row_1390920629611">Related to the content of the current page </p>
<table class="table table-hover">
  <tbody>
    <tr>
      <td >Constant<br /></td>
      <td >Example value</td>
    </tr>
    <tr>
      <td ><code>PAGE_ID</code></td>
      <td >The id of the current page or 0 if page is not found<br /></td>
    </tr>
    <tr>
      <td ><code>POST_ID</code></td>
      <td >The id of the current post or 0 if you are not in a post<br /></td>
    </tr>
    <tr>
      <td ><code>CATEGORY_ID</code></td>
      <td >The id of the current category or 0 if you are not in a category</td>
    </tr>
    <tr>
      <td ><br /></td>
      <td ><br /></td>
    </tr>
    <tr>
      <td ><code>MAIN_PAGE_ID</code></td>
      <td > The id of the parent page if you are in a subpage<br /></td>
    </tr>
    <tr>
      <td ><code>ROOT_PAGE_ID</code></td>
      <td > The id of the main parent page if you are in deep sub-page<br /></td>
    </tr>
  </tbody>
</table>
<br id="temp1390920629498" />
<h4>Content variables</h4>
<p id="row_1390920629611">Related to the content of the current page. You can use those variables inside your template layouts, but not in the modules</p>
<table class="table table-hover">
  <tbody>
    <tr>
      <td ><code>$content</code></td>
      <td >Array of the current content item, it can be page or post<br /></td>
    </tr>
    <tr>
      <td ><code>$page</code></td>
      <td >Array with the data for the current page<br /></td>
    </tr>
    <tr>
      <td ><code>$post</code></td>
      <td >Array with the data for the current post</td>
    </tr>
    <tr>
      <td ><br /></td>
      <td > </td>
    </tr>
  </tbody>
</table>
<h4>Template functions</h4>
<p>If you need to write custom functions for your template, you just have to make a file called <code>functions.php</code> in your template folder. All functions you write in this file are available in the site and the admin panel</p>
<p id="row_1390920629611">You can also use those functions to get the template info</p>
<?php print page_content('functions/_nav/template'); ?>

<p>Knowing this basic information you can continue creating your template by <a class="<?php if(url_path() == 'developer-guide/making-template/basic-files') print "active" ; ?>" href="<?php print site_url(); ?>developer-guide/making-template/basic-files"><strong>Adding header and footer</strong></a> and then <a class="<?php if(url_path() == 'developer-guide/making-template/layouts') print "active" ; ?>" href="<?php print site_url(); ?>developer-guide/making-template/layouts"><strong>Adding layouts</strong></a></p>
