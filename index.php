<?php

// ehh, aca estoy cargando la config

require ("configuracion.php");
require ("conexion.php");


function enlace_interno($url){

	$direccion = "/".$url;

	echo $direccion;
}
$pagina = strtolower($_GET['pagina']);




 $pagina = "inicio";



if($pagina == "contacto" OR $pagina == "inicio" OR $pagina == "artistas" OR $pagina == "agenda-cultural"){

}else{$pagina = "404";	

}



$plantilla = $configuracion['plantilla'];

//aca estoy cargando la plantilla

require ("./plantillas/".$plantilla."/plantilla.php");



?>
