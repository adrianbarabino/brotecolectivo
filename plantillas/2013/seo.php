<?php
if($_GET['page']){
  ?>
  <meta name="robots" content="noindex" />
<?php
}


$pagina = explode("/", $_SERVER["REQUEST_URI"]);
$pagina = $pagina[1];
$_GET['tag'] = explode("/", $_SERVER["REQUEST_URI"]);
$_GET['tag'] = $_GET['tag'][3];

print_r(explode("/", $_SERVER["REQUEST_URI"]));

if($pagina){

}else{
	$pagina = "inicio";
}

if($pagina == "inicio" && !$_GET['tag']){
$descripcion = "Somos un sitio de difusión cultural local, nos encargamos de darle un espacio a los grupos artísticos locales, donde podrán exponer lo que hacen, ya sea en formato de audio/video o difundiendo fechas próximas.";
  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Brote Colectivo - Difusión cultural "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/inicio/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
  <?php
}; 

if($pagina == "bandas-historicas" && !$_GET['tag']){
$descripcion_agenda = "Un poco de historia, una línea de tiempo con material, información y descargas sobre bandas que traen varios recuerdos.";
    $titulo_agenda = "Bandas Antiguas de la provincia en Brote Colectivo";
    $url_agenda = "http://www.brotecolectivo.com/bandas-antiguas/";  ?>

<meta property="og:title" content="<?php echo $titulo_agenda; ?> "/>
    <meta property="og:url" content="<?php echo $url_agenda; ?>"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion_agenda; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion_agenda; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
  <?php
}; 
if($pagina == "bandas" && !$_GET['tag']){
$descripcion = "Encontrá diversos artistas y grupos artísticos de la provincia en esta sección de Brote Colectivo.";
  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Artistas en Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/artistas/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
  <?php
}; 
if($pagina == "programas" && !$_GET['tag']){
$descripcion = "Estas son las grabaciones del programa radial de Brote Colectivo, el programa sale los Jueves desde las 22 horas por FM Abril 105.7.";
  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Archivo de Programas en Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/programas/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
  <?php
}; 
if($pagina == "agenda-cultural" && !$_GET['tag']){

		$descripcion_agenda = "Enterate de los próximos eventos culturales de Rio Gallegos en nuestra Agenda Cultural de Brote Colectivo.";
		$titulo_agenda = "Agenda Cultural de Rio Gallegos en Brote Colectivo";
		$url_agenda = "http://www.brotecolectivo.com/agenda-cultural/gallegos/";

	?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $titulo_agenda; ?> "/>
    <meta property="og:url" content="<?php echo $url_agenda; ?>"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion_agenda; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion_agenda; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
	<?php
}; 
if($pagina == "contacto"){
$descripcion = "Contactate con nosotros ante cualquier duda sobre el sitio, o para mandar información.";
	?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Contactate con Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/contacto/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
	<?php
}; 
if($pagina == "mp3"){
$descripcion = "Escuchá y disfrutá de material en formato de audio de artistas de la provincia, en Brote Colectivo. Desde el heavy metal, al folklore hacen que esta sea una de las secciones destacadas del sitio, gracias a la variedad musical de los artistas provinciales.";
	?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Reproductor MP3 en Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/reproductor-mp3/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/falta_menos.jpg" /> 
	<?php
}; 

if($pagina == "video" && $_GET['tag']){
$consulta = mysql_query("SELECT * FROM videos WHERE urltag = '".$_GET['tag']."'  LIMIT 0,1",$conexion);
$resultado = mysql_fetch_array($consulta);

$idbandas = $resultado['idbanda'];
$idbandas= str_ireplace("[", "(", $idbandas);
$idbandas= str_ireplace("]", ")", $idbandas);
$consulta2 = mysql_query("SELECT * FROM bandas WHERE id  IN ".$idbandas."  LIMIT 0,1",$conexion);
$resultado2 = mysql_fetch_array($consulta2);


require_once 'Zend/Loader.php'; // the Zend dir must be in your include_path
Zend_Loader::loadClass('Zend_Gdata_YouTube');
$yt = new Zend_Gdata_YouTube();
$videoEntry = $yt->getVideoEntry($resultado['idyoutube']);
$titulo = $videoEntry->getVideoTitle();
$descripcion = $videoEntry->getVideodescription();
$duracion = $videoEntry->getVideoDuration();


  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $titulo; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['videos']; ?><?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://img.youtube.com/vi/<?php echo $resultado['idyoutube']; ?>/0.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="video.other" /> 
      <meta property="video:duration"   content="<?php echo $duracion; ?>" /> 
<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://img.youtube.com/vi/<?php echo $resultado['idyoutube']; ?>/0.jpg" /> 
  <?php
};
if($pagina == "publicidad"){

  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Publicite en Brote Colectivo"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['publicidad']; ?>/"/>
    <meta property="og:image" content="http://brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 
<META NAME="description" CONTENT="'El público en general del sitio es gente relacionada con el arte/musica local, personas que quieren conocer, y gente que tal ves no está relacionada con lo artístico pero entra a escuchar temas en el Reproductor MP3 del sitio.">

    <meta property="og:description"          content='El público en general del sitio es gente relacionada con el arte/musica local, personas que quieren conocer, y gente que tal ves no está relacionada con lo artístico pero entra a escuchar temas en el Reproductor MP3 del sitio.'/>
          <link rel="image_src" href="http://brotecolectivo.com/entradas/falta_menos.jpg" /> 
  <?php
}

// if($pagina == "galeria-de-fotos"){

// function eliminarblancos($cadena){
//          $cadena = trim($cadena);
//          $cadena = preg_replace('/\s(?=\s)/', '', $cadena);
//          $cadena = ereg_replace( "([ ]+)", "", $cadena );
//              $cadena = str_replace(' ', '', $cadena);
//                  $cadena = str_replace('/', '', $cadena);
//          $cadena = preg_replace('/[\n\r\t]/', ' ', $cadena);
//          return $cadena;
// }

// require_once '/home/brotecol/public_html/Zend/Loader.php';
// Zend_Loader::loadClass('Zend_Gdata_Photos');
// Zend_Loader::loadClass('Zend_Gdata_ClientLogin');
// Zend_Loader::loadClass('Zend_Gdata_AuthSub');



// $user = "adrian.barabino@brotecolectivo.com";
// $pass = "###";

// $serviceName = Zend_Gdata_Photos::AUTH_SERVICE_NAME;
// $client = Zend_Gdata_ClientLogin::getHttpClient($user, $pass, $serviceName);

// // update the second argument to be CompanyName-ProductName-Version
// $gp = new Zend_Gdata_Photos($client, "Google-DevelopersGuide-1.0");


// }
// if($pagina == "galeria-de-fotos" && $_GET['tag']){
// $urltag = $_GET['tag'];
//        $query_a_db = "SELECT * FROM album where urltag='$urltag'";


// $ejecuto_query = mysql_query($query_a_db, $conexion) or die(mysql_error());
// $banda=mysql_fetch_array($ejecuto_query);
// $idalbum = $banda['id'];
// $tituloalbum = $banda['titulo'];
// $idpicassa = $banda['idpicassa'];

// $noticiabandas2 = $banda['idbanda'];
// $noticiabandas = json_decode($banda['idbanda']);
// $descripcion = $banda['descripcion'];
// $feedURL = "http://picasaweb.google.com/data/feed/api/user/105229146487032098337/albumid/".$idpicassa;

// error_reporting(0);
//     // read feed into SimpleXML object
//     $entry = simplexml_load_file($feedURL);
//       $thumb = $entry->icon;

//       $descripcion = $entry->subtitle;
// ?>

<!--   <meta property="fb:app_id" content="388734317865660"/>    

 <meta property="og:title" content='<?php echo $tituloalbum; ?>'/>
     <meta property="og:url" content="http:www.brotecolectivo.com/<?php echo $url_amistosa['galeria-de-fotos']; ?><?php echo $_GET['tag']; ?>/"/>
     <meta property="og:image" content="<?php echo $thumb; ?>" /> 
     <meta property="og:site_name" content="Brote Colectivo"/>
       <meta property="og:type"   content="music.album" /> 
 <META NAME="description" CONTENT="<?php echo $descripcion; ?>">
     <meta property="og:description"
           content='<?php echo $descripcion; ?>'/>
           <link rel="image_src" href="<?php echo $thumb; ?>" />  -->
<?php

// }

// if($pagina == "programas" && $_GET['tag']){


  ?>
<!--  <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $programa_titulo; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['programas']; ?><?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://brotecolectivo.com/entradas/falta_menos.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 
<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto5($programa_contenido, 200)); ?>">

    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto5($programa_contenido, 200)); ?>"/>
          <link rel="image_src" href="http://brotecolectivo.com/entradas/falta_menos.jpg" />  -->
        <?php
      // }

if($pagina == "noticia" && $_GET['tag']){


	?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $noticia_titulo; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/noticia/<?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/<?php echo $_GET['tag']; ?>.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="article" /> 
<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto5($noticia_contenido, 200)); ?>">

    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto5($noticia_contenido, 200)); ?>"/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
          <link rel="image_src" href="http://www.brotecolectivo.com/entradas/<?php echo $_GET['tag']; ?>.jpg" /> 
 <script type="text/javascript">
  function leerArticle()
  {
 var ACCESS_TOKEN = FB.getAccessToken();

   if(ACCESS_TOKEN){


      FB.api(
        '/me/news.reads',
        'post',
        { article: 'http://www.brotecolectivo.com/noticia/<?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
        function(response) {
           if (!response || response.error) {
           	  console.log(response.error)
              alert('Error occured: ' + response.error.message);
              alert(ACCESS_TOKEN);

           } else {
           }
        });
    }else{
      
    FB.login(function(response) {
   if (response.authResponse) {
     console.log('Bienvenido! Actualizando informacion.... ');
     FB.api('/me', function(response) {
       console.log('Es bueno verte de nuevo, ' + response.name + '.');
     });
           FB.api(
        '/me/news.reads',
        'post',
        { article: 'http://www.brotecolectivo.com/noticia/<?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
        function(response) {
           if (!response || response.error) {
              console.log(response.error)
              alert('Error occured: ' + response.error.message);
              alert(ACCESS_TOKEN);

           } else {
           }
        });
   } else {
     console.log('Usuario cancelo el log in o no tenia.');
   }
 }, { scope:'publish_actions,manage_pages,offline_access'});


    }
  }
  </script>
	<?php


}

if($pagina == "bandas" && $_GET['tag']){

?>
<script>
 function postToFeed() {
FB.ui({
  method: 'feed',
  display: 'popup',
source: 'http://flash-mp3-player.net/medias/player_mp3.swf?mp3=<?php echo $cancion_de_banda; ?>',
name: 'title',
picture: 'http://brotecolectivo.com/contenido/imagenes/bandas/<?php echo $_GET['tag']; ?>.jpg',
description: 'description'
 
});
};

</script>
  <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $bandanombre; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['bandas']; ?><?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php/bandas/<?php echo $_GET['tag']; ?>.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="brotecolectivo:banda" /> 

<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto5($bandabio, 200)); ?>">
    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto5($bandabio, 200)); ?>"/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php/bandas/<?php echo $_GET['tag']; ?>.jpg" /> 
<?php

}elseif($pagina == "agenda" && $_GET['tag'])
{
?>
 <script type="text/javascript">
  function asistireRecital()
  {
 var ACCESS_TOKEN = FB.getAccessToken();

if(ACCESS_TOKEN){


  
      FB.api(
        '/me/brotecolectivo:asistir',
        'post',
        { recital: 'http://www.brotecolectivo.com/<?php echo $url_amistosa['agenda']; ?><?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
        function(response) {
           if (!response || response.error) {
           	  console.log(response.error)
              alert('Error occured: ' + response.error.message);
              alert(ACCESS_TOKEN);

           } else {
              alert('Perfecto, ya estás anotado, ACCION: ' + response.id);
           }
        });
    }else{

    FB.login(function(response) {
   if (response.authResponse) {
     console.log('Bienvenido! Actualizando informacion.... ');
     FB.api('/me', function(response) {
       console.log('Es bueno verte de nuevo, ' + response.name + '.');
     });
     FB.api(
        '/me/brotecolectivo:asistir',
        'post',
        { recital: 'http://www.brotecolectivo.com/<?php echo $url_amistosa['agenda']; ?><?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
        function(response) {
           if (!response || response.error) {
              console.log(response.error)
              alert('Error occured: ' + response.error.message);
              alert(ACCESS_TOKEN);

           } else {
              alert('Perfecto, ya estás anotado, ACCION: ' + response.id);
           }
        });
   } else {
     console.log('Usuario cancelo el log in o no tenia.');
   }
    }, { scope:'publish_actions,manage_pages,offline_access,user_photos,friends_photos,photo_upload'});
    };
  }
  </script>
      <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $fecha_inicio_fb; ?> - <?php echo $fecha_titulo; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['agenda']; ?><?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/<?php echo $_GET['tag']; ?>.jpg&h=600"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/fechas/<?php echo $_GET['tag']; ?>.jpg"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
    <meta property="brotecolectivo:place" content="<?php echo $fecha_lugar; ?>" />
      <meta property="og:type"   content="brotecolectivo:recital" /> 
<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto5($fecha_contenido, 200)); ?>">

    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto5($fecha_contenido, 200)); ?>"/>
<link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
<?php

}

if($palabras_clave){

	?>
<META name="keywords" content="<?php echo $palabras_clave; ?>, <?php echo $etiquetas_clave; ?>">
<?php
}else{
	?>
<META name="keywords" content="<?php echo $etiquetas_clave; ?>">

	<?php
}

?>
<meta name="author" content="Adrian Barabino">