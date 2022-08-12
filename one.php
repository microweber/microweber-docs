<?php
require('vendor/autoload.php');
if (!defined('ONE')) {
    define('ONE', true);
}
$page_content = false;
$locate_file_content = url_path();

$page = page_content();
//var_dump($page);exit;

if ($page == false) {
    header("HTTP/1.0 404 Not Found");
    exit("404 not found");
}

/*
  ___  _   _ _____
 / _ \| \ | | ____|
| | | |  \| |  _|
| |_| | |\  | |___
 \___/|_| \_|_____|


One file site generator.

Used to serve the static files for the Microweber documentation

www.microweber.com


author: peter@microweber.com

*/


function page_content($filename = false, $filter = false)
{

    static $cache = array();
    $key = crc32($filename);
    if (isset($cache[$key])) {
        return $cache[$key];
    }

    if ($filename == false) {
        $filename = locate_page_file();
        if ($filename == false) {
            $cache[$key] = false;
            return false;
        }
    }
    if (!is_file($filename)) {
        $filename = locate_page_file($filename);
    }

    $item = str_replace('..', '', $filename);
    $ext = get_file_extension($item);
    if (is_file($item)) {
        $ext = strtolower($ext);

        switch ($ext) {
            case 'php';
                ob_start();
                include ($item);
                $content = ob_get_clean();
                break;
            case 'md':
                $content = file_get_contents($item);
                $Parsedown = new Parsedown();
                $content = $Parsedown->text($content);
                break;
            default:
                $content = file_get_contents($item);
                break;
        }


        $cont = (string)$content;
        if ($filter == 'clean') {
            $cont = strip_tags($cont);
            $cont = str_replace('-', ' ', $cont);
            $cont = str_replace("—", ' ', $cont);
            $cont = str_replace("\n", ' ', $cont);
            $cont = str_replace("  ", ' ', $cont);
            $cont = str_replace(" ();", ' ', $cont);
            $cont = trim($cont);
        }

        $cache[$key] = $cont;
        return $cont;
    } else {
        return false;
    }
}

function page_title($filename = false)
{
    $content = page_content($filename);

    if ($content) {
        $dom = new \DOMDocument;
        @$dom->loadHTML('<?xml encoding="UTF-8"><html><body>' . $content . '</body></html>');
        $title_found = false;

        foreach ($dom->getElementsByTagName('h1') as $node) {
            $title_found = $node->nodeValue;
            break;
        }
        if ($title_found == false) {
            foreach ($dom->getElementsByTagName('h2') as $node) {
                $title_found = $node->nodeValue;
                break;
            }
        }
        if ($title_found == false) {
            foreach ($dom->getElementsByTagName('h3') as $node) {
                $title_found = $node->nodeValue;
                break;
            }
        }
        return $title_found;
    }
}

function page_nav($path = false)
{
    if ($path == false) {
        $locate_file_content = url_path();
        if ($locate_file_content == '') {
            $locate_file_content = 'README';
        }
    } else {
        $locate_file_content = $path;
    }

    $basename = basename($locate_file_content);


    $locate_file_content = str_replace('..', '', $locate_file_content);
    $folder = __DIR__ . DIRECTORY_SEPARATOR . $locate_file_content;

    if (is_file($folder)) {
        $ext = get_file_extension($folder);
        $folder = dirname($folder) . DIRECTORY_SEPARATOR;
    }
    $cont = false;
    $folder = normalize_path($folder, true);

    if (!is_dir($folder)) {
        $folder = dirname($folder) . DIRECTORY_SEPARATOR;
    }

    if (is_dir($folder)) {
        $nav = $folder . '_Sidebar.md';
        if (is_file($nav)) {
            $cont = page_content($nav);
        }

        $nav = $folder . 'SUMMARY.md';
        if (is_file($nav)) {
            $cont = page_content($nav);
        }

        $nav = $folder . '_nav.md';
        if (is_file($nav)) {
            $cont = page_content($nav);
        }
        $nav = $folder . '_nav.php';
        if (is_file($nav)) {
            $cont = page_content($nav);
        }
    }
//    if ($cont == false) {
//        $folder = dirname($folder) . DIRECTORY_SEPARATOR;
//        print $folder;
//        $nav = $folder . '_Sidebar.md';
//        if (is_file($nav)) {
//            $cont = page_content($nav);
//        }
//    }


    if ($cont != false) {
        $s = '<a href="' . $basename;
        $r = '<a class="active" href="' . $basename;
        $cont = str_replace($s, $r, $cont);


        return $cont;

    }

}


function locate_page_file($path = false)
{

    if ($path == false) {
 
        $locate_file_content = url_path();

        if ($locate_file_content == '') {
            $locate_file_content = 'README';
        }
    } else {
        $locate_file_content = $path;
    }

    $locate_file_content = html_entity_decode($locate_file_content);

    $allowed_ext = array('.php', '.html', '.htm', '.md');
    $here = dirname(__FILE__) . DIRECTORY_SEPARATOR;
    $possible_file = normalize_path($here . $locate_file_content, false);
    $possible_file = str_replace('..', '', $possible_file);
    $possible_file2 = $possible_file . '/README.md';
    $possible_file2 = normalize_path($possible_file2, false);
    $possible_file3 = $possible_file . '/index.html';
    $possible_file3 = normalize_path($possible_file3, false);


    if (is_file($possible_file)) {
        return $possible_file;
    } else if (is_file($possible_file2)) {
        return $possible_file2;
    } else if (is_file($possible_file3)) {
        return $possible_file3;
    }
    foreach ($allowed_ext as $ext) {
        $find_possible_file = $possible_file . $ext;
        if (is_file($find_possible_file)) {
            return $find_possible_file;
        }
    }
    return false;
}


function site_url($add_string = false)
{
    static $site_url;
    if ($site_url == false) {
        $pageURL = 'http';
        if (isset($_SERVER["HTTPS"]) and ($_SERVER["HTTPS"] == "on")) {
            $pageURL .= "s";
        }
        $subdir_append = false;
        if (isset($_SERVER['REDIRECT_URL'])) {
            $subdir_append = $_SERVER['REDIRECT_URL'];
        }
        $pageURL .= "://";
        if (isset($_SERVER["HTTP_HOST"])) {
            $pageURL .= $_SERVER["HTTP_HOST"];
        } else if (isset($_SERVER["SERVER_NAME"]) and isset($_SERVER["SERVER_PORT"]) and $_SERVER["SERVER_PORT"] != "80") {
            $pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"];
        } elseif (isset($_SERVER["SERVER_NAME"])) {
            $pageURL .= $_SERVER["SERVER_NAME"];
        }
        $pageURL_host = $pageURL;
        $pageURL .= $subdir_append;
        $d = '';
        if (isset($_SERVER['SCRIPT_NAME'])) {
            $d = dirname($_SERVER['SCRIPT_NAME']);
            $d = trim($d, DIRECTORY_SEPARATOR);
        }
        if ($d == '') {
            $pageURL = $pageURL_host;
        } else {
            $pageURL_host = rtrim($pageURL_host, '/') . '/';
            $d = ltrim($d, '/');
            $d = ltrim($d, DIRECTORY_SEPARATOR);
            $pageURL = $pageURL_host . $d;
        }
        if (isset($_SERVER['QUERY_STRING'])) {
            $pageURL = str_replace($_SERVER['QUERY_STRING'], '', $pageURL);
        }
        $uz = parse_url($pageURL);
        if (isset($uz['query'])) {
            $pageURL = str_replace($uz['query'], '', $pageURL);
            $pageURL = rtrim($pageURL, '?');
        }
        $url_segs = explode('/', $pageURL);
        $i = 0;
        $unset = false;
        foreach ($url_segs as $v) {
            if ($unset == true and $d != '') {

                unset($url_segs[$i]);
            }
            if ($v == $d and $d != '') {

                $unset = true;
            }

            $i++;
        }
        $url_segs[] = '';
        $site_url = implode('/', $url_segs);
    }


    return $site_url . $add_string;
}

function current_url($skip_ajax = false, $no_get = false)
{
    $u = false;
    if ($skip_ajax == true) {
        $is_ajax = is_ajax();
        if ($is_ajax == true) {
            if ($_SERVER['HTTP_REFERER'] != false) {
                $u = $_SERVER['HTTP_REFERER'];
            }
        }
    }
    if ($u == false) {
        if (!isset($_SERVER['REQUEST_URI'])) {
            $serverrequri = $_SERVER['PHP_SELF'];
        } else {
            $serverrequri = $_SERVER['REQUEST_URI'];
        }

        $s =  '';
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
            $s = 's';
        }

        $protocol = 'http';
        $port = 80;
        if (isset($_SERVER["SERVER_PROTOCOL"])) {


            $protocol = strleft(strtolower($_SERVER["SERVER_PROTOCOL"]), "/") . $s;
        }
        if (isset($_SERVER["SERVER_PORT"])) {
            $port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":" . $_SERVER["SERVER_PORT"]);
        }
        if (isset($_SERVER["HTTP_HOST"])) {
            $u = $protocol . "://" . $_SERVER['HTTP_HOST'] . $port . $serverrequri;
        } else if (isset($_SERVER["SERVER_PORT"])) {
            $u = $protocol . "://" . $_SERVER['SERVER_NAME'] . $port . $serverrequri;
        }
    }
    if ($no_get == true) {
        $u = strtok($u, '?');
    }
    return $u;
}

function strleft($s1, $s2)
{
    return substr($s1, 0, strpos($s1, $s2));
}

function is_ajax()
{
    return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'));
}


function url_segment($k = -1, $page_url = false)
{
    $u = false;
    if ($page_url == false or $page_url == '') {
        $u1 = current_url();
    } else {
        $u1 = $page_url;
    }
    $u2 = site_url();
    $u1 = rtrim($u1, '\\');
    $u1 = rtrim($u1, '/');
    $u2 = rtrim($u2, '\\');
    $u2 = rtrim($u2, '/');
    $u2 = reduce_double_slashes($u2);
    $u1 = reduce_double_slashes($u1);
    $u2 = rawurldecode($u2);
    $u1 = rawurldecode($u1);
    $u1 = str_replace($u2, '', $u1);

    if (!isset($u) or $u == false) {
        $u = explode('/', trim(preg_replace('/([^\w\:\-\.\%\/])/i', '', current(explode('?', $u1, 2))), '/'));
    }
    $r = false;
    if ($k != -1 and isset($u[$k])) {
        $r = $u[$k];
    }
    return $k != -1 ? $r : $u;

}

function reduce_double_slashes($str)
{
    return preg_replace("#([^:])//+#", "\\1/", $str);
}

function url_path($skip_ajax = false)
{
    if ($skip_ajax == true) {
        $url = current_url($skip_ajax);
    } else {
        $url = false;
    }
    $u1 = implode('/', url_segment(-1, $url));
    return $u1;
}


function normalize_path($path, $slash_it = true)
{
    $path_original = $path;
    $s = DIRECTORY_SEPARATOR;
    $path = preg_replace('/[\/\\\]/', $s, $path);
    $path = str_replace($s . $s, $s, $path);
    if (strval($path) == '') {
        $path = $path_original;
    }
    if ($slash_it == false) {
        $path = rtrim($path, DIRECTORY_SEPARATOR);
    } else {
        $path .= DIRECTORY_SEPARATOR;
        $path = rtrim($path, DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR);
    }
    if (strval(trim($path)) == '' or strval(trim($path)) == '/') {
        $path = $path_original;
    }
    if ($slash_it == false) {
    } else {
        $path = $path . DIRECTORY_SEPARATOR;
        $path = reduce_double_slashes($path);
    }
    return $path;
}


function get_file_extension($LoSFileName)
{
    $LoSFileExtensions = substr($LoSFileName, strrpos($LoSFileName, '.') + 1);
    return $LoSFileExtensions;
}


