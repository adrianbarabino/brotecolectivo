
        <!-- masthead -->
            <div id="masthead">
          <span class="head">Bienvenido a Brote Colectivo</span><span class="subhead">sitio de difusión cultural en Santa Cruz, Argentina</span>
          <ul class="breadcrumbs">
            <li ><a href="javascript:void(0)" id="bread1">home</a></li>
            <li id="bread2">/ bienvenido</li>
          </ul>
        </div>
            <!-- ENDS masthead -->
            
            
            
            <div id="cargando_pagina"></div>
            <!-- posts list -->
            <div id="posts-list">
              <section id="bandasAntiguas" style="display:none;">
                
                <div id="my-timeline"></div>

                    <style>

                .vco-timeline .vco-navigation .timenav-background .timenav-tag div h3{
                display:none;
                }
                .vco-slider .slider-item .content .content-container .text .container .slide-tag {
                display:none;
                }
                </style>  
              </section>
              <section id="inicio" style="display:none;">
  <article class="format-standard">
           
            

            
            <div class="meta"></div>
            
            
              <div class="feature-image">
              <a href="http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg" data-rel="prettyPhoto" ><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/20-06-agenda-del-finde.jpg&amp;w=150&amp;h=100&amp;zc=1" class="foto-entrada"></a>
</div>
            <div class="excerpt">
              <p>
                Brote Colectivo es un sitio de información cultural referida a artistas que residen en la provincia de Santa Cruz.
                Proponemos en este espacio brindarte la posibilidad de descubrir el labor de los diferentes artistas que se
                encuentran en nuestro sitio.
              </p>
              <p>
                Si es la primera vez que navegás en este sitio, recomendamos utilizar el reproductor de música que se encuentra en la parte inferior del sitio, y navegar mediante el menú de arriba en la sección de Noticias y Artistas.
              </p>
              </div>

            
          

        </article>
          <article class="slider">
            
          <h2>Últimas noticias</h2>


          <div id="slide-home">
 
          <ul class="bjqs">
    <?php
                  $noticias_al_azar = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/noticias/?limit=5&importantes=si&order=noticias.id&corto=si"));

                    $indice_noticia = 0;
    foreach ($noticias_al_azar as $noticia){
                    $indice_noticia++;
  $noticiatitulo = $noticia->titulo;
  $noticiaurltag = $noticia->urltag;
  $noticiacontenido = $noticia->contenido_corto;
  ?>
          <li><a href="javascript:void(0)" rel="address:/noticia/<?php echo $noticiaurltag; ?>"><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $noticiaurltag; ?>.jpg&w=500&h=200&zc=1" title="<?php echo $noticiatitulo; ?>"></a></li>


<?php
}
?>

</ul> 
</div>
          </article>


  
              
            </section>
              <section id="noticias" style="display:none;">
        <script id="Article_tpl" type="text/template">
           
            

            
            <h1><a href="javascript:void(0);" class="post-heading"><%= post.titulo %></a></h1>
            <div class="meta"> Publicado el <%= post.fecha_corta %>
          , Artistas relacionados: <%= post.bandas %>  - <div style="display:inline-block; "class="fb-comments-count" data-href="http://www.brotecolectivo.com/noticia/<%= post.urltag %>/">0</div> comentarios
            </div>
            
            
              <div class="feature-image">
              <a href="http://brotecolectivo.com/entradas/<%= post.urltag %>.jpg" rel="lightbox" title=""><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/<%= post.urltag %>.jpg&w=150&h=100&zc=1" alt="<%= post.titulo %>" class="foto-entrada"/></a>
</div>
            <div class="excerpt">
            <%= post.contenido_corto %></div>
            <a href="javascript:void(0);" class="read-more">leer mas</a>
            
          

        </script>
            
          
  
              
            </section>



      <div id="single" style="display:none;">
        <div id="mapa_evento"></div>
        <section class="info-evento">
          <h2>

        </h2>

        <div class="seccion donde">
        
        </div>
        <div class="seccion cuando" style="display:none;">
            
        </div>
        </section>
        <a class="foto_evento" data-lightbox="foto_evento"  rel="lightbox" href="javascript:void(0)">
          <figure>
            <img data-src="holder.js/300x200" alt="300x200"  src="/img/cargando.gif" alt="">
          </figure>   
        </a>

        <article class="bio-single">
        </article>
      </div>
      <ul class="thumbnails" id="artistas" style="position:relative;left:0px;display:none;">
         <script id="Artista_tpl" type="text/template">
         
        <section class="thumbnail" style="padding:0;">
        <a href="javascript:void(0)" data-tipo="lightbox">
          <img data-src="holder.js/300x200" alt="300x200"  src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<%= post.urltag %>.jpg&w=300&h=200&zc=1" alt="">
        </a>
          <div class="caption">
            <h3><%= post.nombre %></h3>
            <div class="bio">
            <p><%= post.bio_corta %></p>

            
            </div>
          </div>
        </section>
      
        </script>
  
    </ul>
      <ul class="thumbnails" id="fechas" style="position:relative;left:0px;display:none;">
         <script id="Fecha_tpl" type="text/template">
         
        <section class="thumbnail" style="padding:0;">
            <img data-src="holder.js/300x200" alt="300x200"  src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/<%= post.urltag %>.jpg&w=300&h=200&zc=1" alt="">
          <div class="caption">
            <h3><%= post.titulo %></h3>
            <div class="bio">
            <p><%= post.contenido_corto %></p>
            </div>
          </div>
        </section>
      
        </script>
  
    </ul>
<div id="pagination"></div>
            </div>
            <!-- ENDS posts list -->