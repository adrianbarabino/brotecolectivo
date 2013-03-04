define(['core/sandbox'], function(sandbox){
	var artistas_json;
	var pagina_actual;
	var paginacion_actual;
	pagina_actual = "";
	paginacion_actual = "";
	artistas_json = [];
	function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    };
    if (typeof step=='undefined'){
        step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    };
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    };
    return result;
};

	return {
		iniciar : function(){
			that = this;
			$("div.navbar-inner ul li a").on("click", this.cargarPagina);
			$("div.pagination ul li a").live("click", this.cargarPaginacion);

		},
		cargarPaginacion : function(value){
			console.log(value);
			var pagina_boton_paginacion = value.target.className; // El id del elemento al que le hice clic ahora es la pagina
			pagina_boton_paginacion = pagina_boton_paginacion.substring(7,pagina_boton_paginacion.Length); // corto el "pagina-" ya que no me sirve

			console.log("Aca llegué, que onda entonces?");
			console.log("La pagina actual es: "+ pagina_boton_paginacion);
			$.each(artistas_json.slice(4*pagina_boton_paginacion-4,4*pagina_boton_paginacion+1), function(index, element) {
				    		var numero = index+1;
				    		$("#artista"+numero+" img").attr("src", "/img/cargando.gif");
				    		$("#artista"+numero+" h3").html(element.nombre)
				    		var regex = /(<([^>]+)>)/ig;
				    		var biografia = element.bio.replace(regex, "");
				    		$("#artista"+numero+" p").html(biografia.substring(0,185)+"...");
				    		$("#artista"+numero+" img").attr("src", "http://brotecolectivo.com/thumb/phpThumb.php?src=http://www.brotecolectivo.com/contenido/imagenes/bandas/"+ element.urltag+".jpg&w=300&h=200&zc=1");
				    		console.log(index +" = "+ element.nombre);
				    		});
		},
		cargarPagina : function(value){
			var pagina = value.target.id; // El id del elemento al que le hice clic ahora es la pagina
			pagina = pagina.substring(4,pagina.Length); // corto el "nav_" ya que no me sirve
			if(pagina == "artistas"){

				console.log("el if funciona!");
				$(".hero-unit").animate({"left": -5000}, 1000);
				$(".hero-unit").hide();
				$("#cabecera").animate({"height": 100}, 1000);
				$(".page-header").show();
				$(".page-header").animate({"left": 0}, 1000);
				$("#inicio").animate({"left": -5000}, 1000);
				$("#inicio").hide();
				$(".pagination").show();
				$("#artistas").show();
				$("#artistas").animate({"left": 0}, 1000);
				$("#contenido").animate({"height": 450}, 1000);
				var directorio = "/artistas/";
				history.pushState({}, "", directorio);
				pagina_actual = "Artistas";
				paginacion_actual = "1";

				$.ajax({
					type: "POST",
				    url:"http://nuevo.brotecolectivo.com/json.php",
				    data: {tabla: 'bandas', limit: '0,999', order: 'id', order2: 'desc'},
				    dataType:"json",
				    async:false,
				    success: function (data) {
				    	artistas_json = data;

											    		cantidad_de_pag = artistas_json.length/4;
							cantidad_paginas = range(cantidad_de_pag.toFixed(0));
							var listaHTML;
							listaHTML = " ";
							$.each(cantidad_paginas, function(a){
								a = a+1;
                            	listaHTML += "<li><a href='javascript:void(0)' class='pagina-"+ a +"'>" + a + "</a></li>";
                       		});
                       		if ($(".pagination ul li").length > 0){}else{
                       		$(".pagination").append("<ul><li  class='disabled'><a href='javascript:void(0)'>Prev</a></li>"+ listaHTML +"<li><a href='javascript:void(0)' class='pagina-"+ cantidad_de_pag.toFixed(0) +"'>Next</a></li></ul>");
						 	}
						 	$.each(data.slice(0,4), function(index, element) {
				    		var numero = index+1;
				    		var artista_link = $("div.navbar-inner ul li a#nav_artistas").parent();
				    		$(artista_link).addClass("active");
				    		$("#artista"+numero+" img").attr("src", "http://brotecolectivo.com/thumb/phpThumb.php?src=http://www.brotecolectivo.com/contenido/imagenes/bandas/"+ element.urltag+".jpg&w=300&h=200&zc=1");
				    		$("#artista"+numero+" h3").html(element.nombre)
				    		var regex = /(<([^>]+)>)/ig;
				    		var biografia = element.bio.replace(regex, "");
				    		$("#artista"+numero+" p").html(biografia.substring(0,185)+"...");
				    		console.log(index +" = "+ element.nombre);
				    		});

				    }
				});



					  
					
				

			}
			console.log(pagina); // lo imprimo en la consola para testear :D 
		}
	}
});


