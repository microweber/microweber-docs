<?php
/*
  ___  _   _ _____
 / _ \| \ | | ____|
| | | |  \| |  _|
| |_| | |\  | |___
 \___/|_| \_|_____|


One file site generator.

*/


function page_content($filename = false)
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
    if (is_file($item)) {
        ob_start();
        include ($item);
        $content = ob_get_clean();
        $cache[$key] = $content;
        return $content;
    } else {
        return false;
    }

}


function locate_page_file($path = false)
{

    if ($path == false) {
        $locate_file_content = url_path();
        if ($locate_file_content == '') {
            $locate_file_content = 'home';
        }
    } else {
        $locate_file_content = $path;
    }


    $allowed_ext = array('.php', '.html', '.htm', '.md');
    $here = dirname(__FILE__) . DIRECTORY_SEPARATOR;
    $possible_file = normalize_path($here . $locate_file_content, false);
    $possible_file = str_replace('..', '', $possible_file);
    if (is_file($possible_file)) {
        return $possible_file;
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
        if (isset($_SERVER["SERVER_NAME"]) and isset($_SERVER["SERVER_PORT"]) and $_SERVER["SERVER_PORT"] != "80") {
            $pageURL .= $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"];
        } elseif (isset($_SERVER["SERVER_NAME"])) {
            $pageURL .= $_SERVER["SERVER_NAME"];
        } else if (isset($_SERVER["HOSTNAME"])) {
            $pageURL .= $_SERVER["HOSTNAME"];
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

        $s = empty($_SERVER["HTTPS"]) ? '' : ($_SERVER["HTTPS"] == "on") ? "s" : "";

        $protocol = 'http';
        $port = 80;
        if (isset($_SERVER["SERVER_PROTOCOL"])) {


            $protocol = strleft(strtolower($_SERVER["SERVER_PROTOCOL"]), "/") . $s;
        }
        if (isset($_SERVER["SERVER_PORT"])) {
            $port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":" . $_SERVER["SERVER_PORT"]);
        }
        if (isset($_SERVER["SERVER_PORT"])) {
            $u = $protocol . "://" . $_SERVER['SERVER_NAME'] . $port . $serverrequri;
        } elseif (isset($_SERVER["HOSTNAME"])) {
            $u = $protocol . "://" . $_SERVER['HOSTNAME'] . $port . $serverrequri;
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