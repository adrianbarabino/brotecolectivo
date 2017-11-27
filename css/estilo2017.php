<?php
header("Content-type: text/css");
require "lessc.inc.php";
$less = new lessc;
echo $less->compileFile("style2017.less");

?>