<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h2>Basic template files</h2>
<p>Every site needs to have certain structure and files which will display the layout.</p>
<p>In the most common case we will need header, footer and a place to add our content.</p>
<img src="<?php print site_url() ?>assets/img/basic-template-files.png" style="max-width:650px;" />
<p>&nbsp;</p>
<p>The following layout files are required for any template. Also you cam add as many layouts as you wish.</p>
 
<table border="0"  class="table table-hover">
  <tr>
    <td>File</td>
    <td>Desctiption</td>
  </tr>
  <tr>
    <td><code>config.php</code></td>
    <td>Set the name of your template and other info</td>
  </tr>
  <tr>
    <td><code>header.php</code></td>
    <td>File to load scripts and CSS files and the opening &lt;body&gt; tag</td>
  </tr>
  <tr>
    <td><code>footer.php</code></td>
    <td>Put footer information and closing &lt;/body&gt; tag in this file</td>
  </tr>
  <tr>
    <td><code>index.php</code></td>
    <td>Default layout for pages</td>
  </tr>
  <tr>
    <td><code>inner.php</code></td>
    <td>Default layout for posts</td>
  </tr>
  <tr>
    <td><code>clean.php</code></td>
    <td>Layout for empty page</td>
  </tr>
</table>
<h3>Loading static files (css,javascripts,etc..)</h3>
<p>In the common case every template have a lot of files, those may be images, css files, javascripts and what not.
  
  You can put those files in the template folder and load them using the <code>TEMPLATE_URL</code> constant or <code>template_url()</code> function: </p>
<pre class="prettyprint"><code class="language-php">&lt;link href=&quot;&lt;?php print TEMPLATE_URL; ?&gt;style.css&quot; rel=&quot;stylesheet&quot; &gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;&lt;?php print TEMPLATE_URL; ?&gt;scripts.js&quot;&gt;&lt;/script&gt;</code></pre>
<h3>&nbsp;</h3>
<h3>Set the name of your template</h3>
<strong>config.php</strong>
<p id="row_1390906260184">This file holds the name of your template and its version. <br />
</p>
<p id="row_1390906260185">Here is example config file you must create in your template folder<br />
</p>
<p id="row_1390906260186"><strong>userfiles/templates/my_template/config.php</strong></p>
<pre id="row_1390906260187">&lt;?php<br />$config = array();<br />$config['name'] = &quot;My template&quot;;<br />$config['author'] = &quot;Your name&quot;;<br />$config['version'] = 0.1;<br />$config['url'] = &quot;http://example.com/&quot;;<br />
  </pre>
<p id="row_1390906260188">The config file defines the name of your template as it will appear in the &quot;Template selection&quot; menu and in the &quot;Settings&quot; area.</p>
<p id="row_1390906260189">The <em>version </em>parameter is optional and its used if you want to offer updates.</p>
<p id="row_1390906260190">After making the config.php file you must create the other necessary files.</p>




<h3>Create basic layout files</h3>

<p id="row_1390906260191"><strong>header.php</strong></p>
<p id="row_1390906260192">Here you can load the template stylesheet(s) or any javascript files.</p>
<p id="row_1390906260193">You can use <a href="<?php print site_url(); ?>developer-guide/making-template/functions-and-constants">TEMPLATE_URL</a> constant to point to your template's URL.</p>
 
 
 
 
 
 
 <pre class="prettyprint"><code class="language-php">&lt;!DOCTYPE HTML&gt;<br />&lt;html prefix=&quot;og: http://ogp.me/ns#&quot;&gt;<br />    &lt;head&gt;<br />    &lt;title&gt;How to make a template&lt;/title&gt;<br />    <br />     &lt;link rel=&quot;stylesheet&quot; href=&quot;&lt;?php print TEMPLATE_URL; ?&gt;style.css&quot; type=&quot;text/css&quot; media=&quot;all&quot;&gt;<br /><br />    &lt;/head&gt;<br />&lt;body&gt;<br />&lt;div id=&quot;header&quot; class=&quot;edit&quot; field=&quot;header&quot; rel=&quot;global&quot;&gt;<br /> Welcome to my site<br />&lt;/div&gt;</code></pre>
 
 
 
 
 
 
 
 
 
 
<p id="row_1390906260195"><strong>index.php</strong></p>
<p id="row_1390906260196">You can create a layout from any file. All you have to do is add a few php comment lines at the beginning of your file. </p>
<div id="row_1390906260197">
  <div id="row_1390906260198">
    <p id="row_1390906260199">The <a href="<?php print site_url(); ?>developer-guide/making-template/functions-and-constants">TEMPLATE_DIR</a> constant represents the absolute path to your template directory. You can use it to include any other files in your layout.</p>
  </div>
  <p id="row_1390906260200">Most of the time index.php is  the home page of your website. To change the home page, you need to  select the Advanced tab and select &ldquo;Is Home&rdquo; radio button in the &quot;Add  page&quot; screen.</p>
</div>
 <pre class="prettyprint"><code class="language-php">&lt;?php<br />/*<br />  type: layout<br />  content_type: static<br />  name: Home<br />  description: Home layout<br />*/<br />?&gt;<br />&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;<br /><br />&lt;div class=&quot;container&quot;&gt;<br />    &lt;div class=&quot;edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;<br />    This is my page text<br />    &lt;/div&gt;<br />&lt;/div&gt;<br /><br />&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;</code></pre>
<p id="row_1390906260202"><strong>footer.php</strong></p>
 <pre class="prettyprint"><code class="language-php">&lt;div id=&quot;footer&quot; class=&quot;edit&quot; field=&quot;footer&quot; rel=&quot;global&quot;&gt; <br /><br />Copyright &amp;copy; &lt;?php print date('Y');  ?&gt; All rights reserved<br />     <br />&lt;/div&gt;<br />&lt;/body&gt;&lt;/html&gt;</code></pre>
The above code will end up with this result on the <em>Add page </em>screen.<br />
<br />
<img id="row_1390906260204"   src="http://microweber.com/userfiles/media/mw_template_basic_layout.png" contenteditable="false" />

<h4>Sample templates</h4>
<ul>
  <li><a href="https://github.com/microweber/skeleton-template" target="_blank">Skeleton</a></li>
  <li><a href="https://github.com/microweber/liteness-template" target="_blank">Liteness</a></li>
</ul>

<br />
<h4>Read more</h4>
<?php print page_content('developer-guide/making-template/_nav'); ?> 