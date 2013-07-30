


        <footer>
            <div class="wrapper">
            
                <ul id="footer-cols">
                    
                    <li class="first-col">
                        
                        <div class="widget-block">
                            <h4>Ultimas Noticias</h4>

                            <?php

$ultimas_noticias = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/noticias/?order2=desc&limit=5"));
foreach ($ultimas_noticias as $noticia){
    
$noticiafecha = date("F d, Y", $noticia->fecha);    
$noticiatitulo = $noticia->titulo;
$noticiaurltag = $noticia->urltag;
?>
      
       <div class="recent-post">
            

            
           <a href="http://brotecolectivo.com/noticia/<?php echo $noticiaurltag; ?>/" class="thumb"><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $noticiaurltag; ?>.jpg&w=54&h=54&zc=1" width="54" height="54" alt="Post" /></a>

<div class="post-head">
                                    <a href="#"><?php echo $noticiatitulo; ?></a><span><?php echo $noticiafecha; ?></span>
                                </div>
                            </div>
                            
          
        

<?php
};
?>
                    </li>
                    
                    <li class="second-col">
                        
                        <div class="widget-block">
                            <h4>¿Qué es Brote Colectivo?</h4>
                            <p>Somos un sitio de difusión cultural provincial, nos encargamos de darle un espacio a los grupos artísticos de <b>Santa Cruz</b>, donde podrán exponer lo que hacen, ya sea en formato de audio/video o difundiendo fechas próximas. </p>
                            <p>Este espacio se dará sin distinción política ni económica, todo grupo o artista será tratado por igual, por lo cual, este espacio será cedido gratis, aunque solo a bandas de la zona.</p>
                            <p>Esperamos el crecimiento de este sitio, tanto como el crecimiento de la cultura local, a pesar de haber artistas o grupos con mayor antiguedad, todos debemos crecer un poco más, formando así este brote colectivo </p>
                        </div>
                        
                    </li>
                    
                    <li class="third-col">
                        
                        <div class="widget-block">
                            <div class="footer-col">
                                <h4>Facebook</h4>
<!--                             <fb:like-box href="http://www.facebook.com/BroteColectivo" width="292" height="400" stream="false" show_faces="true" header="false" class=" fb_iframe_widget" fb-xfbml-state="rendered"><span style="vertical-align: bottom; width: 292px; height: 400px;"><iframe name="f2c68b5868" width="292px" height="400px" frameborder="0" allowtransparency="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="http://www.facebook.com/plugins/like_box.php?href=http%3A%2F%2Fwww.facebook.com%2FBroteColectivo&amp;show_faces=true&amp;header=false&amp;stream=false&amp;width=292&amp;height=400&amp;app_id=388734317865660&amp;locale=es_LA&amp;sdk=joey&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df20d8de518%26origin%3Dhttp%253A%252F%252Fwww.brotecolectivo.com%252Ff328d1564%26domain%3Dwww.brotecolectivo.com%26relation%3Dparent.parent" style="border: none; visibility: visible; width: 292px; height: 400px;" class=""></iframe></span></fb:like-box>
 -->                        </div>
                        </div>
                        
                    </li>   
                </ul>        
                <div id="copy">
                    Sitio desarrollado por <a href="http://www.adrianbarabino.com.ar" target="_blank">Adrian Gustavo Barabino</a> - Template <b>Modus</b> por <a href="http://luiszuno.com" target="_blank">LUISZUNO</a>                 - La página fue creada en 0,00277304649353 segundos                
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_AR"><img alt="Licencia Creative Commons" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"></a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Brote Colectivo</span> se encuentra bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_AR">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported</a>.
<!--                 <fb:facepile href="http://www.facebook.com/brotecolectivo" max_rows="1" width="300" class=" fb_iframe_widget" fb-xfbml-state="rendered"><span style="vertical-align: bottom; width: 300px; height: 70px;"><iframe name="f5d9be084" width="300px" height="1000px" frameborder="0" allowtransparency="true" scrolling="no" title="fb:facepile Facebook Social Plugin" src="http://www.facebook.com/plugins/facepile.php?href=http%3A%2F%2Fwww.facebook.com%2Fbrotecolectivo&amp;max_rows=1&amp;width=300&amp;app_id=388734317865660&amp;locale=es_LA&amp;sdk=joey&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df3e42564b4%26origin%3Dhttp%253A%252F%252Fwww.brotecolectivo.com%252Ff328d1564%26domain%3Dwww.brotecolectivo.com%26relation%3Dparent.parent" style="border: none; visibility: visible; width: 300px; height: 70px;" class=""></iframe></span></fb:facepile>
 -->            </div>       
                <div class="clearfix"></div>
                
                
            </div>
            
            <div id="to-top"></div>
        </footer>
         <!-- /container -->
   
    <!-- Acá va todo el JS -->
    


<div id="reproductor" style="display:none;"></div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script src="http://cdn.jquerytools.org/1.2.7/tiny/jquery.tools.min.js"></script>
    <script src="/js/libs/tabs.js"></script>
    <script src="/js/libs/date.js"></script>
    <script  src="/js/libs/hoverIntent.js"></script>
    <script  src="/js/libs/superfish.js"></script>
    <script  src="/js/libs/supersubs.js"></script>

    <!--[if IE 6]>
    <link rel="stylesheet" href="css/ie6-hacks.css" media="screen" />
    <script type="text/javascript" src="/js/DD_belatedPNG.js"></script>
      <script>
              /* EXAMPLE */
              DD_belatedPNG.fix('*');
          </script>
    <![endif]-->




<script type="text/javascript">

function YaCargoLetras(){

   $("a.overlay").overlay({
 
        mask: 'black',
 
        onBeforeLoad: function() {
 
            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");
 
            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href"));
        }
 
    });
};


</script>

<!-- overlayed element -->

<div class="apple_overlay" id="overlay">
  <!-- the external content is loaded inside this tag -->
  <div class="contentWrap"></div>
</div>
    <!-- empiezan los otros JS -->

    <script src="http://openlayers.org/dev/OpenLayers.js"></script>
    <script src="/js/libs/bootstrap.js"></script>
    <script src="/js/libs/prefixfree.min.js"></script>
    <script src="/js/libs/modernizr.js"></script>
    <script src="/js/libs/jplayer.js"></script>
    <script src="/js/libs/reproductor-ttw.js"></script>
    <script src="/js/libs/underscore.min.js"></script>    
    <script src="/js/libs/backbone.min.js"></script>    
    <script src="/js/libs/jquery.youtubeplaylist.js"></script>    
    <script src="/js/init.js"></script>    
    <script src="/js/backbone/models/article.js"></script>    
    <script src="/js/backbone/models/artista.js"></script>    
    <script src="/js/backbone/collections/articles.js"></script>    
    <script src="/js/backbone/collections/artistas.js"></script>    
    <script src="/js/backbone/views/article.js"></script>    
    <script src="/js/backbone/views/artista.js"></script>    
    <script src="/js/backbone/routers/base.js"></script>    
    <script src="/js/brotecolectivo.js"></script>    
    <script>
var request;
var myPlaylist = [];
request = $.getJSON("http://api.brotecolectivo.com/canciones/", function (data) {
            $.each(data, function (i, val) {
                console.log(data);
                var elemento = {
                    title: val.titulo,
                    artist: "<a href='http://www.brotecolectivo.com/artistas/"+val.banda_urltag+"/'>"+val.banda+"</a>",
                    cover: "http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/"+val.banda_urltag+".jpg&w=125&h=125&zc=1",
                    oga: val.permalink,
                    genero: val.genero,
                    duration: val.duracion
                }
                if(val.idletra){
                    elemento.letra = "<a href='http://www.brotecolectivo.com/letras/"+val.urltag+"/' onclick='javascript:MirarLetra();' class='overlay', letra='', rel='#overlay'>Letra</a>";
                }else{
                    elemento.letra = "";
                }
                myPlaylist.push(elemento);


            });



$('#reproductor').ttwMusicPlayer(myPlaylist, {

                autoPlay:false, 
                ratingCallback:function(index, playlistItem, rating){
                //some logic to process the rating, perhaps through an ajax call
                alert("El Index es "+index);
                alert("El playlist item es "+ playlistItem);
                alert("Y el rating es..... "+ rating);
                 },



                jPlayer:{

                    swfPath:'/js/jplayer' //You need to override the default swf path any time the directory structure changes

                }

            });


  $('.boton-playlist').click(function() {
    $(".tracklist").slideToggle();
  });
  $('.reproductor-tooltip').tooltip({
    container: 'body'
  });
  $(function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();
 
  // Fix input element click problem
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});
    $('#reproductor').show();
    YaCargoLetras();
    console.log("Reproductor LISTO!");

        });
</script>

    <script src="/js/libs/ajuste-thumbs.js"></script>
<script>

$("nav ul#nav li a").attr("href", "javascript:void(0)")

</script>
  </body>
</html>