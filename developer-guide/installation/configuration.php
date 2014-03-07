
<h2>Configuration</h2>
<p>Your website config file is located in the main folder of your site and its named <code>config.php</code></p>
<p>From it you can setup the database access details </p>
<h3>Typical config on file on installed system</h3>
 
 

<pre class="prettyprint"><code class="language-php">&lt;?php
defined('T') or die();

// Global site configuration
$config = array(
    // In development, debug mode unlocks extra error info
	'debug_mode' =&gt; false,
	'admin_url' =&gt; 'admin',
	'uri_protocol' =&gt; 'AUTO',
	'default_timezone' =&gt; 'UTC',
	'table_prefix' =&gt; 'mw_', 
	'installed' =&gt; 'yes',
	'autoinstall' =&gt; 'no',
	'with_default_content' =&gt; 'yes',
	// database settings
	'db' =&gt; array(
		'type' =&gt; 'mysql',
		'host' =&gt; '127.0.0.1',
		'dbname' =&gt; 'test',
		'user' =&gt; 'root',
		'pass' =&gt; ''
	)
);
</code></pre>

<p>You can use the <code>config.php</code> to automatically setup the CMS without the need to go though the installation procedure</p>




<h3>Configuration file on non-installed system</h3>
<p>If you have this file and open your site, you should be redirected to the installation screen. All the fields will be populated with the data from the file.
</p> <pre class="prettyprint"><code class="language-php">&lt;?php
defined('T') or die();

// Global site configuration
$config = array(
    // In development, debug mode unlocks extra error info
	'debug_mode' =&gt; false,
	'admin_url' =&gt; 'admin',
	'uri_protocol' =&gt; 'AUTO',
	'default_timezone' =&gt; 'UTC',
	'table_prefix' =&gt; 'mw_', 
	'installed' =&gt; 'no',
	'autoinstall' =&gt; 'no',
	'with_default_content' =&gt; 'yes',
	// database settings
	'db' =&gt; array(
		'type' =&gt; 'mysql',
		'host' =&gt; '127.0.0.1',
		'dbname' =&gt; 'test',
		'user' =&gt; 'root',
		'pass' =&gt; ''
	),
	'admin_username' =&gt; 'demo', 
	'admin_password' =&gt; 'demo', 
	'admin_email' =&gt; 'demo@example.com'
);
</code></pre>
<p>You can also make "<em>silent install</em>" without asing the user for details, by setting <code>'autoinstall' =&gt; 'yes'</code> in the <code>config.php</code> file</p>

<h3>Muilti site configuration</h3>
<p>If you have several websites that you want to host from a single folder, but on diferent domains you just have to make new config.php file for each of your domains.</p>
<p>For example if you want to have <em>muilti site</em> setup for the domain <strong>testing.com</strong>, you must make a file called <code>config_testing_com.php</code> in the main Microweber folder</p>
<p>This simple setup will allow you to host multiple sites from the same folder and all sites will have shared Templates and Modules. In case you want to change that. </p>

<h3>Bootstrapping</h3>
<p>The <code>src/Microweber/bootstrap.php</code> file holds folders locations of the system. If you want to change any folder location, you must make a file called <code>bootstrap.php</code> in your site root. For multi site setup, if you want the domain <strong>example.com</strong> to have indepented folders you can make <code>bootstrap_example_com.php</code> and redefine all folder names. <a target="_blank" href="https://github.com/microweber/microweber/blob/master/src/Microweber/bootstrap.php">See the original file here</a></p> 
 
<pre class="prettyprint"><code class="language-php">if (!defined('MW_USERFILES')) {
    define('MW_USERFILES', MW_ROOTPATH . 'sites' . DIRECTORY_SEPARATOR.&quot;example.com&quot;.DIRECTORY_SEPARATOR);
}</code></pre>