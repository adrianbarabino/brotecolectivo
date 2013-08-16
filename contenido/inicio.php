
        <!-- masthead -->
            <div id="masthead">
          <span class="head">Bienvenido a Brote Colectivo</span><span class="subhead">sitio de difusión cultural en Santa Cruz, Argentina</span>
          <ul class="breadcrumbs">
            <li><a href="index.php">home</a></li>
            <li>/ bienvenido</li>
          </ul>
        </div>
            <!-- ENDS masthead -->
            
            
            
            <div id="cargando_pagina"></div>
            <!-- posts list -->
            <div id="posts-list">
              <section id="inicio" style="display:none;">
  
            <h2>Home</h2>

  
              
            </section>
              <section id="noticias" style="display:none;">
        <script id="Article_tpl" type="text/template">
           
            

            
            <h1><a href="javascript:void(0);" class="post-heading"><%= post.titulo %></a></h1>
            <div class="meta"> Publicado el <%= post.fecha_corta %>
          , Artistas relacionados: <%= post.bandas %>  - <fb:comments-count href="http://www.brotecolectivo.com/noticia/<%= post.urltag %>/"></fb:comments-count> comentarios
            </div>
            
            
              <div class="feature-image">
              <a href="http://brotecolectivo.com/entradas/<%= post.urltag %>.jpg" data-rel="prettyPhoto" title="Continuando con el objetivo de conocer artistas de nuestra provincia, dialogamos con Eduardo Guajardo, reconocido m&uacute;sico santacruce&ntilde;o de 45 a&ntilde;os, quien se define..."><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/<%= post.urltag %>.jpg&w=150&h=100&zc=1" alt="<%= post.titulo %>" class="foto-entrada"/></a>
</div>
            <div class="excerpt">
            <%= post.contenido_corto %></div>
            <a href="javascript:void(0);" class="read-more">leer mas</a>
            
          

        </script>
            
          
  
              
            </section>



      <div id="single" style="display:none;">
        <h1 class="titulo-single"></h1>
        <div id="mapa_evento"></div>
        <img data-src="holder.js/300x200" alt="300x200"  src="/img/cargando.gif" alt="">
        <article class="bio-single">
        </article>
        <article class="ubicacion">
          <h2></h2>
          <h3></h3>
        </article>
      </div>
      <ul class="thumbnails" id="artistas" style="position:relative;left:0px;display:none;">
         <script id="Artista_tpl" type="text/template">
         
        <section class="thumbnail" style="padding:0;">
          <img data-src="holder.js/300x200" alt="300x200"  src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<%= post.urltag %>.jpg&w=300&h=200&zc=1" alt="">
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
    <!-- sample template for pagination UI -->
    <script type="text/html" id="tmpServerPagination">
      <div class="breadcrumb">

          <% if (currentPage < totalPages) { %>
            <a href="#" class="btn long servernext">Show More</a>
          <% } %>

        </div>
      </script>
<div id="pagination"></div>
            </div>
            <!-- ENDS posts list -->