
<ul class="subnav">
  <li> <a class="nav-title <?php if(url_path() == 'functions/_nav/content') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/content">Content</a> <?php print page_content('functions/_nav/content'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/categories') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/categories">Categories</a> <?php print page_content('functions/_nav/categories'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/url') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/url">URL</a> <?php print page_content('functions/_nav/url'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/template') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/template">Template</a> <?php print page_content('functions/_nav/template'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/options') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/options">Options</a> <?php print page_content('functions/_nav/options'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/shop') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/shop">Shop</a> <?php print page_content('functions/_nav/shop'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/users') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/users">Users</a> <?php print page_content('functions/_nav/users'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/db') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/db">Database</a> <?php print page_content('functions/_nav/db'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/session') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/session">Sessions</a> <?php print page_content('functions/_nav/session'); ?> </li>
  <li><a class="nav-title <?php if(url_path() == 'functions/_nav/custom_fields') print "active" ; ?>" href="<?php print site_url(); ?>functions/_nav/custom_fields">Custom fields</a> <?php print page_content('functions/_nav/custom_fields'); ?> </li>
</ul>
