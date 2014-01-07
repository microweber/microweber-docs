
<h2>save_content_admin</h2>
<p>save_content_admin — Saves content in the DB with user validation</p>
<h3>Synopsis</h3>
<pre><code>save_content_admin(array $data_to_save)
</code></pre>
<h3>Description</h3>
<p>  
	This function is the same as <a href="<?php print site_url(); ?>functions/save_content">save_content</a>, but validates user permissions </p>
<h4>Ajax/REST</h4>
<blockquote> This function is also available via the REST API at http://yoursite.com/api/save_content_admin . If you save content via AJAX/REST, then first you must login. The user that saves the content must be admin, or the content must be saved in a category that allows it. Also a captcha is required for non admin users. </blockquote>
