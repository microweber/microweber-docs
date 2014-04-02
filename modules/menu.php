
<h2>menu</h2>
<p> Renders menu tree </p>
<pre class="prettyprint"><code class="language-html">&lt;module type=&quot;menu&quot; /&gt; </code></pre>
<?php print page_content('params/modules/menu'); ?> 
<h2>Examples</h2>
<h4>Prints menu tree</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show main menu ?&gt;
&lt;module type=&quot;menu&quot; /&gt;</code>
</pre>
<p>&nbsp;</p>
<h4>Prints menu with template</h4>
<pre class="prettyprint"><code class="language-php runner proc">&lt;?php //show footer menu ?&gt;
&lt;module type=&quot;menu&quot; menu-name=&quot;footer_menu&quot; template=&quot;small&quot; /&gt;</code>
</pre>
<p></p>
<h3>How to style the menu module</h3>
<p>To create a skin for this module there are 2 options</p>
<h4>Create skin for the &quot;menu&quot; module in the site template dir</h4>
<p>Use this option if your skins are dependant on the site template. </p>
<p>Create a folder in <code>userfiles/templates/my_site_template/modules/menu/templates/</code></p>
<p>All skins that you put in this folder will work only in your site template</p>
<h4>Create skin for the &quot;menu&quot; module in the modules dir</h4>
<p>Use this option if your skin use its own CSS and its not dependant on the site template. </p>
<p>Create your skin in this folder <code>userfiles/modules/menu/templates/</code></p>
<p>All skins that you put in this folder will work only in all site templates</p>
 

<h4>Sample skin</h4>

<code>my_skin.php</code>
<pre class="prettyprint"><code class="language-php">&lt;?php
/*
type: layout
name: My menu
description: My Menu skin
*/
?&gt;

&lt;div class=&quot;my-menu-skin&quot;&gt;
&lt;?php
$menu_filter['ul_class'] = 'my-nav-small';
print menu_tree($menu_filter);
?&gt;
&lt;/div&gt;</code></pre><p>This module uses the <a href="<?php print site_url(); ?>functions/menu_tree">menu_tree</a> function to render the output in the skin. Check the function parameters <a href="<?php print site_url(); ?>functions/menu_tree">here</a>.</p><p>&nbsp;</p>
<h3>Sticky top menu</h3>

<p>If your site uses sticky header menu like <a href="http://startbootstrap.com/all-templates" target="_blank">this template</a>, you may have problems with the menu going behind the toolbar. </p>
<p>There is a solution to this. Add this css code to your template</p>
 

<pre class="prettyprint"><code class="language-php">body.mw-live-edit nav {
top:75px;
}
</code></pre>
<p>
Check out <a href="https://github.com/microweber/microweber/issues/178" target="_blank">this link</a> for other solutions.</p>