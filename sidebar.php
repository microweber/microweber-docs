<?php $seg = url_segment(0); ?>
<?php /*<div class="dropdown sidebar-dropdown <?php if(strstr(url_path(), 'functions/')) print "functions-active" ; ?> <?php if(strstr(url_path(), 'classes/')) print "classes-active" ; ?>" id="main_dropdown"> <a data-toggle="dropdown" href="#"><b class="caret pull-right"></b><span id="main_dropdown_value">Functions reference</span></a> </div>*/ ?>
<?php if(($seg == 'functions') or url_path() == ''): ?>
<?php print page_content('functions/_nav/functions'); ?>
<?php endif; ?>
<?php if($seg == 'classes'): ?>
<?php print page_content('classes/_nav/classes'); ?>
<?php endif; ?>
<?php if($seg == 'modules'): ?>
<?php print page_content('modules/_nav/modules'); ?>
<?php endif; ?>
<?php if($seg == 'js-api'): ?>
<?php print page_content('js-api/_nav/index'); ?>
<?php endif; ?>
<?php if($seg == 'developer-guide'): ?>
<?php print page_content('developer-guide/_nav/index'); ?>
<?php endif; ?>
<?php if($seg == 'css-guide'): ?>
<?php print page_content('css-guide/_nav/index'); ?>
<?php endif; ?>
