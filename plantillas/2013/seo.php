<?php
if($_GET['page']){
  ?>
  <meta name="robots" content="noindex" />
<?php
}


$pagina = explode("/", $_SERVER["REQUEST_URI"]);
$pagina = $pagina[1];
$_GET['tag'] = explode("/", $_SERVER["REQUEST_URI"]);
$_GET['tag'] = $_GET['tag'][2];


if($pagina){

}else{
	$pagina = "inicio";
}

if($pagina == "inicio" && !$_GET['tag']){
$descripcion = "Somos un sitio de difusión cultural local, nos encargamos de darle un espacio a los grupos artísticos locales, donde podrán exponer lo que hacen, ya sea en formato de audio/video o difundiendo fechas próximas.";
  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

    <meta property="og:image" content="https://si0.twimg.com/profile_images/2510335865/c6o7dk6v2a19lz64uo1y.jpeg" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
<meta property="og:title" content="Brote Colectivo - Difusión cultural "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/inicio/"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
  <?php
}; 

if($pagina == "bandas-historicas" && !$_GET['tag']){
$descripcion_agenda = "Un poco de historia, una línea de tiempo con material, información y descargas sobre bandas que traen varios recuerdos.";
    $titulo_agenda = "Bandas Antiguas de la provincia en Brote Colectivo";
    $url_agenda = "http://www.brotecolectivo.com/bandas-antiguas/";  ?>

    <meta property="og:image" content="https://si0.twimg.com/profile_images/2510335865/c6o7dk6v2a19lz64uo1y.jpeg" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
<meta property="og:title" content="<?php echo $titulo_agenda; ?> "/>
    <meta property="og:url" content="<?php echo $url_agenda; ?>"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion_agenda; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion_agenda; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
  <?php
}; 
if($pagina == "artistas" && !$_GET['tag']){
$descripcion = "Encontrá diversos artistas y grupos artísticos de la provincia en esta sección de Brote Colectivo.";
  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

    <meta property="og:image" content="https://si0.twimg.com/profile_images/2510335865/c6o7dk6v2a19lz64uo1y.jpeg" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
<meta property="og:title" content="Artistas en Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/artistas/"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
  <?php
}; 
if($pagina == "agenda-cultural" && !$_GET['tag']){

		$descripcion_agenda = "Enterate de los próximos eventos culturales de Rio Gallegos en nuestra Agenda Cultural de Brote Colectivo.";
		$titulo_agenda = "Agenda Cultural de Rio Gallegos en Brote Colectivo";
		$url_agenda = "http://www.brotecolectivo.com/agenda-cultural/";

	?>
 <meta property="fb:app_id" content="388734317865660"/>    

    <meta property="og:image" content="https://si0.twimg.com/profile_images/2510335865/c6o7dk6v2a19lz64uo1y.jpeg" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
<meta property="og:title" content="<?php echo $titulo_agenda; ?> "/>
    <meta property="og:url" content="<?php echo $url_agenda; ?>"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion_agenda; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion_agenda; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
	<?php
}; 
if($pagina == "contacto"){
$descripcion = "Contactate con nosotros ante cualquier duda sobre el sitio, o para mandar información.";
	?>
 <meta property="fb:app_id" content="388734317865660"/>    

    <meta property="og:image" content="https://si0.twimg.com/profile_images/2510335865/c6o7dk6v2a19lz64uo1y.jpeg" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
<meta property="og:title" content="Contactate con Brote Colectivo "/>
    <meta property="og:url" content="http://www.brotecolectivo.com/contacto/"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 

<META NAME="description" CONTENT='<?php echo $descripcion; ?>' >
    <meta property="og:description"          content='<?php echo $descripcion; ?>'/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/487448_114688885402225_1820759896_n.jpg" /> 
	<?php
}; 


if($pagina == "publicidad"){

  ?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="Publicite en Brote Colectivo"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/<?php echo $url_amistosa['publicidad']; ?>/"/>
    <meta property="og:image" content="http://brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
    <meta property="og:image" content="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash3/525715_114688208735626_597260989_n.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="website" /> 
<META NAME="description" CONTENT="'El público en general del sitio es gente relacionada con el arte/musica local, personas que quieren conocer, y gente que tal ves no está relacionada con lo artístico pero entra a escuchar temas en el Reproductor MP3 del sitio.">

    <meta property="og:description"          content='El público en general del sitio es gente relacionada con el arte/musica local, personas que quieren conocer, y gente que tal ves no está relacionada con lo artístico pero entra a escuchar temas en el Reproductor MP3 del sitio.'/>
          <link rel="image_src" href="http://brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&w=500&h=500&zc=1" /> 
          <link rel="image_src" href="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash3/525715_114688208735626_597260989_n.jpg" /> 
  <?php
}

if($pagina == "noticia" && $_GET['tag']){

$consulta = $mysqli->query("SELECT contenido, titulo FROM noticias WHERE urltag = '".$_GET['tag']."'  LIMIT 0,1");

$resultado = $consulta->fetch_assoc();
$noticia_contenido = $resultado['contenido'];
$noticia_titulo = $resultado['titulo'];
$palabras_clave = $resultado['tags'];

	?>
 <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $noticia_titulo; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/noticia/<?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/entradas/<?php echo $_GET['tag']; ?>.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="article" /> 
<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto($noticia_contenido, 200)); ?>">

    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto($noticia_contenido, 200)); ?>"/>
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

if($pagina == "artistas" && $_GET['tag']){
$consulta = $mysqli->query("SELECT bio, nombre FROM bandas WHERE urltag = '".$_GET['tag']."'  LIMIT 0,1");

$resultado = $consulta->fetch_assoc();
$bandabio = $resultado['bio'];
$bandanombre = $resultado['nombre'];
$palabras_clave = $resultado['tags'];
?>

  <meta property="fb:app_id" content="388734317865660"/>    

<meta property="og:title" content="<?php echo $bandanombre; ?>"/>
    <meta property="og:url" content="http://www.brotecolectivo.com/artistas/<?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php/bandas/<?php echo $_GET['tag']; ?>.jpg" /> 
    <meta property="og:site_name" content="Brote Colectivo"/>
      <meta property="og:type"   content="brotecolectivo:banda" /> 

<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto($bandabio, 200)); ?>">
    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto($bandabio, 200)); ?>"/>
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $_GET['tag']; ?>.jpg&h=600" /> 
          <link rel="image_src" href="http://www.brotecolectivo.com/thumb/phpThumb.php/bandas/<?php echo $_GET['tag']; ?>.jpg" /> 
<?php

}elseif($pagina == "agenda-cultural" && $_GET['tag'])
{

	$consulta = $mysqli->query("SELECT id FROM fechas WHERE urltag = '".$_GET['tag']."'  LIMIT 0,1");

$resultado = $consulta->fetch_assoc();
                  $noticia = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/fechas/".$resultado['id']."/"));

$fecha_contenido = $noticia->contenido;
$fecha_titulo = $noticia->titulo;
$fecha_lugar = $noticia->lugar;
$palabras_clave = $noticia->tags;
$fecha_inicio_fb = $noticia->fecha_corta;
?>
 <script type="text/javascript">
  function asistireRecital()
  {
 var ACCESS_TOKEN = FB.getAccessToken();

if(ACCESS_TOKEN){


  
      FB.api(
        '/me/brotecolectivo:asistir',
        'post',
        { recital: 'http://www.brotecolectivo.com/agenda-cultural/<?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
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
        { recital: 'http://www.brotecolectivo.com/agenda-cultural/<?php echo $_GET['tag']; ?>/', access_token: ACCESS_TOKEN},
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
    <meta property="og:url" content="http://www.brotecolectivo.com/agenda-cultural/<?php echo $_GET['tag']; ?>/"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/<?php echo $_GET['tag']; ?>.jpg&h=600"/>
    <meta property="og:image" content="http://www.brotecolectivo.com/fechas/<?php echo $_GET['tag']; ?>.jpg"/>
    <meta property="og:site_name" content="Brote Colectivo"/>
    <meta property="brotecolectivo:place" content="<?php echo $fecha_lugar; ?>" />
      <meta property="og:type"   content="brotecolectivo:recital" /> 
<META NAME="description" CONTENT="<?php echo strip_tags(recortar_texto($fecha_contenido, 200)); ?>">

    <meta property="og:description"
          content="<?php echo strip_tags(recortar_texto($fecha_contenido, 200)); ?>"/>
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
<meta name="author" content="">
