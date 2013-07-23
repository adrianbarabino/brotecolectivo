BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"inicio/" :  "root",
		"noticias/" :  "noticias",
		"artistas/" :  "artistas",
		"noticia/:id/": "articleSingle",
		"noticia/:id": "articleSingle",
		"artistas/:id/": "artistaSingle",
		"artistas/:id": "artistaSingle"
	},
	initialize : function(){
		var self = this;

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
			// $('#artistas .abierto .read-more').slideDown();
			var url_foto = $("#artistas .abierto img").attr("src");
			var url_foto_nueva = cambiar_thumb(url_foto, 300, 200);
			$("#artistas .abierto img").attr("src", url_foto_nueva);
			$(this).parent().parent().parent().removeClass("abierto");
		});
		$(".head").text("Artistas");
		$(".subhead").text("catálogo de artistas de la provincia");
		$('#inicio').fadeOut('slow', function () {
			$('#noticias').fadeOut('slow');
			$('#artistas').fadeIn('slow');
		});

		$("body").addClass("sin-sidebar");
		$("aside#sidebar").fadeOut();
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('artist')").addClass('current-menu-item');

		$("#artistas .loop").slideUp();
		$("#cargar-mas").remove()
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
			$("html, body").animate({ scrollTop: 180 }, "slow");
			$(".head").text("Cargando...");
			$(".subhead").text("Noticias culturales en Brote Colectivo");
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
				$(document).attr("title", info.nombre+titulo_inicial);


				var url_foto = $("#artistas #"+id_de_articulo +" img").attr("src");
				var url_foto_nueva = cambiar_thumb(url_foto, 300, 200);
				$("#artistas #"+id_de_articulo +" img").attr("src", url_foto_nueva);


				$('#artistas #'+id_de_articulo+' .bio').html(info.bio);
				$('#artistas #'+id_de_articulo+' > li').addClass("abierto");
				$('#artistas #'+id_de_articulo+' h3').slideUp();
				$('#artistas #'+id_de_articulo+' .read-more').slideUp();
			});
		});

	},
	articleSingle : function(id){
		console.log("articleSingle", id);
		$("#cargar-mas").remove()

		$('#artistas').fadeOut('slow')
		$('#inicio').fadeOut('slow')
		$('#noticias').fadeOut('10', function() {
		    $('#noticias').fadeIn('slow');
			$(".current-menu-item").removeClass('current-menu-item');
			$("nav ul#nav li:contains('noticias')").addClass('current-menu-item');
			$('#noticias > div').hide();
			$('#noticias #'+id).parent().show();
			$("html, body").animate({ scrollTop: 180 }, "slow");
			$(".head").text("Cargando...");
			$(".subhead").text("Noticias culturales en Brote Colectivo");
		});		
		

		var id_de_articulo;
		var obtenerId = $.getJSON('http://api.brotecolectivo.com/noticias/obtenerId/'+id+'/', function(data){
			console.log(data);
			id_de_articulo = data[0].id;
			var obtener_articulo = $.getJSON('http://api.brotecolectivo.com/noticias/'+id_de_articulo, function(info){
				console.log(info[0].contenido);
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