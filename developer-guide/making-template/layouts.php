<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h2>Adding layouts</h2>
<h4 id="row_1390906260170">Each template is made of &quot;layouts&quot;<br />
</h4>
<p>In Microweber every template can have multiple layouts. Besides a simple page, you can make different page layouts that can be used by the users and chosen at the page creation process.</p>
<p>Example of layouts usage is to allow the user to have different looking pages for their blog, shop or contact us</p>
<p id="row_1390906260171"><img id="row_1390906260172"  src="<?php print site_url(); ?>assets/img/explore_layouts.gif"  /></p>
<p id="row_1390906260173">Think of layouts as &quot;pages&quot; of your template. You can have just one layout... or as many as you like. </p>
<p id="row_1390906260174">Microweber allows you to have different layouts for different pages in your site. Although each page layout can be different you can define common regions such as a &ldquo;header&quot;, &ldquo;footer&quot; and a &ldquo;sidebar&rdquo; to share among layouts.</p>
<h3>Layouts location</h3>
<p>The layouts are located in your template folder. For example: <code>userfiles/templates/my_template/</code></p>
<h3 id="row_1390906260205">Creating layouts</h3>
<p id="row_1390906260207">The layout files are simply <code>.php</code> files located in any subfolder of yout template. Microweber reconizes a layout file by scanning the template folder for php files which contains the following code in them.</p>
<pre class="prettyprint"><code class="language-php">&lt;?php
/*
  type: layout
  name: My layout
  description: My sample layout
*/
?&gt;</code></pre>
<p>To create a layout simply make a new <code>.php</code> file in your template folder  For example: <code>userfiles/templates/my_template/portfolio-page.php</code>, and put the above code at the top of it.</p>
<p>The vast majority of  sites need more complex structure and that can be accomplished by adding  a variety of page layouts to your template folder.</p>
<p id="row_1390906260208">Those page layouts can  show content from the current page or from other places. They can even  have shared common editable regions.  All you need to do is include  modules and write custom php code (logic) in the layout file. <br />
</p>
<p id="row_1390906260209">Here, for example, is how we would make a layout for a blog page with a posts module and a sidebar.</p>

<h4>Creating homepage layout</h4>  
<code>index.php</code>
<p> This layout serves as homepage layout and also as a default layout when no other layout can be found. Now its time to add some content in the homepage</p>
<p id="row_1390906260239">  
  Open the <strong>index.php</strong> file and add this code to it</p>
   <pre class="prettyprint"><code class="language-php">&lt;?php<br />/*<br />  type: layout<br />  content_type: static<br />  name: Home<br />  description: Home layout<br />*/<br />?&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;<br />&lt;div class=&quot;container&quot;&gt;<br />	&lt;div class=&quot;edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;<br />		&lt;h2&gt;Welcome to my homepage&lt;/h2&gt;<br />		&lt;p&gt;This is my Microweber template&lt;/p&gt;<br />		&lt;p&gt;You are able to create your own Website, Blog, Online Shop or anything you need, for free.&lt;/p&gt;<br />	&lt;/div&gt;<br />&lt;/div&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
   
   
   
<h4 id="row_1390906260205">Creating blog layout</h4>
<p id="row_1390906260210"><code>blog.php</code></p>
<pre class="prettyprint"><code class="language-php">&lt;?php

/*

  type: layout
  content_type: dynamic
  name: Blog
  description: Blog layout

*/

?&gt;
&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;

&lt;div class=&quot;container&quot;&gt;
    &lt;h1 class=&quot;post-title edit&quot; rel=&quot;content&quot; field=&quot;title&quot;&gt;Welcome to my blog&lt;/h1&gt;
    &lt;div class=&quot;blog-content edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;
        &lt;p&gt;Check out my posts&lt;/p&gt;
        &lt;module type=&quot;posts&quot; /&gt;
    &lt;/div&gt;
    
    &lt;div class=&quot;blog-sidebar edit&quot; field=&quot;sidebar&quot; rel=&quot;inherit&quot;&gt;
    My sidebar
    &lt;/div&gt;
&lt;/div&gt;

&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
<h4 id="row_1390906260205">Creating inner page</h4>
<p id="row_1390906260212"><code>inner.php</code><br />
</p>
<p id="row_1390906260213">We can have an inner page to show the <em>posts</em> added to our blog. Otherwise the content will be shown in the blog.php layout. </p>
<p id="row_1390906260214">You can achieve even more flexibility by creating a file blog_inner.php to show posts added the blog layout.</p>
<pre class="prettyprint"><code class="language-php">&lt;?php

/*

  type: layout
  content_type: static
  name: Post
  description: Post layout

*/

?&gt;
&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;

&lt;div class=&quot;container&quot;&gt;
    &lt;h1 class=&quot;post-title edit&quot; rel=&quot;content&quot; field=&quot;title&quot;&gt;Welcome to my post&lt;/h1&gt;
    &lt;div class=&quot;blog-post edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;
        &lt;p&gt;My post content&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;blog-comments edit&quot; field=&quot;post-comments&quot; rel=&quot;content&quot;&gt;
        &lt;module type=&quot;comments&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;blog-sidebar edit&quot; field=&quot;sidebar&quot; rel=&quot;inherit&quot;&gt; My sidebar &lt;/div&gt;
&lt;/div&gt;

&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
<p id="row_1390906260216">Notice that we added two editable regions and comments module to our inner layout.<br />
</p>
<h2 id="row_1390906260233">Adding CSS styles</h2>
<code>header.php</code>
<p id="row_1390906260234">We will use Bootstrap in our example template. Of course you can use any CSS framework or custom CSS.</p>
 
<p>Adding bootstrap to <strong>header.php</strong> file and adding the main site navigation menu module:</p>
<div id="row_1390906260236">
  <pre class="prettyprint"><code class="language-php">&lt;!DOCTYPE HTML&gt;<br />&lt;html prefix=&quot;og: http://ogp.me/ns#&quot;&gt;<br />&lt;head&gt;<br />&lt;title&gt;How to make a template?&lt;/title&gt;<br />&lt;link rel=&quot;stylesheet&quot; href=&quot;&lt;?php print TEMPLATE_URL; ?&gt;style.css&quot; type=&quot;text/css&quot; media=&quot;all&quot;&gt;<br />&lt;link rel=&quot;stylesheet&quot; href=&quot;&lt;?php print TEMPLATE_URL; ?&gt;css/bootstrap.css&quot; type=&quot;text/css&quot; media=&quot;all&quot;&gt;<br />&lt;/head&gt;<br />&lt;body&gt;<br />&lt;div id=&quot;header&quot;&gt;<br />	&lt;div class=&quot;edit&quot; rel=&quot;global&quot; field=&quot;header&quot;&gt;<br />		&lt;div class=&quot;row&quot;&gt;<br />			&lt;div class=&quot;col-md-4&quot;&gt;<br />			&lt;h1&gt;&lt;a href=&quot;&lt;?php print site_url(); ?&gt;&quot;&gt;My template&lt;/a&gt;&lt;/h1&gt;<br />			&lt;/div&gt;<br />			&lt;div class=&quot;col-md-8&quot;&gt;<br />			&lt;module type=&quot;menu&quot; name=&quot;header_menu&quot; id=&quot;main-navigation&quot; template=&quot;pills&quot;  /&gt;<br />			&lt;/div&gt;<br />		&lt;/div&gt;<br />	&lt;/div&gt;<br />&lt;/div</code></pre>
</div>
<div id="row_1390906260237">
  <p id="row_1390906260238">We have included our CSS file and added some classes and structure in the header.<br />
  </p>
</div>

  <div id="row_1390906260241">
    <div id="row_1390906260242">
      <p id="row_1390906260243">You should see this output at the create page screen</p>
    </div>
    <div id="row_1390906260244">
      <p id="row_1390906260245"><img id="row_1390906260246" src="http://microweber.com/userfiles/media/mw_add_page_admin_new_home.png" /></p>
    </div>
  </div>
  <div id="row_1390906260247">
    <p id="row_1390906260248">Now we should get busy with our blog. </p>
  </div>
  <div id="row_1390906260249">
    <p id="row_1390906260250">Lets modify the <strong>blog.php</strong> file and move the sidebar to separate file. </p>
    <p><code>blog.php</code></p>
  </div>
 
<div id="row_1390906260251">
  <pre class="prettyprint"><code class="language-php">&lt;?php<br />/*<br />  type: layout<br />  content_type: dynamic<br />  name: Blog<br />  description: Blog layout<br />*/<br />?&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;<br />&lt;div class=&quot;container&quot;&gt;<br />	&lt;div class=&quot;row&quot;&gt;<br />		&lt;div class=&quot;col-md-8&quot;&gt;<br />			&lt;h1 class=&quot;post-title edit&quot; rel=&quot;content&quot; field=&quot;blog-title&quot;&gt;Welcome to my blog&lt;/h1&gt;<br />			&lt;div class=&quot;blog-content edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;<br />				&lt;p&gt;Here are my latest posts&lt;/p&gt;<br />				&lt;module type=&quot;posts&quot; /&gt;<br />			&lt;/div&gt;<br />		&lt;/div&gt;<br />		&lt;div class=&quot;col-md-4&quot;&gt;<br />			&lt;?php include TEMPLATE_DIR. &quot;sidebar.php&quot;; ?&gt;<br />		&lt;/div&gt;<br />	&lt;/div&gt;<br />&lt;/div&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
  <div id="row_1390906260252">
    <p id="row_1390906260253">Now create file called <strong>sidebar.php</strong> with the following code</p>
    <p><code>sidebar.php</code></p>
  </div>
</div>
<div id="row_1390906260254">
  <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;blog-sidebar edit&quot; field=&quot;sidebar&quot; rel=&quot;inherit&quot;&gt;<br />	&lt;h2&gt;Categories&lt;/h2&gt;<br />	&lt;module type=&quot;categories&quot; /&gt;<br />	&lt;h2&gt;Other pages&lt;/h2&gt;<br />	&lt;module type=&quot;pages&quot; /&gt;<br />&lt;/div&gt;</code></pre>
  <div id="row_1390906260255">
    <div id="row_1390906260256">
      <p id="row_1390906260257">You should see the following result: </p>
    </div>
  </div>
  <div id="row_1390906260258">
    <p id="row_1390906260259"><img id="row_1390906260260" src="http://microweber.com/userfiles/media/mw_add_page_admin_new_blog.png" /></p>
  </div>
  <h3>Create layout for posts and products</h3>
  <div id="row_1390906260263">
    <p id="row_1390906260264">Now that we have created a blog layout, we want to have sepetate layout for displayning blog posts. Lets display our post content by making a file called <strong>inner.php</strong> This file will be used as default layout for posts. </p>
    <p>If you want to have multiple inner pages, you can make a file called blog_inner.php and all posts that are in a page with 'blog' layout will use it.</p>
  </div>
  <div id="row_1390906260265">
    <p id="row_1390906260266">Now we will add comments module and include our sidebar.php that we have created above</p>
    <p><code>inner.php</code></p>
  </div>
</div>
<div id="row_1390906260267">
  <pre class="prettyprint"><code class="language-php">&lt;?php<br />/*<br />  type: layout<br />  content_type: static<br />  name: Post<br />  description: Post layout<br />*/<br />?&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;<br />&lt;div class=&quot;container&quot;&gt;<br />	&lt;div class=&quot;row&quot;&gt;<br />		&lt;div class=&quot;col-md-8&quot;&gt;<br />			&lt;h1 class=&quot;post-title edit&quot; rel=&quot;content&quot; field=&quot;title&quot;&gt;Welcome to my post&lt;/h1&gt;<br />			&lt;div class=&quot;blog-post edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;<br />				&lt;p&gt;My post content&lt;/p&gt;<br />			&lt;/div&gt;<br />			&lt;div class=&quot;blog-comments edit&quot; field=&quot;post-comments&quot; rel=&quot;content&quot;&gt;<br />				&lt;module type=&quot;comments&quot; /&gt;<br />			&lt;/div&gt;<br />		&lt;/div&gt;<br />		&lt;div class=&quot;col-md-4&quot;&gt;<br />			&lt;?php include TEMPLATE_DIR. &quot;sidebar.php&quot;; ?&gt;<br />		&lt;/div&gt;<br />	&lt;/div&gt;<br />&lt;/div&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
  <div id="row_1390906260268">
    <p id="row_1390906260269">Now we should be ready with our simple blog post template. All the content the user adds from the admin will be shown in the area with the attributes <code>field="content"</code> and <code>rel="content</code>"</p>
  </div>
</div>
<div id="row_1390906260270"> <a href="https://github.com/microweber/skeleton-template">Download source</a> </div>
<p>&nbsp;</p>
<?php print page_content('developer-guide/making-template/_nav'); ?> 