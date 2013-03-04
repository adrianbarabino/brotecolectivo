define(['libs/reproductor-ttw'], function(ttw){
    return{
      iniciar: function(){

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
    console.log("Reproductor LISTO!");
}
}
 });
