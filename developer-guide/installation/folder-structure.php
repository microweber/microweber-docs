<?php if(!defined('ONE')){
	$fn = str_ireplace('.php','',basename(__FILE__));
	header("Location: ".$fn);

} ?>

<h2>Folder Structure</h2>
<p>By default Microweber comes with few subfolders. Lets see what each of them does.</p>
<p><img src="<?php print site_url(); ?>assets/img/folder-structure.png" alt="folder structure" /></p>
<table   class="table table-hover">
  <tbody>
    <tr>
      <td><code>src</code></td>
      <td>Folder that contains the Microweber system files. The files in this folder are replaced on new update.</td>
    </tr>
    <tr>
      <td><code>userfiles</code></td>
      <td>Folder that with the templates and modules</td>
    </tr>
    <tr>
      <td><code>cache</code></td>
      <td>Folder to store cache items</td>
    </tr>
    <tr>
      <td><code>config.php</code></td>
      <td>File to store the database connection properties</td>
    </tr>
    <tr>
      <td><code>index.php</code></td>
      <td>The main file that loads your site</td>
    </tr>
  </tbody>
</table>
<p>&nbsp;</p>
