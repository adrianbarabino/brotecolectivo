
        <footer>
            <div class="wrapper">
            
                <ul id="footer-cols">
                    
                    <li class="first-col">
                        
                        <div class="widget-block">
                            <h4>Ultimas Noticias</h4>

                            <?php

$ultimas_noticias = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/noticias/?order2=desc&limit=5&importantes=si"));
foreach ($ultimas_noticias as $noticia){
    
$noticiafecha = date("F d, Y", $noticia->fecha);    
$noticiatitulo = $noticia->titulo;
$noticiaurltag = $noticia->urltag;
?>
      
       <div class="recent-post">
            

            
           <a class="nav-interno thumb" rel="address:/noticia/<?php echo $noticiaurltag; ?>" href="http://brotecolectivo.com/noticia/<?php echo $noticiaurltag; ?>/"><img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/entradas/<?php echo $noticiaurltag; ?>.jpg&w=54&h=54&zc=1" width="54" height="54" alt="Post" /></a>

<div class="post-head">
                                    <a class="nav-interno" rel="address:/noticia/<?php echo $noticiaurltag; ?>" href="http://brotecolectivo.com/noticia/<?php echo $noticiaurltag; ?>/"><?php echo $noticiatitulo; ?></a><span><?php echo $noticiafecha; ?></span>
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
                             <fb:like-box href="http://www.facebook.com/BroteColectivo" width="292" height="400" stream="false" show_faces="true" header="false" class=" fb_iframe_widget" fb-xfbml-state="rendered"><span style="vertical-align: bottom; width: 292px; height: 400px;"><iframe name="f2c68b5868" width="292px" height="400px" frameborder="0" allowtransparency="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="http://www.facebook.com/plugins/like_box.php?href=http%3A%2F%2Fwww.facebook.com%2FBroteColectivo&amp;show_faces=true&amp;header=false&amp;stream=false&amp;width=292&amp;height=400&amp;app_id=388734317865660&amp;locale=es_LA&amp;sdk=joey&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df20d8de518%26origin%3Dhttp%253A%252F%252Fwww.brotecolectivo.com%252Ff328d1564%26domain%3Dwww.brotecolectivo.com%26relation%3Dparent.parent" style="border: none; visibility: visible; width: 292px; height: 400px;" class=""></iframe></span></fb:like-box>
                      </div>
                        </div>
                        
                    </li>   
                </ul>        
                <div id="copy">
                    <span class="textocopy">
                        
                    Sitio desarrollado por <a href="http://www.adrianbarabino.com.ar" target="_blank">Adrian Gustavo Barabino</a> - Template <b>Modus</b> por <a href="http://luiszuno.com" target="_blank">LUISZUNO</a> 
                    </span>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_AR">
                    </a>
                    <br>
                    <span class="creative">
                    <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Brote Colectivo</span> se encuentra bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_AR">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported</a>
                        
                    </span>

                    <br>
                    <span class="github">
                        <a href="https://www.github.com/adrianbarabino/brotecolectivo/">
                        El código fuente de Brote Colectivo está disponible desde Github.com </a>

                       
                    </span>
           </div>       
           <div id="copylogos">
               
                    <a href="https://www.github.com/adrianbarabino/brotecolectivo/" target="_blank" title="BroteColectivo está en Github!">
                            <figure>
                                <img src="https://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Logo.png" alt="">
                            </figure>  
                     </a>    
                      <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es_AR" title="Brote colectivo está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported">    
                    <figure style="width:14%">
                        <img alt="Licencia Creative Commons" style="border-width:0" src="http://mirrors.creativecommons.org/presskit/logos/cc.logo.large.png">
                    </figure>    
                    </a>     
<!--                       <a href="http://www.openstreetmap.org">    
                    <figure>
                        <img alt="OSM" title="Usamos OpenStreetMap" src="http://wiki.openstreetmap.org/w/images/4/45/Openstreetmap_logo_354_354.png">
                    </figure>    
                    </a>     -->        
           </div>
                <div class="clearfix"></div>
                
                
            </div>
            
            <div id="to-top"></div>
        </footer>
         <!-- /container -->
   
    <!-- Acá va todo el JS -->
    


<div id="reproductor" style="display:none;"></div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://cdn.jquerytools.org/1.2.7/full/jquery.tools.min.js"></script>
    <script src="/js/libs/tabs.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.10.0/jquery.validate.min.js"></script>
    <!-- <script src="/js/libs/date.js"></script> -->
    <script  src="/js/libs/hoverIntent.js"></script>
    <script  src="/js/libs/superfish.js"></script>
    <script  src="/js/libs/supersubs.js"></script>
 <script type="text/javascript" src="/js/storyjs-embed.js"></script>
        <script>
  function crear_bandas_historicas (info) {
    createStoryJS({
            type:       'timeline',
            width:      '480',
            height:     '800',
            source:     'https://docs.google.com/spreadsheet/ccc?key=0AvUjGlz70VGCdHoxRmR4VVdGWjZwUHZudjRXa0xJcGc&usp=sharing&output=html',
            embed_id:   'my-timeline'
        });
  }
        </script>
    <script  src="/js/libs/bjqs.js"></script>
    <script>
      function goTop (event) {
      $("html, body").animate({ scrollTop: 180 }, "slow");
  }
    function crear_slide() {
        $('#slide-home').bjqs({
            animtype      : 'slide',
            height        : 220,
            width         : 500
          });  
        }
    $(document).on("ready", function () {
        setTimeout(crear_slide, 1000);
        setTimeout(crear_bandas_historicas, 1000);

    });
    </script>
    <script>
    (function(){

    var matcher = /\s*(?:((?:(?:\\\.|[^.,])+\.?)+)\s*([!~><=]=|[><])\s*("|')?((?:\\\3|.)*?)\3|(.+?))\s*(?:,|$)/g;

    function resolve(element, data) {

        data = data.match(/(?:\\\.|[^.])+(?=\.|$)/g);

        var cur = jQuery.data(element)[data.shift()];

        while (cur && data[0]) {
            cur = cur[data.shift()];
        }

        return cur || undefined;

    }

    jQuery.expr[':'].data = function(el, i, match) {

        matcher.lastIndex = 0;

        var expr = match[3],
            m,
            check, val,
            allMatch = null,
            foundMatch = false;

        while (m = matcher.exec(expr)) {

            check = m[4];
            val = resolve(el, m[1] || m[5]);

            switch (m[2]) {
                case '==': foundMatch = val == check; break;
                case '!=': foundMatch = val != check; break;
                case '<=': foundMatch = val <= check; break;
                case '>=': foundMatch = val >= check; break;
                case '~=': foundMatch = RegExp(check).test(val); break;
                case '>': foundMatch = val > check; break;
                case '<': foundMatch = val < check; break;
                default: if (m[5]) foundMatch = !!val;
            }

            allMatch = allMatch === null ? foundMatch : allMatch && foundMatch;

        }

        return allMatch;

    };

}());
</script>
    
    
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
    <script src="/js/libs/spin.min.js"></script>    
    <script>
        var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#222', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
                    var target = document.getElementById('cargando_pagina');
                var spinner = new Spinner(opts).spin(target);
                    var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fff', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
                </script>
    <script src="http://openlayers.org/api/OpenLayers.js"></script>
    <script src="/js/libs/bootstrap.js"></script>
    <script src="/js/libs/countdown.js"></script>
    <script src="/js/libs/lightbox-2.6.min.js"></script>
    <script src="/js/libs/moment.min.js"></script>
    <script src="/js/libs/prefixfree.min.js"></script>
    <script src="/js/libs/modernizr.js"></script>
    <script src="/js/libs/jplayer.js"></script>
    <script src="/js/libs/reproductor-ttw.js"></script>
    <script src="/js/libs/underscore.min.js"></script>    
    <script src="/js/libs/backbone.min.js"></script>    
    <script src="/js/libs/jquery.youtubeplaylist.js"></script>    
    <script src="/js/init.js"></script>    
   <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36574161-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
    <script src="/js/backbone/models/article.js"></script>    
    <script src="/js/backbone/models/artista.js"></script>    
    <script src="/js/backbone/models/fecha.js"></script>    
    <script src="/js/backbone/collections/articles.js"></script>    
    <script src="/js/backbone/collections/artistas.js"></script>    
    <script src="/js/backbone/collections/fechas.js"></script>    
    <script src="/js/backbone/views/article.js"></script>    
    <script src="/js/backbone/views/artista.js"></script>    
    <script src="/js/backbone/views/fecha.js"></script>    
    <script src="/js/backbone/routers/base.js"></script>    
    <script src="/js/brotecolectivo.js"></script>    
 
    <script>


var request;
var myPlaylist = [];
request = $.getJSON("http://api.brotecolectivo.com/canciones/?order2=asc&order=bandas.nombre", function (data) {
            $.each(data, function (i, val) {
                
                var elemento = {
                    title: val.titulo,
                    artist: "<a href='javascript:void(0);' rel='address:/artistas/"+val.banda_urltag+"'>"+val.banda+"</a>",
                    cover: "http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/"+val.banda_urltag+".jpg&w=125&h=125&zc=1",
                    oga: val.permalink,
                    mp3: val.permalink.substring(0, val.permalink.length-3)+"mp3",
                    genero: val.genero,
                    duration: val.duracion,
                    urltag: val.urltag
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
<!-- AddThis Smart Layers BEGIN -->
<!-- Go to http://www.addthis.com/get/smart-layers to customize -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4d67bc4344360d81"></script>
<script type="text/javascript">
  addthis.layers({
    'theme' : 'dark',
    'share' : {
      'position' : 'left',
      'numPreferredServices' : 5
    }   
  });
</script>
<!-- AddThis Smart Layers END -->
    <script src="/js/libs/ajuste-thumbs.js"></script>
<script>


</script>
  </body>
</html>