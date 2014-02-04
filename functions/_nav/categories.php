<ul class="subnav">
	<li><a class="<?php if(url_path() == 'functions/category_link') print "active" ; ?>" href="<?php print site_url(); ?>functions/category_link">category_link</a></li>
	<li><a class="<?php if(url_path() == 'functions/get_category_by_id') print "active" ; ?>" href="<?php print site_url(); ?>functions/get_category_by_id">get_category_by_id</a></li>
	<li><a class="<?php if(url_path() == 'functions/get_page_for_category') print "active" ; ?>" href="<?php print site_url(); ?>functions/get_page_for_category">get_page_for_category</a></li>
	
	<li><a class="<?php if(url_path() == 'functions/get_categories') print "active" ; ?>" href="<?php print site_url(); ?>functions/get_categories">get_categories</a></li>
     
	<li><a class="<?php if(url_path() == 'functions/save_category') print "active" ; ?>" href="<?php print site_url(); ?>functions/save_category">save_category</a></li>
		<li><a class="<?php if(url_path() == 'functions/delete_category') print "active" ; ?>" href="<?php print site_url(); ?>functions/delete_category">delete_category</a></li>

	
</ul>
