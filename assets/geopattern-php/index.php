<?php  


$string='Microweber';
$height = 100;
$width = 800;
if(isset($_REQUEST['s'])){
$string=$_REQUEST['s'];	
}
require_once('src/geopattern_loader.php');


$geopattern = new \RedeyeVentures\GeoPattern\GeoPattern();
$geopattern->setString($string);
//$geopattern->opacity(10);

//$geopattern->setHeight($height);
//$geopattern->setWidth($width);
 
$svg = $geopattern->toSVG();



print $svg;