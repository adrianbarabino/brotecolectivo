<?php

$mysqli = new mysqli($configuracion['db_host'],$configuracion['db_user'],$configuracion['db_pass'],$configuracion['db_name']);

if(mysqli_connect_errno()){
	echo "Error en la conexion: ". mysqli_connect_error();
	exit();
}


?>