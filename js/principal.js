require(["aplicacion", "jquery", "jquery.alpha", "jquery.beta"], function(App) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
        App.iniciar();
	$(function() {
        $('body').alpha().beta();
    });
});


// require([
// 
// 	'aplicacion',
// 	'jquery.alpha',
// 	'jquery.beta', 
// 	'redimensionar-thumbs'
// 	], function(App){
// 		App.iniciar();
// 		console.log("Estoy por cargar el jPlayer !");
// 		console.log("Listo el pollo :D ");
// 
// 
// 	jQuery(document).ready(function() {
// 		console.log("Ya está creo que todo cargado ! Te aviso, no te preocupés.");
// 
// 	});
// });