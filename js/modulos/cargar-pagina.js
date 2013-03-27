define(['core/sandbox',
		'http://www.labofoto.com.ar/plantillas/labo2013/js/direcciones.js'
		], function(sandbox){
	var artistas_json;
	var pagina_actual;
	var paginacion_actual;
	var cantidad_de_pag;
	cantidad_de_pag = "";
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
			$.address.state('/').init(function() {
				$("nav ul#nav li a").address()
			}).change(this.cargarPagina);
			$("div.pagination ul li a").live("click", this.cargarPaginacion);

		},
		cargarPaginacion : function(value){
			console.log(value);
			var pagina_boton_paginacion = value.target.className; // El id del elemento al que le hice clic ahora es la pagina
			pagina_boton_paginacion = parseInt(pagina_boton_paginacion.substring(7,pagina_boton_paginacion.Length),10); // corto el "pagina-" ya que no me sirve

			console.log("Aca llegué, que onda entonces?");
			console.log("La pagina actual es: "+ pagina_boton_paginacion);
			$(".pagination ul li.numero.active").removeClass("active");
			var pagina_activa_paginacion = $(".pagination ul li.numero a.pagina-"+pagina_boton_paginacion).parent();
			$(pagina_activa_paginacion).addClass("active");
			if(pagina_boton_paginacion > 1){
			$(".pagination ul li:contains('«')").removeClass("disabled");

			}else{
			$(".pagination ul li:contains('«')").addClass("disabled");
			}
			if(pagina_boton_paginacion < cantidad_de_pag){
			$(".pagination ul li:contains('»')").removeClass("disabled");

			}else{
			$(".pagination ul li:contains('»')").addClass("disabled");

			}
			$("#artistas").animate({"left": -5000}, 300, function(){$("#artistas").hide()});
			$("#artistas").animate({"left": 5000}, 10, function(){$("#artistas").fadeIn(600)});
			$("#artistas").animate({"left": 0}, 100);
            

			var pagina_previa = pagina_boton_paginacion -1;
			var pagina_siguiente = pagina_boton_paginacion +1;			
			$(".pagination ul li a:contains('«')").removeClass(function() {
			  return $(this).attr('class');
			});
			$(".pagination ul li a:contains('«')").addClass("pagina-"+pagina_previa);
			$(".pagination ul li a:contains('»')").removeClass(function() {
			  return $(this).attr('class');
			});
			$(".pagination ul li a:contains('»')").addClass("pagina-"+pagina_siguiente);
			$.each(artistas_json.slice(4*pagina_boton_paginacion-4,4*pagina_boton_paginacion+1), function(index, element) {
				    		var numero = index+1;
				    		$("#artista"+numero+" img").attr("src", "/img/cargando.gif");
				    		$("#artista"+numero+" h3").delay(1500).html(element.nombre)
				    		var regex = /(<([^>]+)>)/ig;
				    		var biografia = element.bio.replace(regex, "");

				    		$("#artista"+numero+" p").delay(1500).html(biografia.substring(0,185)+"...");
				    		$("#artista"+numero+" img").attr("src", "http://brotecolectivo.com/thumb/phpThumb.php?src=http://www.brotecolectivo.com/contenido/imagenes/bandas/"+ element.urltag+".jpg&w=300&h=200&zc=1");
				    		console.log(index +" = "+ element.nombre);
				    		});
		},
		cargarPagina : function(value){
			var pagina_actual = $(".activo a").html();
			console.log(event);
			var raiz = event.path.substring(1);
			var raiz_sin_final = raiz.split('/');
			if(event.path.substring(1)){
				var destino_total = "nav-" + raiz_sin_final[0];
			}else{
				var destino_total = "nav-inicio";
			}
			idestado++;
			console.log(destino_total);
			var destino_final = "#" + destino_total.substring(4);
			if(pagina_actual == destino_total.substring(4)){
				console.log("nada para hacer")
			}else{

			pagina = destino_total.substring(4,pagina.Length); // corto el "nav_" ya que no me sirve
			if(pagina == "artistas"){

				console.log("el if funciona!");
				var texto_head = "Artistas";
				var texto_subhead = "de Santa Cruz en Brote Colectivo!";

				$("#masthead .head").html(texto_head);
				$("#masthead .subhead").html(texto_subhead);
				$("#inicio").css({"left": -5000});
				$("#inicio").delay(1000).hide();
				$("#posts-list").css({"width":"100%"});
				$(".pagination").delay(1000).show();
				$("#artistas").delay(1000).show();
				$("#artistas").css({"left": 0});
				$("#contenido").css({"height": 450});
				$("aside#sidebar").css({"width": 0, "display":"none"});

				// var directorio = "/artistas/";
				// history.pushState({}, "", directorio);
				
				pagina_actual = "Artistas";
				paginacion_actual = "1";
				console.time('ajax-artistas');
				$.ajax({
					type: "POST",
				    url:"/json.php",
				    data: {tabla: 'bandas', limit: '0,999', order: 'id', order2: 'desc'},
				    dataType:"json",
				    async:true,
				    success: function (data) {
				    	console.time('ajax-guardar');
				    	artistas_json = data;
				    	

							cantidad_de_pag = artistas_json.length/4;
							cantidad_paginas = range(cantidad_de_pag.toFixed(0));
							console.timeEnd('ajax-guardar');
							var listaHTML;
							listaHTML = " ";
							console.time('each-paginas');
							$.each(cantidad_paginas, function(a){
								a = a+1;
                            	listaHTML += "<li class='numero'><a href='javascript:void(0)' class='pagina-"+ a +"'>" + a + "</a></li>";
                       		});
                       		console.timeEnd('each-paginas');
                       		if ($(".pagination ul li").length > 0){}else{
                       		$(".pagination").append("<ul><li class='disabled'><a href='javascript:void(0)'>«</a></li>"+ listaHTML +"<li><a href='javascript:void(0)' class='pagina-2'>»</a></li></ul>");
						 	}
						 	var pagina_activa_paginacion = $(".pagination ul li a.pagina-1").parent();
							$(pagina_activa_paginacion).addClass("active");
							console.time('each-elementos');
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
                       		console.timeEnd('each-elementos');

				    }
				});
                console.timeEnd('ajax-artistas');




					  
					
				

			}
			console.log(pagina); // lo imprimo en la consola para testear :D 
		}
	}
	}
});


