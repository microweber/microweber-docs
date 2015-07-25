<?php

$searchDir = './';
$searchDir = __DIR__ . DIRECTORY_SEPARATOR;
$searchExtList = array('.md');
$searchString = '';
if (isset($_REQUEST['q'])) {
    $searchString = strip_tags(trim($_REQUEST['q']));
}
if ($searchString == false) {
    exit();
}

$search_dirs = array('functions', 'classes', 'modules', 'js-api', 'developer-guide', 'css-guide', 'guides');


if (isset($_SERVER['HTTP_REFERER'])) {
    $tmp = $_SERVER['HTTP_REFERER'];
    $search_dirs_sorted = array();
    $search_dirs_sorted2 = array();
    foreach ($search_dirs as $search_dir) {
        if (is_dir($search_dir)) {
            if (stripos($tmp, $search_dir) !== false) {
                $search_dirs_sorted[] = $search_dir;
            } else {
                $search_dirs_sorted2[] = $search_dir;

            }
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
                    //  $tmp = file_get_contents($name);
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

                $process = true;
                if (stripos($file, '_Sidebar') != false) {
                    $process = false;
                } elseif (stripos($file, '_nav') != false) {
                    $process = false;
                }


                if ($process) {
                    $file_info = array();
                    $fname = str_replace($searchDir, '', $file);
                    $fname = str_ireplace('.php', '', $fname);
                   // $fname = str_ireplace('.md', '', $fname);
                    $fname = str_replace('\\', '/', $fname);
                    $fname = str_replace('//', '/', $fname);
                    $label = explode('/', $fname);
                    $title = basename($fname);
                    $lineNumber = 0;
                    $description = false;


                    $stream = new SplFileObject($file);
                    $grepped = new RegexIterator($stream, '*' . $searchStr . '*');
                    //$grepped = new RegexIterator($stream, '~\$line~');
                    if (!empty($grepped)) {
                        foreach ($grepped as $l => $line) {
                            if (!strstr($line, $title)) {
                                $lineNumber = $l;
                                $description = str_replace('#', '', $description);
                                $description = trim($description);
                                $description = str_replace("\r", '', $description);
                                $description = str_replace("\n", '', $description);
                                $description = trim($description);
                                $description = str_replace("\\", '', $description);
                                $description = str_replace("/", '', $description);
                                $description = trim($description);
                                if ($description == false) {
                                    $description = $line;
                                } else {
                                    $description = $description . '... ' . $line;
                                }
                            }
                        }
                    }

                    //   $description = str_replace($title, ' ', $description);
                    $description = strip_tags($description);

                    $description = str_replace("'", '', $description);
                    $description = str_replace('"', '', $description);

                    $description = substr($description, 0, 1000);
                    //  $description = substr($description, 0, 550);
                    $fname = str_replace('//', '/', $fname);
                    $fname = ltrim($fname, '/');
                    $file_info['url'] = '/'.$fname;
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
        $sorted = array();
        $sorted2 = array();
        $sorted3 = array();
        if (!empty($res)) {
            foreach ($res as $k => $v) {
                if (isset($v['title']) and stristr($v['title'], $searchStr)) {
                    $sorted[] = $v;
                } elseif (isset($v['url']) and stristr($v['url'], $searchStr)) {
                    $sorted2[] = $v;
                } else {
                    $sorted3[] = $v;
                }
            }
        }
        $res = array_merge($sorted, $sorted2, $sorted3);
        return $res;
    }
}


?>
<?php if (isset($res) and is_array($res) and !empty($res)): ?>
    <?php $res = array_slice($res,0,6); ?>
    <ul class="search-results-list">
        <?php foreach ($res as $item): ?>
            <?php if ($item['title'] != false): ?>
                <li><a href="<?php print $item['url'] ?>" title="<?php print addslashes($item['description']) ?>"><?php print $item['title'] ?>
                        <?php
                        $label_class = 'label-' . $item['label'];
                        ?>

                    </a></li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>
<?php else: ?>
    <span class="search-results-list-empty">Nothing found for: <em><?php print $searchString ?></em></span>
<?php endif; ?>
