<h2>How to make a template for module</h2>
<p>Every module can have its own templates to show the infomation deppening on the user settings. </p>
<p>You can use module templates to style and change the structure of a single module</p>
<p>The module template is different from the overall site template and it takes care how the information is displayed only by the module itself.</p>
<h3>Where to find the module templates?</h3>
<p>Each modules have their templates stored in its folder, in a sub folder named templates</p>
<p>Generally you can find them at <code>/userfiles/modules/&lt;module-name&gt;/templates/</code></p>
<p>The module templates simple .php files that produce the output module code. </p>
<p>Additionally you can put the module templates inside your site template folder. </p>
<p>Create a folder for your module at <code>/userfiles/templates/&lt;my-template-name&gt;/modules/&lt;my-module-name&gt;/templates/</code></p>
<p>If you put the module templates in the template folder they will be avaiable only in your template and not in the general intallation.</p>
<p>Examles of module templates can be found for the <code>pictures</code> module, <a href="https://github.com/microweber/microweber/tree/master/userfiles/modules/pictures/templates" target="_blank">here</a>.</p>
<h3>Creating templates for exisitng modules</h3>
<p>The easiest way to make a template for existing module is to copy the default and modify it. There are two ways to make a template for a module: one is to style the module for your current site template and the other is to style the module for all site templates. </p>
<p>1) To style a module only for your current site template, make a new folder at inside your site template folder ex. <code>/userfiles/templates/&lt;your-template&gt;/modules/&lt;name-of-module&gt;/templates/</code> and put all your needed files there</p>
<p>2) To make a module design avaiable for all site templates, place your skin at the module's location ex. <code>/userfiles/modules/&lt;module-name&gt;/templates/</code></p>
<h3>Make template for the <code>pictures</code> module</h3>
<p>To style the pictures gallery you need to make new file in <code>/userfiles/modules/pictures/templates/</code> or simply <em>duplicate</em> the <em>default.php</em> file found there. </p>

<p>You can explore the templates of the default modules to see more examples.</p>
<p>To make a module template that will be avaiable for all site designs do the following.</p>
<p>
<ol>
  <li>Go to your  desired module folder for example: <code>userfiles/modules/pictures/</code></li>
  <li>Create the <code>templates</code> folder in it does not exist</li>
  <li>Create your skin by making a file at <code>userfiles/pictures/templates/slider.php</code></li>
</ol>
</p>
<p>In the new file add the following information at the start:</p>
<p><code>slider.php</code></p>
<pre class="prettyprint"><code class="language-php">&lt;?php
/*
type: layout
name: Slider
description: Pictures slider
*/
?&gt;</code></pre>
<p><img src="<?php print site_url() ?>assets/img/choose-module-skin.png" /></p>
<h3>Making module skins based on your site template</h3>
<h4>And overiding the default module skins</h4>
<p>When you make your template the default module skins may not fit to your design and vision. In this case you may wish to make your own module skins which will fit your overal site design.</p>
<p>To make module skin for your template make folder called <code>modules</code> in your site template folder</p>
<p>After that make a folder for each module you want to ovveride.</p>
<p>For example if you want to use your own default skin for the <code>pictures</code> module, you must do the following</p>
<ol>
  <li>Go to your site template direcotry for example: <code>userfiles/templates/my_template/</code></li>
  <li>Create the <code>modules</code> folder in your template dir</li>
  <li>Create a folder for the pictures module skins at <code>modules/pictures/templates/</code></li>
  <li>Overide the default skin by making a file at <code>userfiles/templates/my_template/modules/pictures/templates/default.php</code></li>
</ol>

<p>Microweber recognizes the module skins by scanning the module templates folder for files with the above code in them.</p>
<p>If you make such file and open the module settings screen you will see the following result:</p>

<p>The new skin willl appears in the dropdown menu. </p>
<h4>Using the module <code>$data</code> in your module skin</h4>
<p>Almost all module templates are using data from their module. In our case we will need the data from the pictures module so we can show our pictures in a custom way. </p>
<p>For this purpose all default Microweber modules that comes with the installation have a <code>$data</code> array in their module templates. </p>
<p>Here is a very simpe example of template for the <code>pictures</code> module. Make new file at <code>/userfiles/modules/pictures/templates/my_slider.php</code></p>
<pre class="prettyprint"><code class="language-php">&lt;?php
/*
type: layout
name: My Picture Slider
description: Pictures slider is cool
*/
?&gt;
&lt;?php if (is_array($data)): ?&gt;
    &lt;?php foreach ($data as $item): ?&gt;
    &lt;div class=&quot;slider slide-item-&lt;?php print $item['id']; ?&gt;&quot;&gt;
        &lt;img src=&quot;&lt;?php print thumbnail($item['filename'], 700); ?&gt;&quot; /&gt;
        &lt;?php print ($item['title']); ?&gt;    
    &lt;/div&gt;
    &lt;?php endforeach; ?&gt;
&lt;?php else : ?&gt;
No pictures found.
&lt;?php endif; ?&gt;</code></pre>
<h4>How to insert Javascript and CSS in your module</h4>
<p>Using the <code>$config</code> array in your module you can access its location and url</p>
<p>To insert your styles simply put this code in your module skin</p>
<pre class="prettyprint"><code class="language-php">&lt;link rel=&quot;stylesheet&quot; href=&quot;&lt;?php print $config['url_to_module']; ?&gt;css/style.css&quot; /&gt;
&lt;script src=&quot;&lt;?php print $config['url_to_module']; ?&gt;js/script.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>The <code>$config['url_to_module']</code> variable contains the full url to the module folder. <br />
  For example <em>http://localhost/userfiles/modules/pictures/</em></p>
<p> <!--

<p>make module-temlate </p>
<p>kak se pravi module
  obshta struktura, </p>
<p>kakvi vazmojnosti ima apito za modulite,
  - parametri za modula - kak se pravqt parametri, </p>
<p>kak sde vzimat
  - templeiti za modula - kak se pravqt , </p>
<p>kade izlizat v admina
  - setingi za modula </p>
<p>kak se pravqt, kade izlizat
  - eventi (hooks)
  - moduli v templeita
  - moduli koito izpolzvat drugi moduli - vzaimodeistvia - moje da se dade primer s modul koito ima v sebe si galeria i komentari </p>--></p>
