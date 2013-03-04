define(['libs/bootstrap'], function(bootstrap){

// Código realizado por Adrian Barabino
// El sentido de este código es el siguiente
// Primero verificamos como está la pantalla, osea el tamaño.
// y de ahí en más hacemos que los thumbnails de las imágenes se ajusten al tamaño actual
// de la pantalla. Esto sirve entonces para que en una tablet las imágenes, como los thumbs van 
// a ser de todo el ancho de la pantalla, la imagen tenga un ancho de 700px, entonces, no se va
// a ver estirada, ya que esto lo recorta con phpThumb.
// :D
// 14.02.2013 a las 19:00 HS


$(document).ready(function(){
    		var ancho = $(window).width();
			
    	$(".thumbnail img").each(function(index) {
    		var value = $(this).attr("src") 
    		if (ancho < 767) {
    			value = value.replace("w=300&h=200", "w=700&h=100"); 
    		}
    		if (ancho < 400){
			if (value.indexOf("h=200") == -1) {
			value = value.replace("w=700&h=100", "w=300&h=100"); 

			}else{
			value = value.replace("w=700&h=200", "w=300&h=100"); 

			}    		}else{
    			// Está todo bien, no hace falta hacer nada ahora.
    		}
    		$(this).attr("src", value);
    	});
    });

    $(window).resize(function() {
	var width = $(window).width();
	if (width < 767) {
		
	
    	$(".thumbnail img").each(function(index) {

			var value = $(this).attr("src") 
			if (value.indexOf("h=200") == -1) {
			value = value.replace("w=300&h=100", "w=700&h=100"); 

			}else{
			value = value.replace("w=300&h=200", "w=700&h=100"); 

			}

			$(this).attr("src", value);

		});

	}
		if (width < 400) {
		// Do Something
	
    	$(".thumbnail img").each(function(index) {

			var value = $(this).attr("src") 
			if (value.indexOf("h=200") == -1) {
			value = value.replace("w=700&h=100", "w=300&h=100"); 

			}else{
			value = value.replace("w=700&h=200", "w=300&h=100"); 

			}

			// can then use it as
			$(this).attr("src", value);

		});

	}
		if (width > 767) {
		// Do Something
	
    	$(".thumbnail img").each(function(index) {

			var value = $(this).attr("src") // value = 9.61 use $("#text").text() if you are not on select box...
			value = value.replace("w=700&h=100", "w=300&h=200"); // value = 9:61
			// can then use it as
			$(this).attr("src", value);

		});

	}
		console.log("Ajuste de Thumbs LISTO! ");

	});

});