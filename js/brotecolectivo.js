	var artistas_json;
	var boton_volver='<div id="contenidoTop" style="margin-top:-1em;margin-bottom:0.5em;"><a class="btn btn-mini btn-success" id="boton_volver" href="javascript:void(0);"><i class="icon-long-arrow-left  icon-large"></i> Volver</a></div>';
	var actual;
	var titulo_inicial = " - Brote Colectivo";
	var anterior;
	var indice_modelo = 0;
	var recargando = false;
	var indice_artistas = 0;
	var indice_fechas = 0;
	var total_fechas;
	var indice_fechas_nuevo = 0;
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
	var map;


$.fn.random = function()
{
    var ret = $();

    if(this.length > 0)
        ret = ret.add(this[Math.floor((Math.random() * this.length))]);

    return ret;
};

function Cargar_Cancion_Actual () {
	if(typeof localStorage.getItem != 'undefined'){
      if (!localStorage.reproductor) {
      	          console.log("Estoy cargando la cancion random")
        $("[data-urltag] .title").random().trigger("click");
        $(".jp-pause").trigger("click");
        // Si el usuario no cambia de tema, al proximo inicio le ofrecemos otro tema
        localStorage.removeItem("reproductor");

	    
    }else{
        
	       var reproductorls = localStorage.getItem('reproductor');
	        console.log("Estoy cargando la cancion actual")
	      $("[data-urltag='"+JSON.parse(localStorage.getItem('reproductor')).actual+"'] .title").trigger("click");
	      $(".jp-pause").trigger("click");

    }
  }
  }

if (typeof _gat != 'undefined') {
var pageTracker = _gat._getTracker('UA-36574161-1');
}
	var objeto_reproductor = new Object();

	function ocultarPaginas (side) {
	
		if(side == true){

		$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		}else{
			
		$("body").removeClass("sin-sidebar");
		$("aside#sidebar").fadeIn();
		}
		$('#noticias').fadeOut('slow')
		$('#artistas').fadeOut('slow')
		$('#publicite').fadeOut('slow')
		$('#contacto').fadeOut('slow')
		$('#prensa').fadeOut('slow')
		$('#inicio').fadeOut('slow')
		$('#fechas').fadeOut('slow')
		$('#single').fadeOut('slow')
		$('#single .bio-single').html("");
		$('#single h1').html("");
		$('#single h2').html("");
		$('#single h3').html("");
		$('#artistas div.reproductor').remove();
		$('#single a figure img').attr("src", "/img/cargando.gif");
		$("#cargar-mas").remove();
		$("#contenidoTop").remove()
		$(".fb-comments").remove();


	}
	// Contacto
		jQuery.validator.addMethod('telefonoAR', function(phone_number, element) {
		  return this.optional(element) || phone_number.length > 9 &&
		  phone_number.match(/^(\(?(0|\+54)?\s?\S?[9]?\s?\S?\d{3,4}\)?\s?\S?\d{0,2}?\s?\S?\d{3,4}\s?\S?\d{3,4})$/);
		  }, 'Ingresaste mal tu numero, recorda ingresar el codigo de area ! '
		);

		jQuery('#formulario form').validate({
		messages: {
		     nombre: "Especifica tu nombre",
		     telefono: {
			required: "Necesitamos tu telefono para poder contactarte"
		},
		     email: {
		       required: "Necesitamos tu email para poder contactarte",
		       email: "Tu direccion de email debe ser correcta, ejemplo: nombre@hotmail.com"
		     }
		   },
		   submitHandler: function(form){
		   	jQuery('#formulario form').animate({left: "-10000px"}, 3000);
			jQuery("#formulario #gracias").slideDown();
		   	jQuery.post("/enviarMail.php", jQuery("#formulario form").serialize());
		   },
		    onfocusout: function(e) {
		      this.element(e);
		    }
		    , onkeyup: false
		  });
		jQuery('#formulario form #enviar').on("click", function () {
			jQuery('#formulario form').submit();

		})



	function artista_al_azar (info) {
		if(recargando == false){
			recargando = true;
			$(".bandaazar a#bandaazar .info-artista").html("");
			$(".bandaazar .azarfinal").remove();
			$(".bandaazar a#bandaazar").attr("cargando...");
			$(".bandaazar a#bandaazar figure img").attr("src", "http://www.brotecolectivo.com/img/cargando.gif");
		var artista = $.getJSON("http://api.brotecolectivo.com/artistas/?limit=1&random=si&corto=si", function (data) {



			$(".bandaazar a#bandaazar").attr("rel", "address:/artistas/"+data[0].urltag)
			$(".bandaazar a#bandaazar").attr("title", data[0].bio_corta)
			$(".bandaazar a#bandaazar h2").html(data[0].nombre);
			$(".bandaazar a#bandaazar figure img").attr("src", "http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/"+data[0].urltag+".jpg&w=300&h=200&zc=1");
			$(".bandaazar a#bandaazar .info-artista").append("<p>"+data[0].bio_corta+"</p>");
 
			var tiene_canciones = $.getJSON('http://api.brotecolectivo.com/canciones/?limit=1&banda='+data[0].id, function (dataB) {
				recargando = false;
				if(dataB[0]){
					$(".bandaazar").append('<span id="escuchar-banda" style="margin-top: -4.7em;margin-left: 0.5em;color:white;" class="btn btn-small btn-success azarfinal" href="javascript:void(0)" data-urltag="'+data[0].urltag+'"><i class="icon-play-sign"></i> Escuchar</span>');

				}else{

					$(".bandaazar").append('<a id="info-banda" style="margin-top: -4.7em;margin-left: 0.5em;color:white" class="btn btn-small btn-info link_brote azarfinal" rel="address:/artistas/'+data[0].urltag+'" ><i class="icon-info-sign"></i> Ver más</a>');


				}
			})
		});

		}

	}
	function cambiar_thumb (url, ancho, alto) {
		url = url.split("&");
		url = url[0]+"&w="+ancho+"&h="+alto+"&"+url[3];
		return url;
	}
	function sacar_HTML(html) {
	    return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
	}
		var map;
	function iniciar_mapa(lat, lon, texto, wrapper) {
		var markers = [];
		map = new OpenLayers.Map(wrapper);
            map.addLayer(new OpenLayers.Layer.OSM());
            console.log(lat);
	    var lonLat = new OpenLayers.LonLat( lat, lon)
	    	 .transform(
	        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
	        map.getProjectionObject() // to Spherical Mercator Projection
	      );
	    var lonLat2 = new OpenLayers.LonLat( lat-=-0.03, lon)
	      .transform(
	        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
	        map.getProjectionObject() // to Spherical Mercator Projection
	      );

		var zoom=13;

		var markers = new OpenLayers.Layer.Markers( "Markers" );
		map.addLayer(markers);

		markers.addMarker(new OpenLayers.Marker(lonLat));
		map.setCenter (lonLat2, zoom);


        
    };
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

$(document).on("eventosCargados", function (info, id_de_articulo) {
	console.log("Se ejecutó el EMIT");
	$("#cargando_info").hide();
	console.log(id_de_articulo)
	if($('#artistas #'+id_de_articulo+' .reproductordevideo ul li').length > 0){
									console.log("Hay items en la lista de Videos");
									$('#artistas #'+id_de_articulo+" h2 span:contains('Videos')").click();
								}else{
									console.log("No hay items en la lista de Videos");
									if($('#artistas #'+id_de_articulo+' .noticias_relacionadas li').length > 0){
										console.log("Hay items en la lista de Noticias");
										$('#artistas #'+id_de_articulo+" h2 span:contains('Noticias')").click();
									}
								}
								if($('#artistas #'+id_de_articulo+' .noticias li').length == 0){
										console.log("No hay items en la lista Noticias");

									$('#artistas #'+id_de_articulo+" h2 span:contains('Noticias')").remove();
								}
								if($('#artistas #'+id_de_articulo+' .reproductordevideo ul li').length == 0){
									if($('#artistas #'+id_de_articulo+' .noticias li').length == 0){
										console.log("No hay items en las listas: Noticias y Videos");

								$('#artistas #'+id_de_articulo+" h2 span:contains('Eventos')").click();
								$('#artistas #'+id_de_articulo+" h2 span:contains('Noticias')").remove();
								$('#artistas #'+id_de_articulo+" h2 span:contains('Videos')").remove();
							}
						}
})
$(document).on("ready", iniciar);

function iniciar () {
		$(document).on("click", "#boton_volver", function(){
		console.log("Click en el boton volver");
			var url = window.location.pathname.split("/")[1]
		if(url == "noticia"){
			url = "noticias";
		}
		Backbone.history.navigate(url+"/", {trigger:true});

		$("#boton_volver").remove();
	});
	$(document).on("click", "#escuchar-banda, #escuchar-banda-single", function(){
		console.log("Hice click!");
	 $("#reproductor [rel*='"+$(this).attr('data-urltag')+"']:first").parent().parent().find(".title").trigger("click");
	});
	
	$(document).on("click", "h2 span.small", function(){
		// Cuando hago click en un botón h2 spam small 
		// hago de que se desactive el activo y (this)
		// sea activo.
		$(this).parent().find(".activo").addClass("small");
		$(this).parent().find(".activo").removeClass("activo");
		console.log($(this).parent().find(".activo"));
		$(this).addClass("activo");
		$(this).removeClass("small");
		$(this).parent().parent().find(".seccion").slideUp();
		if($(this).text() == "Videos"){
		$(this).parent().parent().find(".reproductordevideo").slideDown();

		}					
		if($(this).text() == "Eventos"){
		$(this).parent().parent().find(".eventos_relacionados").slideDown();

		}					
		if($(this).text() == "Noticias"){
		$(this).parent().parent().find(".noticias_relacionadas").slideDown();

		}					
		if($(this).text() == "¿Dónde?"){
		$(this).parent().parent().find(".donde").slideDown();

		}				
		if($(this).text() == "Mapa"){
		$(this).parent().parent().find(".mapa").slideDown();

		}			
		if($(this).text() == "¿Cuándo?"){
		$(this).parent().parent().find(".cuando").slideDown();

		}
	});
	$('#to-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 300);
	});
		
	$("ul.sf-menu").superfish({ 
        animation: {height:'show'},   // slide-down effect without fade-in 
        delay:     200 ,              // 1.2 second delay on mouseout 
        autoArrows:  false,
        speed: 200
    });
    


	
	//##########################################
	// Resize event
	//##########################################
	$(window).resize(function() {

	}).trigger("resize");


	
		
	
	
	//##########################################
	// Mobile nav
	//##########################################

	var mobnavContainer = $("#mobile-nav");
	var mobnavTrigger = $("#nav-open");
	
	mobnavTrigger.click(function(){
		mobnavContainer.slideToggle();
	});





	console.log("Brote Colectivo iniciado!");
}
	//####################################################
	//  Comienza Backbone
	//####################################################

$(document).ready(function(){
	console.log('Starting app');


	window.collections.articles = new BroteColectivo.Collections.ArticlesCollection();
	window.routers.base = new BroteColectivo.Routers.BaseRouter();
	window.collections.artistas = new BroteColectivo.Collections.ArtistasCollection();
	window.collections.fechas = new BroteColectivo.Collections.FechasCollection();


	window.collections.articles.on('add', function(model){
		var view = new BroteColectivo.Views.ArticleView(model);

		view.render();
		$('#noticias').append(view.$el);
	});
	window.collections.artistas.on('add', function(model){
		var view = new BroteColectivo.Views.ArtistaView(model);

		view.render();
		$('#artistas').append(view.$el);
	});
	window.collections.fechas.on('add', function(model){
		var view = new BroteColectivo.Views.FechaView(model);

		view.render();
		$('#fechas').append(view.$el);
	});

	var xhr = $.get('http://api.brotecolectivo.com/noticias/?order2=desc&corto=si&importantes=si');

	xhr.done(function(data){
		data.forEach(function(item){
			console.log(item);
			window.collections.articles.add(item);
	});

		var xhr = $.get('http://api.brotecolectivo.com/artistas/?order2=desc&corto=si');

		xhr.done(function(data){
			data.forEach(function(item){
				console.log(item);
				window.collections.artistas.add(item);
	});
		
		var route = new BroteColectivo.Routers.BaseRouter();
		Backbone.history.start({
			pushState : true,
			root: "/"
		});
			
		});

	});


	$('nav li a').on('click', function (event) {
		event.preventDefault();
		var url = $(this).attr("rel");
		console.log(url);
		url = url.split(":")
		url = url[1];
		Backbone.history.navigate(url+'/', {trigger:true})
	})
	function navegacion (event){
		event.preventDefault();
		var url = $(this).attr("rel");
		console.log(url);
		url = url.split(":")
		url = url[1];
		Backbone.history.navigate(url+'/', {trigger:true})

	}


          	$(document).on("click", "#info_relacionada_artista li a", navegacion);
	$(document).on("click", "#reproductor .artist a", navegacion);
	$(document).on("click", "a#logo", navegacion);
	$(document).on("click", "a.nav-interno", navegacion);
	$(document).on("click", "a#pastel", navegacion);
	$(document).on("click", "a.link_brote", navegacion);
	$(document).on("click", ".bjqs > li > a", navegacion);
	$(document).on("click", ".bandaazar h4 i", artista_al_azar);
	
	$(document).on("click", ".bandaazar a", navegacion);
		
	console.log("Antes de cargas fechas");
	console.time('carga-fechas');
var fechasxhr = $.ajax({
		url: 'http://api.brotecolectivo.com/fechas/?nuevas=si&order2=desc&corto=si&order=fechas.fecha_inicio&order2=asc',
		async: true,
		dataType: "json"
	}).done(function(data){
			data.forEach(function(item){
				console.log(item);
				window.collections.fechas.add(item);
		});
		});
	console.timeEnd('carga-fechas');
	console.log("Despues de cargas fechas");


});



	//####################################################
	//  Fin de Backbone
	//####################################################