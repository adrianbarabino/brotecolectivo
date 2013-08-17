<?php
function leer_contenido_completo($url){
   $fichero_url = fopen ($url, "r");
   $texto = "";
   while ($trozo = fgets($fichero_url, 1024)){
      $texto .= $trozo;
   }
   return $texto;
}

?><!doctype html>
<html class="no-js" xmlns:fb="http://ogp.me/ns/fb#">

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
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- Adding "maximum-scale=1" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->
    

    
    
    <!-- GOOGLE FONTS -->
    <link href='http://fonts.googleapis.com/css?family=Allan' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    
    <!-- Lessgrid -->
    <link rel="stylesheet" media="all" href="/css/lessgrid.css"/>
    <?php

    require("seo.php");
    ?>

  </head>
  
  <body lang="en">
  
