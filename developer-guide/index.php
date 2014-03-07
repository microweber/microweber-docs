<?php if(!defined('ONE')){
	header("Location: index");

} ?>

<h2>Welcome to the Microweber developer documentation</h2>
<p>Microweber is an open source content management system. It empowers regular users and programmers to make website with ease.</p>
<h3>For regular users</h3>
<ul>
  <li>No programing needed!</li>
  <li>True WYSIWYG (you really get what you see)</li>
  <li>Drag and drop content editing</li>
  <li>Online shop</li>
  <li>Add reatures to your website with Modules</li>
</ul>
<h3>For developers</h3>
<ul>
  <li>Modular architecture</li>
  <li>Powerful API</li>
  <li>Hyper flexible templates based on PHP</li>
  <li>and much more....</li>
</ul>
<h4>More info</h4>
<ul>
  <li><a href="http://microweber.com">Official website</a></li>
  <li><a href="https://github.com/microweber/Microweber">Github</a></li>
  <li><a href="https://www.facebook.com/Microweber">Facebook</a> / <a href="https://twitter.com/microweber">Twitter</a></li>
  <li>IRC: #microweber at <a href="http://webchat.freenode.net/?channels=microweber&uio=d4">irc.freenode.net</a></li>
</ul>
<hr>
<p>Here you will learn how to work with the Microweber framework which powers up all sites and modules. 
  This guide contains tutorials and API reference for developers. </p>
<p>It is aimed for people who know how to write code in PHP and it should provide information for website development in Microweber.
  If you are just a regular user that wants to know how to work with the CMS you can visit our <a href="http://microweber.com/user-guide">user guide</a></p>
<h3>Navigation</h3>
<?php print page_content('developer-guide/_nav/index'); ?>