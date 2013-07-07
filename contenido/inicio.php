
        <!-- masthead -->
            <div id="masthead">
          <span class="head">Bienvenido a Brote Colectivo</span><span class="subhead"> sitio de difusión cultural en Santa Cruz</span>
          <ul class="breadcrumbs">
            <li><a href="index.php">home</a></li>
            <li>/ bienvenido</li>
          </ul>
        </div>
            <!-- ENDS masthead -->
            
            
            
            <!-- posts list -->
            <div id="posts-list">
              <section id="inicio">
        <script id="Article_tpl" type="text/template">
           <article class="format-standard" id="{{ post.urltag }}">
            

            
            <h1><a href="http://brotecolectivo.com/noticia/{{ post.urltag }}/" class="post-heading">{{ post.titulo }}</a></h1>
            <div class="meta"> Publicado el {{ post.fecha_corta }}
          , Bandas relacionadas: {{ post.bandas }}  - <fb:comments-count href="http://www.brotecolectivo.com/noticia/{{ post.urltag }}/"></fb:comments-count> comentarios
            </div>
            
            
              <div class="feature-image">
              <a href="http://brotecolectivo.com/entradas/{{ post.urltag }}.jpg" data-rel="prettyPhoto" title="Continuando con el objetivo de conocer artistas de nuestra provincia, dialogamos con Eduardo Guajardo, reconocido m&uacute;sico santacruce&ntilde;o de 45 a&ntilde;os, quien se define..."><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=http://brotecolectivo.com/entradas/{{ post.urltag }}.jpg&w=150&h=100&zc=1" alt="{{ post.titulo }}" class="foto-entrada"/></a>
</div>
            <div class="excerpt">
            {% autoescape false %}
            {{ post.contenido_corto }}</div>
            {% endautoescape %}
            <a href="javascript:void(0);" class="read-more">leer mas</a>
            
          </article>

        </script>
            
          

  
              
            </section>



      <div id="single" style="position:relative;left:500px;display:none;">
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
         <li class="span3" id="{{ post.urltag }}">
        <a class="thumbnail" style="padding:0;" href="#">
          <img data-src="holder.js/300x200" alt="300x200"  src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/{{ post.urltag }}.jpg&w=300&h=200&zc=1" alt="">
          <div class="caption">
            <h3>{{ post.nombre }}</h3>
            <p>{{ post.bio_corta }}</p>
          </div>
        </a>
      </li>
        </script>
  
    </ul>
<div class="pagination"></div>
            </div>
            <!-- ENDS posts list -->