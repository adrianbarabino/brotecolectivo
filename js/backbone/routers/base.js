BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"inicio/" :  "root",
		"noticias/" :  "noticias",
		"artistas/" :  "artistas",
		"publicidad/" :  "publicidad",
		"publicidad" :  "publicidad",
		"contacto/" :  "contacto",
		"contacto" :  "contacto",
		"prensa/" :  "prensa",
		"prensa" :  "prensa",
		"agenda-cultural/" :  "fechas",
		"agenda-cultural" :  "fechas",
		"bandas-antiguas/" :  "bandasAntiguas",
		"bandas-antiguas" :  "bandasAntiguas",
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


        this.bind('route', this.trackPageview);
    },

    trackPageview: function ()
    {
        var url = Backbone.history.getFragment();

        //prepend slash
        if (!/^\//.test(url) && url != "")
        {
            url = "/" + url;
        }

        _gaq.push(['_trackPageview', url]);
    },
	root: function(){
		$(document).attr("title", "Inicio"+titulo_inicial);
		ocultarPaginas(false);
		var self = this;
		console.log("Root");
		$("#bread1").text("home");
		$("#bread2").text("bienvenido");
		$('#inicio').fadeOut('slow', function() {
		    $('#inicio').fadeIn('slow');
		});				$(".head").text("Bienvenido a Brote Colectivo");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");

		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('inicio')").addClass('current-menu-item');
		$('#artistas').slideUp('slow');
		$('#noticias').slideUp('slow');
		$('#inicio > div').show();
	},
	publicidad: function(){
		$(document).attr("title", "Publicidad"+titulo_inicial);
		ocultarPaginas(false);
		var self = this;
		console.log("Publicidad");
		$('#publicite').fadeOut('slow', function() {
		    $('#publicite').fadeIn('slow');
		});				
		$(".head").text("Publicite en Brote Colectivo");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");

		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('publicidad')").addClass('current-menu-item');
	},
	contacto: function(){
		$(document).attr("title", "Contactanos"+titulo_inicial);
		ocultarPaginas(false);
		var self = this;
		console.log("Contacto");
		$('#contacto').fadeOut('slow', function() {
		    $('#contacto').fadeIn('slow');
		});				
		$(".head").text("Contactanos");
		$(".subhead").text("Nos interesa mucho saber tu opinion");

		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('publicidad')").addClass('current-menu-item');
	},
	prensa: function(){
		$(document).attr("title", "Prensa"+titulo_inicial);
		ocultarPaginas(false);
		var self = this;
		console.log("prensa");
		$('#prensa').fadeOut('slow', function() {
		    $('#prensa').fadeIn('slow');
		});				
		$(".head").text("Prensa");
		$(".subhead").text("información de prensa de Brote Colectivo");

		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('publicidad')").addClass('current-menu-item');
	},
	bandasAntiguas: function(){
		$(document).attr("title", "Bandas Antiguas"+titulo_inicial);
		ocultarPaginas(true);
		var self = this;

		console.log("Root");
				$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		$("#bread1").text("home");
		$("#bread2").text("bandas historicas");
		$('#inicio').fadeOut('slow', function() {
		    $('#bandasAntiguas').fadeIn('slow');
		});				
		$(".head").text("Bandas Antiguas");


		$(".subhead").text("sección de bandas antiguas de Santa Cruz");

		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('inicio')").addClass('current-menu-item');
		$('#artistas').slideUp('slow');
		$('#noticias').slideUp('slow');
		crear_bandas_historicas();
	},
	noticias: function(){
		$(document).attr("title", "Noticias"+titulo_inicial);
		var self = this;
		console.log("Root");
		$("#bread1").text("home");
		FB.XFBML.parse();
		$("#bread2").text("noticias");
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
			FB.XFBML.parse();
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
		$("#bread1").text("home");
		$("#bread2").text("artistas");
		$('#artistas > div').show();
		FB.XFBML.parse();

		$("#artistas .abierto .bio").each(function (i, info) {
			$(this).html($(this).parent().parent().parent().parent().attr("bio_corta"));
			padre = $(this).parent();
			$('#artistas .abierto h3').slideDown();
			$('#artistas .abierto a[data-tipo^=lightbox]').attr("href", "javascript:void(0)")
			$('#artistas .abierto a[data-tipo^=lightbox]').attr("rel", "")

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
		$("#bread1").text("home");
		$("#bread2").text("agenda cultural");
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
		if($("#fechas .loop").length > 0){

		$("#posts-list").append('<a href="javascript:void(0)" id="cargar-mas" data-cantidad="8" class="btn btn-info btn-large btn-block" >Cargar mas</a>');
		}
		$("#cargar-mas").on("click", function () {
			var cantidad = $("#cargar-mas").attr("data-cantidad");
			var nueva_cantidad = parseInt(cantidad)+8;
			$("#fechas .mas-"+cantidad).slideDown();
			if($("#fechas .mas-"+nueva_cantidad).length > 0){

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

		$("#bread1").text("agenda");
		$("#bread2").text(info.titulo);
				console.log(info.contenido);
				$("#mapa_evento").html("");
				$("#mapa_evento").show();
				coordenadas = info.coordenadas.split(',');
	    		console.log(coordenadas);
				iniciar_mapa(coordenadas[1], coordenadas[0],"", "mapa_evento");
	    		
				$(".head").text(info.titulo);
				console.log("Aca estoy ahora");
				$(".subhead").html(sacar_HTML(info.contenido_corto));
				console.log("Aca estoy ahora¿?");
				$(document).attr("title", info.titulo+titulo_inicial);
				$("#single .info-evento > h2").html("")
				$("#single .info-evento > h2").append('<span class="activo">¿Dónde?</span> <span class="small">¿Cuándo?</span>');
				$("#single a.foto_evento").attr("href", "http://www.brotecolectivo.com/fechas/"+ info.urltag+".jpg");
				$("#single figure img").attr("src", "http://www.brotecolectivo.com/thumb/phpThumb.php?src=/fechas/"+ info.urltag+".jpg&w=300&h=200&zc=1");
				$("#single .info-evento .cuando").hide();
				$("#single .seccion.donde").html("");

				$("#single .seccion.donde").append("<h2>"+info.lugar+"</h2><h3>"+info.direccion+" <small>"+info.ciudad+"</small></h3>")
				$("#single .info-evento .donde").slideDown();
				$("#contenidoTop").remove();
				$("#cargando_info").remove();
				fecha_inicio = moment(info.fecha_inicio);
				fecha_actual = moment();
				diferencia = fecha_inicio.diff(fecha_actual);

				console.log("la diferencia es: "+fecha_inicio.diff(fecha_actual));
				endDate = new Date(fecha_inicio.format("YYYY"),fecha_inicio.format("M")-1,fecha_inicio.format("DD"),fecha_inicio.format("HH"),fecha_inicio.format("mm"));
				console.log('Date('+fecha_inicio.format("YYYY")+','+fecha_inicio.format("M")+'-1,'+fecha_inicio.format("DD")+','+fecha_inicio.format("HH")+','+fecha_inicio.format("mm")+');');
				
				$("#single .info-evento .cuando").countdown('destroy'); 
				
				if(diferencia < 0){

				$("#single .info-evento .cuando").countdown({ since: endDate, format: 'DHM' });
				$("#single .info-evento .cuando").prepend("<span>Este evento ya sucedió hace:</span><br>");
				}else{
					
				$("#single .info-evento .cuando").countdown({ until: endDate, format: 'DHM' });
				$("#single .info-evento .cuando").prepend("<span>El evento será dentro de:</span><br>");
				}

				$('#single').prepend(boton_volver);
				$("#boton_volver").html('<i class="icon-long-arrow-left  icon-large"></i>  Volver a Agenda Cultural');
				
				$('#single .bio-single').html(info.contenido);
				$(".info-evento span.small:contains('¿Dónde?')").click();
			});
		});
		},

	artistaSingle: function(id){
		console.log("artistaSingle", id);
		ocultarPaginas(true);
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
			$("#bread1").text("artistas");
			$("#bread2").text(info.titulo);
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

				var redes = [];
				if(info.social.facebook != "Facebook"){
					var red = Object();
					red.red = "facebook";
					red.nombreRed = "Facebook";
					red.url = "https://www.facebook.com/"+info.social.facebook;
					red.estilo = "primary";
					redes.push(red);
				}
				
				if(info.social.twitter != "Twitter"){
					var red = Object();
					red.red = "twitter";
					red.nombreRed = "Twitter";
					red.url = "https://www.twitter.com/"+info.social.twitter;
					red.estilo = "info";
					redes.push(red);
				}


				if(info.social.soundcloud != "SoundCloud"){
					var red = Object();
					red.red = "cloud";
					red.nombreRed = "Soundcloud";
					red.url = "https://www.soundcloud.com/"+info.social.soundcloud;
					red.estilo = "warning";
					redes.push(red);
				}

				if(info.social.sitioweb != "Sitio Web"){
					var red = Object();
					red.red = "asterisk";
					red.nombreRed = "Sitio Web";
					red.url = info.social.sitioweb;
					red.estilo = "inverse";
					redes.push(red);
				}

				if(redes.length > 0){
					for (var i = redes.length - 1; i >= 0; i--) {
						data = redes[i];
						$('#artistas #'+id_de_articulo+" > li #contenidoTop").append('&nbsp; <a class="btn btn-mini btn-'+data.estilo+'" class="boton-'+data.red+'" href="'+data.url+'"><i class="icon-'+data.red+'  icon-large"></i> '+data.nombreRed+'</a>');

					};

				}

				$('#artistas #'+id_de_articulo+' .bio').html(info.bio);
				$('#artistas #'+id_de_articulo+' > li').addClass("abierto");
				$("#artistas #"+id_de_articulo+' > li').append('<div class="reproductor" id="info_relacionada_artista"><h2><span class="small">Videos</span> <span class="small">Noticias</span> <span class="small">Eventos</span></h2><div id="cargando_info"></div><div class="reproductordevideo seccion" style="display:none;"><div class="yt_holder"><div id="ytvideo"></div><ul class="videosbanda"></ul></div></div><div class="noticias_relacionadas seccion" style="display:none;"><ul class="noticias"></ul></div><div class="eventos_relacionados seccion" style="display:none;"><ul class="eventos"></ul></div></div>');
				$('#artistas #'+id_de_articulo+' a[data-tipo^=lightbox]').attr("href", "http://www.brotecolectivo.com/contenido/imagenes/bandas/"+info.urltag+".jpg")
				$('#artistas #'+id_de_articulo+' a[data-tipo^=lightbox]').attr("rel", "lightbox")
				$('#artistas #'+id_de_articulo+' h3').slideUp();
				$('#artistas #'+id_de_articulo+' .read-more').slideUp();

				

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

					var obtenerNoticias = $.getJSON('http://api.brotecolectivo.com/noticias/?banda='+id_de_articulo+'&order=noticias.id&limit=5&corto=1&importantes=si', function(data){

						if(data[0]){
							$.each(data, function (i, item) {
								console.log(item);
								$("ul.noticias").append('<li><a href="/noticia/'+item.urltag+'" rel="address:/noticia/'+item.urltag+'">'+item.titulo+'</a></li>');
							});
							if($('#artistas #'+id_de_articulo+' .reproductordevideo ul li').length == 0){

							
							$('#artistas #'+id_de_articulo+" h2 span:contains('Videos')").remove();
							}

						}
						var obtenerFechas = jQuery.ajax({
							async: false,
							timeout: 9000,
							url: 'http://api.brotecolectivo.com/fechas/?banda='+id_de_articulo+'&limit=5&order=fechas.id&corto=1&order2=desc',
							dataType: "json"}).complete( function(data){
							
								console.log("Hola2!");
								console.log(data);
								var data_json = JSON.parse(data.responseText);

							if(data_json[0]){
								$.each(data_json, function (i, item) {
									console.log(i);
									console.log(item);
									console.log(data_json.length);
									$("ul.eventos").append('<li><a href="javascript:void(0);" rel="address:/agenda-cultural/'+item.urltag+'">'+item.fecha_corta+' - '+item.titulo+'</a></li>');
									if(i+1 == data_json.length){
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

						}).fail( function(jqXHR, textStatus, errorThrown) {
							var err;
							    if (textStatus !== "abort" && errorThrown !== "abort") {
							        try {
							            err = $.parseJSON(jqXHR.responseText);
							            alert(err.Message);
							        } catch(e) {
							            alert("ERROR:\n" + jqXHR.responseText);
							        }
							    }
							    // aborted requests should be just ignored and no error message be displayed
							});
						var tiene_canciones = $.getJSON('http://api.brotecolectivo.com/canciones/?limit=1&banda='+info.id, function (dataB) {
							if(dataB[0]){
								$('#artistas #'+id_de_articulo+' #contenidoTop').append('<span id="escuchar-banda-single" style="margin-left: 0.5em;color:white;" class="btn btn-danger btn-mini azarfinal" href="javascript:void(0)" data-urltag="'+info.urltag+'"><i class="icon-play-sign"></i> Escuchar</span>');

							}
						});
					});
				});

			});
		});

	},
	articleSingle : function(id){
		console.log("articleSingle", id);
		ocultarPaginas(false);

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
						$("#bread1").text("noticias");
						$("#bread2").text(info[0].titulo);
				$(document).attr("title", info[0].titulo+titulo_inicial);

				$('#noticias #'+id_de_articulo+' .excerpt').html(info[0].contenido);
				$('#noticias #'+id_de_articulo).addClass("abierto");
				$('#noticias #'+id_de_articulo+' h1').slideUp();
				$('#noticias #'+id_de_articulo+' .read-more').slideUp();
				$('#noticias #'+id_de_articulo).append('<div class="fb-comments" data-href="http://www.brotecolectivo.com/noticia/'+info[0].urltag+'/" data-width="470"></div>');
				FB.XFBML.parse();
			});
		});

	}
});