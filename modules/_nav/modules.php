
<ul class="subnav">


  <li> <a class="nav-title <?php if(url_path() == 'modules/_nav/making') print "active" ; ?>" href="<?php print site_url(); ?>modules/_nav/making">Making a module</a> <?php print page_content('modules/_nav/making'); ?> </li>




  <li> <a class="nav-title <?php if(url_path() == 'modules/_nav/default') print "active" ; ?>" href="<?php print site_url(); ?>modules/_nav/default">Default modules</a> <?php print page_content('modules/_nav/default'); ?> </li>
</ul>
