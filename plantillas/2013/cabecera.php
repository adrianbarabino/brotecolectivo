<?php
function leer_contenido_completo($url){
   $fichero_url = fopen ($url, "r");
   $texto = "";
   while ($trozo = fgets($fichero_url, 1024)){
      $texto .= $trozo;
   }
   return $texto;
}

function recortar_texto($texto, $longitud = 180) { 
if((strlen($texto) > $longitud)) { 
    $pos_espacios = strpos($texto, ' ', $longitud) - 1; 
    if($pos_espacios > 0) { 
        $caracteres = count_chars(substr($texto, 0, ($pos_espacios + 1)), 1); 
        if ($caracteres[ord('<')] > $caracteres[ord('>')]) { 
            $pos_espacios = strpos($texto, ">", $pos_espacios) - 1; 
        } 
        $texto = substr($texto, 0, ($pos_espacios + 1)).''; 
    } 
    if(preg_match_all("|(<([\w]+)[^>]*>)|", $texto, $buffer)) { 
        if(!empty($buffer[1])) { 
            preg_match_all("|</([a-zA-Z]+)>|", $texto, $buffer2); 
            if(count($buffer[2]) != count($buffer2[1])) { 
                $cierrotags = array_diff($buffer[2], $buffer2[1]); 
                $cierrotags = array_reverse($cierrotags); 
                foreach($cierrotags as $tag) { 
                        $texto .= '</'.$tag.'>'; 
                } 
            } 
        } 
    } 
 
} 
return $texto; 
} 
?><!doctype html>
<html lang="es" class="no-js" xmlns:fb="http://ogp.me/ns/fb#">

  <head>
    <meta charset="utf-8"/>
    <title><?php echo $configuracion['tituloweb']; ?> - Inicio</title>
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/estilo.php" />
    <link rel="stylesheet" type="text/css" href="/css/bjqs.css" />

    <!--[if lt IE 9]>
      <script src="/js/css3-mediaqueries.js"></script>
    <![endif]-->
    <link href="/css/normalize.css" rel="stylesheet">
    <link href="/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" media="screen" href="/css/superfish.css" /> 
    <link rel="stylesheet" media="screen" href="/css/lightbox.css" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- Adding "maximum-scale=1" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->
    

    
    
    <!-- GOOGLE FONTS -->
    <link href='http://fonts.googleapis.com/css?family=Allan' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    
    <!-- Lessgrid -->
    <link rel="stylesheet" media="all" href="/css/lessgrid.css"/>
    <?php

    require($configuracion['ruta_plantillas']."./seo.php");
    ?>

  </head>
  <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=388734317865660";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
  <body lang="es">
  
