BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"inicio/" :  "root",
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
		var self = this;
		console.log("Root");
		$('#inicio').fadeOut('slow', function() {
		    $('#inicio').fadeIn('slow');
		});				$(".head").text("Bienvenido a Brote Colectivo");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");

		$("body").removeClass("sin-sidebar");
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('inicio')").addClass('current-menu-item');
		$('#artistas').slideUp('slow');
		$('#inicio > div').show();
		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			padre = $(this).parent();
			$('.abierto h1').slideDown();
			$(this).parent().parent().removeClass("abierto");
		});
	},
	artistas: function(){
		var self = this;
		console.log("Root");
		$(".head").text("Artistas");
		$(".subhead").text("catálogo de artistas de la provincia");
		$('#inicio').fadeOut('slow', function () {
			$('#artistas').fadeIn('slow');
		});
		
		$("body").addClass("sin-sidebar");
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('artist')").addClass('current-menu-item');
		var xhr = $.get('http://api.brotecolectivo.com/artistas/?order2=desc');

		xhr.done(function(data){
			data.forEach(function(item){
				console.log(item);
				window.collections.artistas.add(item);
		});
		});
		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			$(this).parent().parent().removeClass("abierto");
		});
	},

	artistaSingle: function(id){
		console.log("artistaSingle", id);
		$("body").removeClass("sin-sidebar");
		$('#inicio').fadeOut('400', function () {
			$('#artistas').fadeIn();
		});
		$(".current-menu-item").removeClass('current-menu-item');
		$("nav ul#nav li:contains('artist')").addClass('current-menu-item');

		
		$('#inicio > div').hide();
		$('#inicio #'+id).parent().show();
		var id_de_articulo;
		var obtenerId = $.getJSON('http://api.brotecolectivo.com/noticias/obtenerId/'+id+'/', function(data){
			console.log(data);
			id_de_articulo = data[0].id;
			var obtener_articulo = $.getJSON('http://api.brotecolectivo.com/noticias/'+id_de_articulo, function(info){
				console.log(info[0].contenido);
				$('#inicio #'+id_de_articulo+' .excerpt').html(info[0].contenido);
				$('#inicio #'+id_de_articulo).addClass("abierto");
			});
		});

	},
	articleSingle : function(id){
		console.log("articleSingle", id);

		$('#artistas').fadeOut('slow')
		$('#inicio').fadeOut('10', function() {
		    $('#inicio').fadeIn('slow');
			$(".current-menu-item").removeClass('current-menu-item');
			$("nav ul#nav li:contains('inicio')").addClass('current-menu-item');
			$('#inicio > div').hide();
			$('#inicio #'+id).parent().show();
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
				$('#inicio #'+id_de_articulo+' .excerpt').html(info[0].contenido);
				$('#inicio #'+id_de_articulo).addClass("abierto");
				$('#inicio #'+id_de_articulo+' h1').slideUp();
			});
		});

	}
});