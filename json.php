<?php
header('Content-type: text/json');
header('Content-type: application/json');

require ("configuracion.php");
require ("conexion.php");
function limpiar_cadena($s) {
    $s = str_replace('"', "'", $s);    
    $s = trim(preg_replace('/\s+/', ' ', $s));
    $result = utf8_encode($s);
    return $result;
}
if($_POST['tabla']){
    $tabla = $_POST['tabla'];
}else{
    $tabla = "bandas";
}

    if($_POST['order'] OR $_POST['where'] OR $_POST['nuevos'] OR $_POST['limit']){
    $consulta = "SELECT * FROM ".$tabla." ";
    if($tabla == "fechas"){
        $consulta = $consulta."F INNER JOIN lugares L on F.idlugar =L.id ";
    }

    if($_POST['where']){
        $where = $_POST['where'];
        $where2 = $_POST['where2'];
        $consulta = $consulta."WHERE `".$where."` = `".$where2."` ";
        

    }
    if($tabla == "fechas"){
        if($_POST['nuevos']){    

            $consulta = $consulta."WHERE fecha_fin > TIMESTAMP( NOW( ) - INTERVAL 86 HOUR ) ";
        }
        if($_POST['banda']){
            $bandaid = $_POST['banda'];
            $consulta = $consulta." WHERE idbanda  REGEXP '[[:<:]]".$bandaid."[[:>:]]' ";
        }
    }
    if($_POST['order']){
        $order = $_POST['order'];


        if($_POST['order2']){
        $order2 = $_POST['order2'];
    }else{
        $order2 = "asc";
    }

        $consulta = $consulta."ORDER BY  ".$order." ".$order2." ";
    }
    if($_POST['limit']){
        $limit = $_POST['limit'];
        }else{
            $limit = "0,30";
        }
            $consulta = $consulta." LIMIT ".$limit." ";
        
    }else{
        $_POST['order'] = "id";
if($tabla == "fechas"){
    $consulta = $consulta."SELECT * FROM ".$tabla." F INNER JOIN lugares L on F.idlugar =L.id ORDER BY  `F`.`id` DESC LIMIT 0,30 ";
    }else{
            $consulta = $consulta."SELECT * FROM ".$tabla." ORDER BY  `".$tabla."`.`id` DESC LIMIT 0,30 ";
        }
    }

    // lines for testing
     if($tabla == "fechas"){
        echo $consulta;
     }
if ($resultado = $mysqli->query($consulta)) {



        echo "[";
            

            while ($row = $resultado->fetch_assoc()) {
                if($tabla == "bandas"){
                    $banda_id = $row['id'];
                    $banda_nombre = $row['nombre'];
                    $banda_bio = limpiar_cadena($row['bio']);
                    
                    $banda_urltag = $row['urltag'];
                    $banda_social = json_decode($row['social']);

                    
                     $respuesta .= '{';
                     $respuesta .= '"id": '.$banda_id.' ,';
                     $respuesta .= '"nombre": "'.$banda_nombre.'",';
                     $respuesta .= '"bio": "'.$banda_bio.'",';
                     $respuesta .= '"urltag": "'.$banda_urltag.'",';
                     $respuesta .= '"social": {';
                     $respuesta .= '"facebook": "'.$banda_social->facebook.'",';
                     $respuesta .= '"twitter": "'.$banda_social->twitter.'",';
                     $respuesta .= '"sitioweb": "'.$banda_social->sitioweb.'",';
                     $respuesta .= '"soundcloud":"'.$banda_social->soundcloud.'",';
                     $respuesta .= '"youtube":"'.$banda_social->youtube.'",';
                     $respuesta .= '"grooveshark":"'.$banda_social->grooveshark.'",';
                     $respuesta .= '"vimeo":"'.$banda_social->vimeo.'"';
                     $respuesta .= '}';
                     $respuesta .= '},';


                }elseif($tabla == "fechas"){

                    $fecha_id = $row['id'];
                    $fecha_idbanda = json_decode($row['idbanda']);

                    error_reporting(0);
                              if(in_array(0, $fecha_idbanda)){

                              } else {
                    if($fecha_idbanda[0] == 0){ 
                        $fecha_bandas = "Ninguna";
                                    }
                                 }
                    reset($fecha_idbanda);
                    while (list(, $value) = each($fecha_idbanda)) {
                      $consultar_bandas = "SELECT nombre FROM bandas WHERE id = ".$value.";";


                    $resultado_bandas = $mysqli->query($consultar_bandas);
                    while($bandas=$resultado_bandas->fetch_assoc()){
                    $cadena .= $bandas['nombre']. ", ";
                    }

                    }
                      $fecha_bandas = substr($cadena,0,-2);  
                    unset ($cadena);

                    $fecha_lugar = $row['nombre'];
                    $fecha_direccion = $row['direccion'];
                    $fecha_coordenadas = $row['coordenadas'];
                    $fecha_interior = $row['interior'];
                    $fecha_tags = $row['tags'];
                    $fecha_contenido = limpiar_cadena($row['contenido']);
                    $fecha_urltag = $row['urltag'];
                    $fecha_inicio = $row['fecha_inicio'];
                    $fecha_fin = $row['fecha_fin'];

                    
                     $respuesta .= '{';
                     $respuesta .= '"id": '.$fecha_id.' ,';
                     $respuesta .= '"bandas": "'.$fecha_bandas.'",';
                     $respuesta .= '"lugar": "'.$fecha_lugar.'",';
                     $respuesta .= '"direccion": "'.$fecha_direccion.'",';
                     $respuesta .= '"coordenadas": "'.$fecha_coordenadas.'",';
                     $respuesta .= '"tags": "'.$fecha_tags.'",';
                     $respuesta .= '"interior": "'.$fecha_interior.'",';
                     $respuesta .= '"contenido": "'.$fecha_contenido.'",';
                     $respuesta .= '"urltag": "'.$fecha_urltag.'",';
                     $respuesta .= '"inicio": "'.$fecha_inicio.'",';
                     $respuesta .= '"fin": "'.$fecha_fin.'"';
                     $respuesta .= '},';                    
                }
            }
            echo substr($respuesta, 0, -1);
            echo "]";
    


    /* free result set */
    $resultado->free();
}
?>