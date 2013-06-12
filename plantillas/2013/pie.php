


        <footer>
            <div class="wrapper">
            
                <ul id="footer-cols">
                    
                    <li class="first-col">
                        
                        <div class="widget-block">
                            <h4>Recent posts</h4>
                            <div class="recent-post">
                                <a href="#" class="thumb"><img src="img/dummies/54x54.gif" alt="Post" /></a>
                                <div class="post-head">
                                    <a href="#">Pellentesque habitant morbi senectus</a><span>March 12, 2011</span>
                                </div>
                            </div>
                            <div class="recent-post">
                                <a href="#" class="thumb"><img src="img/dummies/54x54.gif" alt="Post" /></a>
                                <div class="post-head">
                                    <a href="#">Pellentesque habitant morbi senectus</a><span>March 12, 2011</span>
                                </div>
                            </div>
                            <div class="recent-post">
                                <a href="#" class="thumb"><img src="img/dummies/54x54.gif" alt="Post" /></a>
                                <div class="post-head">
                                    <a href="#">Pellentesque habitant morbi senectus</a><span>March 12, 2011</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="second-col">
                        
                        <div class="widget-block">
                            <h4>Dummy text</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies ege. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                        </div>
                        
                    </li>
                    
                    <li class="third-col">
                        
                        <div class="widget-block">
                            <div id="tweets" class="footer-col tweet">
                                <h4>Twitter widget</h4>
                            </div>
                        </div>
                        
                    </li>   
                </ul>               
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
    <script src="/js/libs/preefixfree.min.js"></script>
    <script src="/js/libs/modernizr.js"></script>
    <script src="/js/libs/jplayer.js"></script>
    <script src="/js/libs/reproductor-ttw.js"></script>
    <script src="/js/libs/swig.js"></script>    
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