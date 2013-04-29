	var artistas_json;
	var actual;
	var anterior;
	var init = true, 
    	state = window.history.pushState !== undefined;
    var pagina;
	var pagina_actual;
	var paginacion_actual;
	var cantidad_de_pag;
	paginacion_actual = "";
	pagina = "";
	pagina_actual = "";
	cantidad_de_pag = "";
	paginacion_actual = "";
	artistas_json = [];
	function capitaliseFirstLetter(string)
	{
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
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

$(document).on("ready", iniciar);

function iniciar(){
	that = this;
	var idestado;
	idestado = 100;
	$.address.state('/').init(function() {
	if ($.browser.mozilla){
		$.address.value(window.location.pathname);
	};
	$("nav ul li a").address();
	}).change(function (event){
		console.log(event);
		var raiz = event.path.substring(1);
		var raiz_sin_final = raiz.split('/');
		if(event.path.substring(1)){
			var destino_total = "nav-" + raiz_sin_final[0];
			pagina = raiz_sin_final[0];
		}else{
			var destino_total = "nav-inicio";
			pagina = "inicio";
		}

		idestado++;
		$("nav ul#nav li.current-menu-item").removeClass("current-menu-item");
		$("nav ul#nav li a#nav_"+pagina).parent().addClass("current-menu-item");
		console.log(pagina); // lo imprimo en la consola para testear :D 
		console.log(destino_total);
		var destino_final = "#" + destino_total.substring(4);
		console.log("La pagina a ir es: " + pagina);
		console.log("Venimos de la pagina: "+pagina_actual)

		anterior = pagina_actual;
		if(pagina == pagina_actual){
			console.log("nada para hacer");
		}else{

		if(pagina == "inicio"){
			console.log("estoy en inicio!");
			var texto_head = "Bienvenido a Brote Colectivo";
			var texto_subhead = "sitio de difusión cultural en Santa Cruz";
			$("#masthead .head").html(texto_head);
			$("#masthead .subhead").html(texto_subhead);
			$("#inicio").animate({"left": 0});
			$("#inicio").show();
			$("#posts-list").animate({"width":"528px"});
			$(".pagination").hide();
			$("#artistas").hide();
			$("#artistas").animate({"left": "-5000px"}, 200);
			$("#contenido").animate({"height": 450}, 1000);
			$("aside#sidebar").show();
			$("aside#sidebar").animate({"width": "252px"}, 500);

		}
		if(pagina == "agenda-cultural"){

			console.log("el if funciona!");
			var texto_head = "Agenda Cultural";
			var texto_subhead = "de Santa Cruz en Brote Colectivo!";

				$(".pagination").html("");
				$("#artistas .caption h3").html("");
				$("#artistas .caption p").html("");
				$("#artistas .thumbnail img").attr("src", "/img/cargando.gif");
				$("#artistas .thumbnail img").attr("src", "/img/cargando.gif");



				$("#inicio").animate({"left": -5000}, 200);
				$("#inicio").hide();
				$("#posts-list").animate({"width":"100%"}, 200);
				$(".pagination").show();
				$("#artistas").show();
				$("#artistas").css({"left": 0});
				$("#contenido").animate({"height": 450}, 1000);
				$("aside#sidebar").animate({"width": 0}, 500);
				$("aside#sidebar").hide();				


			$("#masthead .head").html(texto_head);
			$("#masthead .subhead").html(texto_subhead);

			// var directorio = "/artistas/";
			// history.pushState({}, "", directorio);
			
			pagina_actual = "Agenda-Cultural";
			paginacion_actual = "1";
			$.ajax({
				type: "POST",
			    url:"/json.php",
			    data: {tabla: 'fechas', limit: '0,999', order: 'id', order2: 'desc'},
			    dataType:"json",
			    async:true,
			    success: function (data) {
			    	console.time('ajax-guardar');
			    	artistas_json = data;
			    	

						cantidad_de_pag = cantidad_de_pag = Math.round(artistas_json.length/4+0.5);
						cantidad_paginas = range(cantidad_de_pag.toFixed(0));
						var listaHTML;
						listaHTML = " ";
						$.each(cantidad_paginas, function(a){
							a = a+1;
                        	listaHTML += "<li class='numero'><a href='javascript:void(0)' class='pagina-"+ a +"'>" + a + "</a></li>";
                   		});
                   		if(anterior == "artistas"){
                   			$(".pagination").html("");
                   		}
                   		if ($(".pagination ul li").length > 0){}else{
                   		$(".pagination").append("<ul><li class='disabled'><a href='javascript:void(0)'>«</a></li>"+ listaHTML +"<li><a href='javascript:void(0)' class='pagina-2'>»</a></li></ul>");
					 	}
					 	var pagina_activa_paginacion = $(".pagination ul li a.pagina-1").parent();
						$(pagina_activa_paginacion).addClass("active");
					 	$.each(data.slice(0,4), function(index, element) {
			    		var numero = index+1;
			    		var artista_link = $("div.navbar-inner ul li a#nav_artistas").parent();
			    		$(artista_link).addClass("active");
			    		$("#artista"+numero+" img").attr("src", "http://brotecolectivo.com/thumb/phpThumb.php?src=http://www.brotecolectivo.com/fechas/"+ element.urltag+".jpg&w=300&h=200&zc=1");
			    		$("#artista"+numero+" h3").html(element.titulo)
			    		var regex = /(<([^>]+)>)/ig;
			    		var biografia = element.contenido.replace(regex, "");
			    		$("#artista"+numero+" p").html(biografia.substring(0,185)+"...");
			    		console.log(index +" = "+ element.titulo);
			    		});

			    }
			});




				  
				
			

		}
		if(pagina == "artistas"){

			console.log("el if funciona!");
			var texto_head = "Artistas";
			var texto_subhead = "de Santa Cruz en Brote Colectivo!";

				$(".pagination").html("");
				$("#artistas .caption h3").html("");
				$("#artistas .caption p").html("");
				$("#artistas .thumbnail img").attr("src", "/img/cargando.gif");

				$("#masthead .head").html(texto_head);
				$("#masthead .subhead").html(texto_subhead);
				$("#inicio").animate({"left": -5000}, 200);
				$("#inicio").hide();
				$("#posts-list").animate({"width":"100%"}, 200);
				$(".pagination").show();
				$("#artistas").show();
				$("#artistas").css({"left": 0});
				$("#contenido").animate({"height": 450}, 1000);
				$("aside#sidebar").animate({"width": 0}, 500);
				$("aside#sidebar").hide();


			// var directorio = "/artistas/";
			// history.pushState({}, "", directorio);
			
			pagina_actual = "Artistas";
			paginacion_actual = "1";
			$.ajax({
				type: "POST",
			    url:"/json.php",
			    data: {tabla: 'bandas', limit: '0,999', order: 'id', order2: 'desc'},
			    dataType:"json",
			    async:true,
			    success: function (data) {
			    	console.time('ajax-guardar');
			    	artistas_json = data;
			    	

						cantidad_de_pag = cantidad_de_pag = Math.round(artistas_json.length/4+0.5);
						cantidad_paginas = range(cantidad_de_pag.toFixed(0));
						var listaHTML;
						listaHTML = " ";
						$.each(cantidad_paginas, function(a){
							a = a+1;
                        	listaHTML += "<li class='numero'><a href='javascript:void(0)' class='pagina-"+ a +"'>" + a + "</a></li>";
                   		});
                   		if(anterior == "agenda-cultural"){
                   			$(".pagination").html("");
                   		}
                   		if ($(".pagination ul li").length > 0){}else{
                   		$(".pagination").append("<ul><li class='disabled'><a href='javascript:void(0)'>«</a></li>"+ listaHTML +"<li><a href='javascript:void(0)' class='pagina-2'>»</a></li></ul>");
					 	}
					 	var pagina_activa_paginacion = $(".pagination ul li a.pagina-1").parent();
						$(pagina_activa_paginacion).addClass("active");
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
		console.log(pagina_actual);
		pagina_actual = pagina;
		actual = pagina_actual;
		console.log(pagina_actual);
		console.log("Ahora Pagina Actual es "+ pagina_actual);
		web_titulo_actual = document.title.split('-');
		web_titulo_ventana = web_titulo_actual[0] + " - " + capitaliseFirstLetter(pagina_actual);
		$.address.title(web_titulo_ventana);

	};
	});
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	    	console.log("Presione la flecha izquierda");
	    	console.log($(".pagination ul li a:contains('«')").text());
	    	$(".pagination ul li a:contains('«')").click();
	       return false;
	    }
	    if (e.keyCode == 39) { 
	    	console.log("Presione la flecha izquierda");
	    	console.log($(".pagination ul li a:contains('»')").text());	    	
	    	$(".pagination ul li a:contains('»')").click();
	       return false;
	    }
	});
	$("div.pagination ul li a").live("click", cargarPaginacion);
}

function cargarPaginacion(value){
	console.log(value);
	$("#artistas .caption h3").html("");
	$("#artistas .caption p").html("");
	$("#artistas .thumbnail img").attr("src", "/img/cargando.gif");
	var valor = value.target.text;

	var pagina_boton_paginacion = value.target.className; // El id del elemento al que le hice clic ahora es la pagina
	pagina_boton_paginacion = parseInt(pagina_boton_paginacion.substring(7,pagina_boton_paginacion.Length),10); // corto el "pagina-" ya que no me sirve
	console.log(cantidad_de_pag);
	
	console.log("Aca llegué, que onda entonces?");
	console.log("La pagina actual es: "+ pagina_boton_paginacion);
	var pagina_actual_paginacion = $(".pagination ul li.active a").text();
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
	console.log("Pagina hacia donde vamos: "+ pagina_boton_paginacion);
	console.log("Cantidad de paginas: " + cantidad_de_pag)
	console.log("Pagina de donde venimos: " + pagina_actual_paginacion);
	if(pagina_actual_paginacion == pagina_boton_paginacion){
		console.log("la pagina es la misma, nada por hacer.")
	}else{
	if(pagina_boton_paginacion <= cantidad_de_pag && pagina_boton_paginacion >= 1){
	$("#artistas").animate({"left": -5000}, 300, function(){$("#artistas").hide()});
	$("#artistas").animate({"left": 5000}, 10, function(){$("#artistas").fadeIn(600)});
	$("#artistas").animate({"left": 0}, 100);
    

	var pagina_previa = pagina_boton_paginacion -1;
	if(pagina_previa == 0){
		pagina_previa = 1;
	}
	var pagina_siguiente = pagina_boton_paginacion +1;		
	if(pagina_siguiente> cantidad_de_pag){
		pagina_siguiente = cantidad_de_pag;
	}	
	$(".pagination ul li a:contains('«')").removeClass(function() {
	  return $(this).attr('class');
	});
	$(".pagination ul li a:contains('«')").addClass("pagina-"+pagina_previa);
	$(".pagination ul li a:contains('»')").removeClass(function() {
	  return $(this).attr('class');
	});
	$(".pagination ul li a:contains('»')").addClass("pagina-"+pagina_siguiente);
	if(actual == "artistas"){
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
	}
	if(actual == "agenda-cultural"){
			$.each(artistas_json.slice(4*pagina_boton_paginacion-4,4*pagina_boton_paginacion+1), function(index, element) {
		    		var numero = index+1;
		    		$("#artista"+numero+" img").attr("src", "/img/cargando.gif");
		    		$("#artista"+numero+" h3").delay(1500).html(element.titulo)
		    		var regex = /(<([^>]+)>)/ig;
		    		var biografia = element.contenido.replace(regex, "");

		    		$("#artista"+numero+" p").delay(1500).html(biografia.substring(0,185)+"...");
		    		$("#artista"+numero+" img").attr("src", "http://brotecolectivo.com/thumb/phpThumb.php?src=http://www.brotecolectivo.com/fechas/"+ element.urltag+".jpg&w=300&h=200&zc=1");
		    		console.log(index +" = "+ element.titulo);
		    		});
	}
}
}
}
