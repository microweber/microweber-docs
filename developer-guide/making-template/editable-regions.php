<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>
<h2>Editable regions</h2>
<div id="row_1390926495160">
  <div data-mw-title="Text" data-type="text" id="row_1390926495161">
    <p id="row_1390926495162">The editable regions are the places where the users can drag and drop modules and edit content in real time. <br />
    </p>
    <p id="row_1390926495163">You can define as few or as many regions that you like</p>
  </div>
  <h4 id="row_1390906260217">Editable regions</h4>
  <div data-mw-title="Text" data-type="text" id="row_1390906260218">
    <p id="row_1390906260219">Every layout can have a number of editable regions. </p>
  </div>
  <div data-mw-title="Text" data-type="text" id="row_1390906260220">
    <p id="row_1390906260221">They are defined by adding &quot;edit&quot; class and &quot;field&quot; and &quot;rel&quot; attributes to ANY html element. <br />
      As a developer you can decide how many editable regions you want. They are very flexible and can be re-used across pages. <br />
      For example, you could do the following, to define a global region on the site:</p>
  </div>
  <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;edit&quot; field=&quot;my_editable_field&quot; rel=&quot;global&quot;&gt;<br />  My global region<br />&lt;/div&gt;</code></pre>
  <p id="row_1390906260223">The content of this region will be dynamic and will be editable on every layout that includes it.<br />
  </p>
  
  <h3 id="row_1390926495165">Creating editable field<br />
  </h3>
  <p id="row_1390926495166">You can define editable regions in your template where the user will be able to type text and <em>Drag and Drop</em> modules</p>
  <ul>
    <li><strong>You must add class &quot;edit&quot;</strong></li>
    <li><strong>You must add &quot;field&quot; attribute</strong></li>
    <li><strong>You must add  &quot;rel&quot; attribute</strong></li>
  </ul>
  <p id="row_1390926495167">Example: <br />
  </p>
  <div id="row_1390926495168">
    <p id="row_1390926495169"> </p>
    <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;edit&quot;  field=&quot;your_region_name&quot; rel=&quot;content&quot;&gt;      
	&lt;p&gt;Edit your content&lt;/p&gt;
&lt;/div&gt;</code></pre>
    See what else you can do with the attributes </div>
  <h3 id="row_1390926495177">Add editable fields in your template<br />
  </h3>
  <p id="row_1390926495178"><img id="row_1390926495179" src="http://microweber.com/userfiles/media/editable_regions_classes.png" /></p>
  <h4>Set default content region
  </h4>
  <p id="row_1390906260225">The default region that shows in the admin panel is defined by<em> <code>rel=&quot;content&quot;</code>  </em>&amp; <em><code>field=&quot;content&quot;</code> </em>attributes of your html element</p>
  <p id="row_1390906260226">So, when you want to add a post you need to have the following region in your layout:</p>
  <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;edit&quot; field=&quot;content&quot; rel=&quot;content&quot;&gt;<br />        &lt;p&gt;My post content&lt;/p&gt;<br />&lt;/div&gt;</code></pre>
  <p id="row_1390906260228">You will see this on the add post screen.</p>
  <div id="row_1390906260229">
    <p id="row_1390906260230"><img src="http://microweber.com/userfiles/media/mw_template_basic_content_region.png" alt="editable content" id="row_1390906260231" contenteditable="false" onmouseenter="this.contentEditable=false;" /></p>
  </div>
  
  <h2>Editable regions attributes</h2>
  <p>Each editable region behaves differently in dependence of the <code>rel</code> and <code>field</code> attributes you add to it</p>
  <h3 id="row_1390926495171"> The &quot;field&quot; attribute</h3>
  <p id="row_1390926495172">The field attribute will help you to split your layout into multiple content-editable regions. </p>
  <ul>
    <li>Add attribute <em><code>field=&quot;some_name&quot;</code></em> and set the name of your field in your template.</li>
    <li>The main content region that the user sees during the &quot;<a href="http://www.youtube.com/watch?v=630ajZaox-g" target="_blank">Add content</a>&quot; process must have <em><code>field=&quot;content&quot;</code></em> </li>
  </ul>
  <h3 id="row_1390926495173">The &quot;rel&quot; attribute</h3>
  <p id="row_1390926495174">The rel attribute is responsible for the <a target="_self" href="http://en.wikipedia.org/wiki/Scope_%28computer_science%29">scope</a> of your content-editable field. You can define custom scope and reuse  the content of the editable regions across the whole website.</p>
  <ul>
    <li>Add attribute <code>rel</code> and set the scope of your field.
      <ul>
        <li> <code>rel=&quot;content&quot;</code> - changes for every page or post</li>
        <li> <code>rel=&quot;global&quot;</code> - changes for the whole site</li>
        <li> <code>rel=&quot;page&quot;</code> - changes for every page and sub-page<br />
        </li>
        <li> <code>rel=&quot;post&quot;</code> - changes for every post</li>
        <li> <code>rel=&quot;inherit&quot;</code> - changes for every main page, but not is sub-pages and posts</li>
        <li> <code>rel=&quot;your_custom_rel&quot;</code> you can define your own scope</li>
      </ul>
    </li>
  </ul>
  <h3 id="row_1390926495175">The &quot;rel-id&quot; attribute</h3>
  <p id="row_1390926495176">The rel-id attribute is <em>optional</em> and allows you to pull editable regions that belong to another content</p>
  
  
  
  
  <h3 id="row_1390926495177">Playing with the rel attribute 
  </h3>
  <h5>Editable region <code>rel </code>attribute</h5>
  <iframe width="640" height="480" src="//www.youtube.com/embed/R8RG74S_Z3E" frameborder="0" allowfullscreen></iframe>
  <h5 id="row_1390926495180">Sample layout with sidebar where the content is inherited in the inner pages
  </h5>
  <p id="row_1390926495181"><em>note the usage of the <code>rel</code> tag</em></p>
  <div id="row_1390926495182">
  
     <pre class="prettyprint"><code class="language-php">&lt;?php
/*

type: layout
content_type: dynamic
name: Blog
description: Blog
*/
?&gt;
&lt;?php include TEMPLATE_DIR. &quot;header.php&quot;; ?&gt;

&lt;div id=&quot;content&quot;&gt;
    &lt;div class=&quot;edit&quot;  field=&quot;content&quot; rel=&quot;page&quot;&gt;
        &lt;h2&gt;My Page&lt;/h2&gt;
        &lt;p&gt;My content&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div id=&quot;sidebar&quot;&gt;
    &lt;div class=&quot;edit&quot;  field=&quot;sidebar&quot; rel=&quot;inherit&quot;&gt;
        &lt;h2&gt;Sidebar&lt;/h2&gt;
        &lt;p&gt;This content is the same for every sub-page&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;?php include TEMPLATE_DIR. &quot;footer.php&quot;; ?&gt;
</code></pre>
  </div>
  <h3 id="row_1390926495185">Editable regions from another page</h3>
  <p id="row_1390926495186">The <code>rel-id</code> attribute will pull the content from another place</p>
  <div id="row_1390926495187">
 <pre class="prettyprint"><code class="language-php">&lt;h2 class=&quot;edit&quot;  field=&quot;title&quot; rel=&quot;content&quot; rel-id=&quot;5&quot;&gt; The post title goes here &lt;/h2&gt;  
&lt;div class=&quot;edit&quot;  field=&quot;content&quot; rel=&quot;content&quot; rel-id=&quot;5&quot;&gt;       
    The post content will appear here 
&lt;/div&gt;  
&lt;div class=&quot;edit&quot;  field=&quot;my_custom_region&quot; rel=&quot;content&quot; rel-id=&quot;5&quot;&gt; 
    You can pull any region 
&lt;/div&gt;</code></pre>
   
  </div>
  <h3 id="row_1390926495190">Editable regions in modules</h3>
  <p id="row_1390926495191">Because you can define custom rel and rel-id  attributes you can use editable regions from anywhere and the parser  will replace them with the actual content from the database.</p>
  <p id="row_1390926495192">Here is how we can make editable region in our module: <a href="https://github.com/microweber/microweber/blob/master/userfiles/modules/contact_form/templates/default.php#L27">example</a></p>
  <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;edit&quot; field=&quot;my_module_title&quot; rel=&quot;my_module&quot; rel-id=&quot;my_custom_id&quot;&gt;
 Edit your text 
&lt;/div&gt; </code></pre>
</div>
<h3 id="row_1390926495193">Custom editable regions <br />
</h3>
<p>Setting custom <code>field</code> and <code>rel</code> value will allow you to have custom regions whenever you want them.</p>
 <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;edit&quot; field=&quot;my_field_name&quot; rel=&quot;my_rel&quot;&gt;
 Editable field 
&lt;/div&gt;</code></pre>
