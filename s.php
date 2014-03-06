<?php
require('one.php');
$searchDir = './';
$searchDir = __DIR__ . DIRECTORY_SEPARATOR;
$searchExtList = array('.php');
$searchString = '';
if (isset($_REQUEST['q'])) {
    $searchString = trim($_REQUEST['q']);
}
if ($searchString == false) {
    exit();
}

$search_dirs = array('functions', 'classes', 'modules', 'js-api', 'developer-guide', 'css-guide');


if(isset( $_SERVER['HTTP_REFERER'])){
	$tmp = $_SERVER['HTTP_REFERER'];
	$search_dirs_sorted = array();
	$search_dirs_sorted2 = array();
	foreach ($search_dirs as $search_dir) {
		 if (stripos($tmp, $search_dir) !== false) {
           $search_dirs_sorted[] = $search_dir;
         } else {
			$search_dirs_sorted2[] = $search_dir;
		 }
	}
	  $search_dirs = array_merge($search_dirs_sorted, $search_dirs_sorted2);
}




$search = array();
$search['q'] = $searchString;

$res = array();
foreach ($search_dirs as $search_dir) {
    $perform_search_dir = $searchDir . $search_dir;
    $allFiles = everythingFrom($perform_search_dir, $searchExtList, $searchString);
    if (is_array($allFiles)) {
        $res = array_merge($res, $allFiles);
    }
}

if (isset($_REQUEST['json'])) {
    header('Content-Type: application/json');
 	print json_encode($res);
	exit();
}
 


 
function everythingFrom($baseDir, $extList, $searchStr)
{
    $ob = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($baseDir), RecursiveIteratorIterator::SELF_FIRST);
    $files_with_url = array();
    $files = array();
    $files2 = array();
    $searchDir = dirname($baseDir);
    foreach ($ob as $name => $object) {
        if (is_file($name)) {
            foreach ($extList as $k => $ext) {
                $found = false;
                if (substr($name, (strlen($ext) * -1)) == $ext) {
                    $tmp = file_get_contents($name);
                    $fname = str_replace($searchDir, '', $name);
                    $fname = str_replace($ext, '', $fname);
                    $fname = str_replace('\\', '/', $fname);
                    $searchStr2 = explode(' ', $searchStr);
                    if (stripos($tmp, $searchStr) !== false) {
                        $files[] = $name;
                        $found = 1;
                    } elseif (is_array($searchStr2)) {
                        $kws_found = 0;
                        foreach ($searchStr2 as $search) {

                            if (stripos($tmp, $search) !== false) {
                                //	$files[] = $name;
                                $kws_found++;
                            }
                        }
                        if ($kws_found >= count($searchStr2)) {
                            $files2[] = $name;
                            $found = 1;
                        }
                    }


                }
            }
        }
    }


    if (isset($files)) {
        $files = array_merge($files, $files2);
        $res = array();
        if (!empty($files)) {
            foreach ($files as $file) {
				 if (stripos($file, '_nav') == false) {
                $file_info = array();
                $fname = str_replace($searchDir, '', $file);
                $fname = str_ireplace('.php', '', $fname);
                $fname = str_replace('\\', '/', $fname);
                $fname = str_replace('//', '/', $fname);
                $label = explode('/', $fname);
                $title = page_content($file, 'h1', 'clean');
                if ($title == false) {
                    $title = page_content($file, 'h2', 'clean');
                }
                $description = page_content($file, '*', 'clean');
				$description = str_replace($title, ' ', $description);
				            $description = strip_tags($description);

				$description = str_replace("'", '', $description);
				$description = str_replace('"', '', $description);

				$description = substr($description, 0, 1000);
              //  $description = substr($description, 0, 550);
			     $fname = str_replace('//', '/', $fname);
				$fname = ltrim($fname,'/');
                $file_info['url'] = site_url($fname);
                $file_info['title'] = $title;
                $file_info['description'] = trim(addslashes($description));
                $file_info['path'] = $fname;
                if (isset($label[1])) {
                    $label = $label[1];
                    $file_info['label'] = $label;

                }
				$key = md5(serialize($file_info));
                $res[$key] = $file_info;
				 }
            }
        }
        return $res;
    }
}

 
?>
<?php if(isset($res) and is_array($res) and !empty($res)): ?>
<ul class="search-results-list">
  <?php foreach($res as $item): ?>
  <?php if($item['title'] != false): ?>
  <li><a href="<?php print $item['url'] ?>" title="<?php print $item['description'] ?>"><?php print $item['title'] ?> 
  
  

<?php 

$label_class = 'label-default';
if($item['label'] == 'functions'){
$label_class = 'label-success';
} elseif($item['label'] == 'classes'){
$label_class = 'label-info';
} elseif($item['label'] == 'developer-guide'){
$label_class = 'label-primary';
}  elseif($item['label'] == 'css-guide'){
$label_class = 'label-warning';
}  elseif($item['label'] == 'js-api'){
$label_class = 'label-danger';
}
$label_class = 'label-'.$item['label'];


?>
  <!--  <span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>-->


  <small class="label label-default <?php print $label_class; ?>"><?php print $item['label'] ?></small>
  
  
  
  </a></li>
  <?php endif; ?>
  <?php endforeach; ?>
</ul>
<?php else: ?>
<span class="search-results-list-empty">Nothing found for: <em><?php print $searchString ?></em></span>
<?php endif; ?>
