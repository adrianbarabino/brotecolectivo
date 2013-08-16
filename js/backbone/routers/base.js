BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"inicio/" :  "root",
		"noticias/" :  "noticias",
		"artistas/" :  "artistas",
		"agenda-cultural/" :  "fechas",
		"noticia/:id/": "articleSingle",
		"noticia/:id": "articleSingle",
		"artistas/:id/": "artistaSingle",
		"artistas/:id": "artistaSingle",
		"agenda-cultural/:id/": "fechaSingle",
		"agenda-cultural/:id": "fechaSingle"
	},
	initialize : function(){
		var self = this;
		$("#cargando_pagina").fadeOut();

	},
	root: function(){
		$(document).attr("title", "Inicio"+titulo_inicial);
		$("#cargar-mas").remove()
		var self = this;
		console.log("Root");
		$('#inicio').fadeOut('slow', function() {
		    $('#inicio').fadeIn('slow');
		});				$(".head").text("Bienvenido a Brote Colectivo");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");

		$("body").removeClass("sin-sidebar");
		$("aside#sidebar").fadeIn();
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('inicio')").addClass('current-menu-item');
		$('#artistas').slideUp('slow');
		$('#noticias').slideUp('slow');
		$('#inicio > div').show();
	},
	noticias: function(){
		$(document).attr("title", "Noticias"+titulo_inicial);
		var self = this;
		console.log("Root");
		if($('#noticias .abierto').length > 0){
		    $('#noticias').show();
		}else{
		$('#noticias').fadeOut('slow', function() {
		    $('#noticias').fadeIn('slow');
		});

		}
		$(".head").text("Noticias Culturales");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");
		$("[class*=mas]").slideUp();
		$("#cargar-mas").remove()
		$("#noticias").append('<a href="javascript:void(0)" id="cargar-mas" data-cantidad="5" class="btn btn-info btn-large btn-block" >Cargar mas</a>');
		$("#cargar-mas").on("click", function () {
			var cantidad = $("#cargar-mas").attr("data-cantidad");
			var nueva_cantidad = parseInt(cantidad)+5;
			$(".mas-"+cantidad).slideDown();
			if($(".mas-"+nueva_cantidad).length > 0){

			$("#cargar-mas").attr("data-cantidad", nueva_cantidad)

			}else{
				 $("#cargar-mas").hide();
				 $("#cargar-mas").attr("data-cantidad", 5);				
				
			}

		})		
		$("body").removeClass("sin-sidebar");
		$("aside#sidebar").fadeIn();
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('noticias')").addClass('current-menu-item');
		$('#artistas').slideUp('slow');
		$('#inicio').slideUp('slow');
		$('#noticias > div').show();
		$("#noticias .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			padre = $(this).parent();
			$('.abierto h1').slideDown();
			$('.abierto .read-more').slideDown();
			$(this).parent().parent().removeClass("abierto");
		});
	},
	artistas: function(){
		$(document).attr("title", "Artistas"+titulo_inicial);

		var self = this;
		console.log("Root");
		$('#artistas > div').show();

		$("#artistas .abierto .bio").each(function (i, info) {
			$(this).html($(this).parent().parent().parent().parent().attr("bio_corta"));
			padre = $(this).parent();
			$('#artistas .abierto h3').slideDown();
			$("#info_relacionada_artista").remove();
			// $('#artistas .abierto .read-more').slideDown();
			var url_foto = $("#artistas .abierto img").attr("src");
			var url_foto_nueva = cambiar_thumb(url_foto, 300, 200);
			$("#artistas .abierto img").attr("src", url_foto_nueva);
			$(this).parent().parent().parent().removeClass("abierto");
		});
		$(".head").text("Artistas");
		$(".subhead").text("catálogo de artistas de la provincia");
		ocultarPaginas(true);
		$('#inicio').fadeOut('slow', function () {

			$('#artistas').fadeIn('slow');
		});

		$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('artist')").addClass('current-menu-item');

		$("#artistas .loop").slideUp();
		$("#posts-list").append('<a href="javascript:void(0)" id="cargar-mas" data-cantidad="8" class="btn btn-info btn-large btn-block" >Cargar mas</a>');
		$("#cargar-mas").on("click", function () {
			var cantidad = $("#cargar-mas").attr("data-cantidad");
			var nueva_cantidad = parseInt(cantidad)+8;
			$(".mas-"+cantidad).slideDown();
			if($(".mas-"+nueva_cantidad).length > 0){

			$("#cargar-mas").attr("data-cantidad", nueva_cantidad)

			}else{
				 $("#cargar-mas").hide();
				 $("#cargar-mas").attr("data-cantidad", 8);				
				
			}

		})		

		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			$(this).parent().parent().removeClass("abierto");
		});
	},
	fechas: function(){
		$(document).attr("title", "Agenda Cultural"+titulo_inicial);

		var self = this;
		console.log("Root");
		$('#fechas > div').show();

		$("#fechas .abierto .bio").each(function (i, info) {
			$(this).html($(this).parent().parent().parent().parent().attr("contenido_corto"));
			padre = $(this).parent();
			$('#fechas .abierto h3').slideDown();
			$("#info_relacionada_fecha").remove();
			// $('#fechas .abierto .read-more').slideDown();
			var url_foto = $("#fechas .abierto img").attr("src");
			var url_foto_nueva = cambiar_thumb(url_foto, 300, 200);
			$("#fechas .abierto img").attr("src", url_foto_nueva);
			$(this).parent().parent().parent().removeClass("abierto");
		});
		$(".head").text("Agenda Cultural");
		$(".subhead").text("todos los próximos eventos culturales de la provincia");
		ocultarPaginas(true);
		$('#inicio').fadeOut('slow', function () {
			$('#fechas').fadeIn('slow');
		});

		$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('agenda')").addClass('current-menu-item');

		$("#fechas .loop").slideUp();
		$("#contenidoTop").remove()
		$("#posts-list").append('<a href="javascript:void(0)" id="cargar-mas" data-cantidad="8" class="btn btn-info btn-large btn-block" >Cargar mas</a>');
		$("#cargar-mas").on("click", function () {
			var cantidad = $("#cargar-mas").attr("data-cantidad");
			var nueva_cantidad = parseInt(cantidad)+8;
			$(".mas-"+cantidad).slideDown();
			if($(".mas-"+nueva_cantidad).length > 0){

			$("#cargar-mas").attr("data-cantidad", nueva_cantidad)

			}else{
				 $("#cargar-mas").hide();
				 $("#cargar-mas").attr("data-cantidad", 8);				
				
			}

		})		

		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			$(this).parent().parent().removeClass("abierto");
		});
	},
		fechaSingle: function(id){
		console.log("fechaSingle", id);
		ocultarPaginas(true);
		$('#fechas').fadeOut('10', function() {
		    $('#single').fadeIn('slow');
			$(".current-menu-item").removeClass('current-menu-item');
			$("nav ul#nav li:contains('agenda')").addClass('current-menu-item');
			$('#fechas > div').hide();
			$("html, body").animate({ scrollTop: 180 }, "slow");
			$(".head").text("Cargando...");
		});		
		

		var id_de_articulo;
		var obtenerId = $.getJSON('http://api.brotecolectivo.com/fechas/obtenerId/'+id+'/', function(data){
			console.log(data);
			id_de_articulo = data[0].id;
						console.log("Cargaremos: "+ 'http://api.brotecolectivo.com/artistas/'+id_de_articulo)
			var obtener_articulo = $.getJSON('http://api.brotecolectivo.com/fechas/'+id_de_articulo, function(info){
				console.log(info);
				console.log(info.contenido);
				$("#mapa_evento").hide();
				coordenadas = info.coordenadas.split(',');
	    		console.log(coordenadas);
	    		
				$(".head").text(info.titulo);
				console.log("Aca estoy ahora");
				$(".subhead").html(sacar_HTML(info.contenido_corto));
				console.log("Aca estoy ahora¿?");
				$(document).attr("title", info.titulo+titulo_inicial);

				$("#single img").attr("src", "http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/"+ info.urltag+".jpg&w=300&h=200&zc=1");

				$("#contenidoTop").remove();
				$("#cargando_info").remove();
				$('#single').prepend(boton_volver);
				$("#boton_volver").html('<i class="icon-long-arrow-left  icon-large"></i>  Volver a Agenda Cultural');
				$('#single .bio-single').html(info.contenido);
				$('#single .ubicacion h2').html(info.lugar);
				$('#single .ubicacion h3').html(info.direccion);
				$('#single > h1').html(info.titulo);
			});
		});
		},

	artistaSingle: function(id){
		console.log("artistaSingle", id);
		$("#cargar-mas").remove()
		$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		$('#noticias').fadeOut('slow')
		$('#inicio').fadeOut('slow')
		$('#artistas').fadeOut('10', function() {
		    $('#artistas').fadeIn('slow');
			$(".current-menu-item").removeClass('current-menu-item');
			$("nav ul#nav li:contains('artistas')").addClass('current-menu-item');
			$('#artistas > div').hide();
			$('#artistas #'+id).parent().show();
			$('#artistas #'+id).show();
			$("html, body").animate({ scrollTop: 180 }, "slow");
			$(".head").text("Cargando...");
		});		
		

		var id_de_articulo;
		var obtenerId = $.getJSON('http://api.brotecolectivo.com/bandas/obtenerId/'+id+'/', function(data){
			console.log(data);
			id_de_articulo = data[0].id;
			console.log("Cargaremos: "+ 'http://api.brotecolectivo.com/artistas/'+id_de_articulo)
			var obtener_articulo = $.getJSON('http://api.brotecolectivo.com/artistas/'+id_de_articulo, function(info){
				console.log(info);
				console.log(info.bio);
				$(".head").text(info.nombre);
				$(".subhead").html(sacar_HTML(info.bio_corta));
				$(document).attr("title", info.nombre+titulo_inicial);

				var url_foto = $("#artistas #"+id_de_articulo +" img").attr("src");
				var url_foto_nueva = cambiar_thumb(url_foto, 300, 200);
				$("#artistas #"+id_de_articulo +" img").attr("src", url_foto_nueva);

				$("#contenidoTop").remove();
				$("#cargando_info").remove();
				$('#artistas #'+id_de_articulo+" > li").prepend(boton_volver);
				$("#boton_volver").html('<i class="icon-long-arrow-left  icon-large"></i>  Volver a Artistas');
				$('#artistas #'+id_de_articulo+' .bio').html(info.bio);
				$('#artistas #'+id_de_articulo+' > li').addClass("abierto");
				$('#artistas #'+id_de_articulo+' h3').slideUp();
				$('#artistas #'+id_de_articulo+' .read-more').slideUp();

				$("#artistas #"+id_de_articulo).append('<div class="reproductor" id="info_relacionada_artista"> \
					<h2><span class="small">Videos</span> <span class="small">Noticias</span>  \
					<span class="small">Eventos</span></h2> \
					<div id="cargando_info"></div> \
					<div class="reproductordevideo seccion" style="display:none;"> \
					<div class="yt_holder"><div id="ytvideo"></div><ul class="videosbanda"></ul> \
					</div></div> \
					<div class="noticias_relacionadas seccion" style="display:none;"> \
					<ul class="noticias"></ul> \
					</div> \
					<div class="eventos_relacionados seccion" style="display:none;"> \
					<ul class="eventos"></ul> \
					</div> \
					</div>');

				var target = document.getElementById('cargando_info');
				var spinner = new Spinner(opts).spin(target);
				var obtenerVideos = $.getJSON('http://api.brotecolectivo.com/videos/?banda='+id_de_articulo, function(data){

					if(data[0]){
						$.each(data, function (i, item) {
							console.log(item);
							$("ul.videosbanda").append('<li><a href="http://www.youtube.com/watch?v='+item.idyoutube+'">'+item.titulo+'</a></li>');
						});
						$("ul.videosbanda").ytplaylist();
						console.log("Voy a abrir un video");
						
					}

					var obtenerNoticias = $.getJSON('http://api.brotecolectivo.com/noticias/?banda='+id_de_articulo+'&limit=5&corto=1', function(data){

						if(data[0]){
							$.each(data, function (i, item) {
								console.log(item);
								$("ul.noticias").append('<li><a href="javascript:void(0);" rel="address:/noticia/'+item.urltag+'">'+item.titulo+'</a></li>');
							});
							if($('#artistas #'+id_de_articulo+' .reproductordevideo ul li').length == 0){

							
							$('#artistas #'+id_de_articulo+" h2 span:contains('Videos')").remove();
							}
						}

						var obtenerFechas = $.getJSON('http://api.brotecolectivo.com/fechas/?banda='+id_de_articulo+'&limit=5&order=fechas.id&corto=1&order2=desc', function(data){
							
								console.log("Hola2!")

							if(data[0]){
								$.each(data, function (i, item) {
									console.log(i);
									console.log(item);
									console.log(data.length);
									$("ul.eventos").append('<li><a href="javascript:void(0);" rel="address:/agenda-cultural/'+item.urltag+'">'+item.fecha_corta+' - '+item.titulo+'</a></li>');
									if(i+1 == data.length){
										$(document).trigger("eventosCargados", id_de_articulo);
									}
								});
								

							}else{
								$("#cargando_info").remove();
								console.log("Hola!")
								if($('#artistas #'+id_de_articulo+' .reproductordevideo ul li').length == 0){
									if($('#artistas #'+id_de_articulo+' .noticias li').length == 0){
										$("#info_relacionada_artista").hide();
									}
								}else{
									console.log("naranja")
									$('#artistas #'+id_de_articulo+" h2 span:contains('Videos')").click();
								}
								if($('#artistas #'+id_de_articulo+' .noticias li').length == 0){

								$('#artistas #'+id_de_articulo+" h2 span:contains('Noticias')").remove();
								}else{
									$('#artistas #'+id_de_articulo+" h2 span:contains('Noticias')").click();

								}						
								$('#artistas #'+id_de_articulo+" h2 span:contains('Eventos')").remove();						
								
							}

						});
					});
				});

			});
		});

	},
	articleSingle : function(id){
		console.log("articleSingle", id);
		$("#cargar-mas").remove()

		$('#artistas').fadeOut('slow')
		$('#inicio').fadeOut('slow')
		$('#fechas').fadeOut('slow')
		$('#noticias').fadeOut('10', function() {
		    $('#noticias').fadeIn('slow');
			$(".current-menu-item").removeClass('current-menu-item');
			$("nav ul#nav li:contains('noticias')").addClass('current-menu-item');
			$('#noticias > div').hide();
			$('#noticias #'+id).parent().show();
			$('#contenidoTop').remove();
			$('#noticias #'+id).prepend(boton_volver);
			$("#boton_volver").html('<i class="icon-long-arrow-left  icon-large"></i>  Volver a Noticias');
			$("html, body").animate({ scrollTop: 180 }, "slow");
			$(".head").text("Cargando...");
			$(".subhead").text("Noticias culturales en Brote Colectivo");
		});		
		

		var id_de_articulo;
		var obtenerId = $.getJSON('http://api.brotecolectivo.com/noticias/obtenerId/'+id+'/', function(data){
			console.log("Estoy cargando un articulo")
			console.log(data);
			id_de_articulo = data[0].id;
			console.log("cargare "+id_de_articulo);
			console.log("Estoy cargando un articulo")
			var obtener_articulo = $.getJSON('http://api.brotecolectivo.com/noticias/'+id_de_articulo, function(info){
				console.log(info[0]);
				$(".head").text(info[0].titulo);
				$(document).attr("title", info[0].titulo+titulo_inicial);

				$('#noticias #'+id_de_articulo+' .excerpt').html(info[0].contenido);
				$('#noticias #'+id_de_articulo).addClass("abierto");
				$('#noticias #'+id_de_articulo+' h1').slideUp();
				$('#noticias #'+id_de_articulo+' .read-more').slideUp();
			});
		});

	}
});