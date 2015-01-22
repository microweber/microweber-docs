<?php /*<ul id="nav">
    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'developer-guide/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title <?php if (strstr(url_path(), 'developer-guide/')) print "active"; ?>"
            href="<?php print site_url(); ?>developer-guide/README.md">Developers guide</a></li>
    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'functions/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title dd_functions_ref <?php if (strstr(url_path(), 'functions/')) print "active"; ?>"
            href="<?php print site_url(); ?>functions/README.md"><span data-ref="functions">Functions</span></a></li>

    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'classes/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title dd_class_ref <?php if (strstr(url_path(), 'classes/')) print "active"; ?>"
            href="<?php print site_url(); ?>classes/README.md" data-ref="class">Classes</a></li>

    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'modules/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title dd_class_ref <?php if (strstr(url_path(), 'modules/')) print "active"; ?>"
            href="<?php print site_url(); ?>modules/README.md" data-ref="class">Modules</a></li>

    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'js-api/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title dd_class_ref <?php if (strstr(url_path(), 'js-api/')) print "active"; ?>"
            href="<?php print site_url(); ?>js-api/README.md" data-ref="class">JS Api</a></li>

    <li><span
            class="nav-label-color <?php if (strstr(url_path(), 'css-guide/')) print "label-" . url_segment(0); ?>"></span><a
            class="nav-title dd_class_ref <?php if (strstr(url_path(), 'css-guide/')) print "active"; ?>"
            href="<?php print site_url(); ?>css-guide/README.md" data-ref="class">CSS</a></li>
</ul>*/ ?>


<ul class="mw-ui-btn-nav mw-ui-btn-nav-fluid">
<li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big <?php if (strstr(url_path(), 'home/')) print "active"; ?>"
            href="<?php print site_url(); ?>guides/README.md"><span class="mw-icon-mw" style="font-size: 30px;"></span></a></li>
            
            
          

    <?php /*<li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big <?php if (strstr(url_path(), 'developer-guide/')) print "active"; ?>"
            href="<?php print site_url(); ?>developer-guide/README.md">Developers guide</a></li>*/ ?>
            
            <li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big dd_class_ref <?php if (strstr(url_path(), 'guides/')) print "active"; ?>"
            href="<?php print site_url(); ?>guides/README.md" data-ref="class">Guides</a></li>
    
            
            
    <li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big dd_functions_ref <?php if (strstr(url_path(), 'functions/')) print "active"; ?>"
            href="<?php print site_url(); ?>functions/README.md"><span data-ref="functions">Functions</span></a></li>

 

    <li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big dd_class_ref <?php if (strstr(url_path(), 'modules/')) print "active"; ?>"
            href="<?php print site_url(); ?>modules/README.md" data-ref="class">Modules</a></li>
            
              <li><a
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big <?php if (strstr(url_path(), 'developer-guide/')) print "active"; ?>"
            href="<?php print site_url(); ?>developer-guide/README.md">OLD</a></li>

            <li><span
            class="mw-ui-btn mw-ui-btn-info mw-ui-btn-big" id="searchbtn" style="padding: 0;">
            <input type="text" class="mw-ui-invisible-field mw-ui-field-big" id="searchfield" style="margin-top: 0;height: 46px;font-size: 16px;" placeholder="Search" />
            <span class="mw-icon-app-search-strong">



            </span>

            </span></li>
</ul>
