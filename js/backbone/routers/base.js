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
		var self = this;
		console.log("Root");
		$('#noticias').fadeOut('slow', function() {
		    $('#noticias').fadeIn('slow');
		});				$(".head").text("Noticias Culturales");
		$(".subhead").text("sitio de difusión cultural en Santa Cruz, Argentina");
		$(".mas-40, .mas-20, .mas-5").slideUp();
		$("#cargar-mas").remove()
		$("#noticias").append('<a href="javascript:void(0)" id="cargar-mas" data-cantidad="5" class="btn btn-info btn-large btn-block" >Cargar mas</a>');
		$("#cargar-mas").on("click", function () {
			var cantidad = $("#cargar-mas").attr("data-cantidad");
			$(".mas-"+cantidad).slideDown();
			if(cantidad == 5){
				 $("#cargar-mas").attr("data-cantidad", 20);
			}
			if(cantidad == 20){
				 $("#cargar-mas").attr("data-cantidad", 40);
			}
			if(cantidad == 40){
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
			$(this).parent().parent().removeClass("abierto");
		});
	},
	artistas: function(){
		var self = this;
		console.log("Root");
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
		var xhr = $.get('http://api.brotecolectivo.com/artistas/?order2=desc');

		xhr.done(function(data){
			data.forEach(function(item){
				console.log(item);
				window.collections.artistas.add(item);
		});
		$(".loop").slideUp();
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
		});
		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			$(this).parent().parent().removeClass("abierto");
		});
	},

	artistaSingle: function(id){
		console.log("artistaSingle", id);
		$("body").removeClass("sin-sidebar");
		$("aside#sidebar").fadeIn();
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
				$('#noticias #'+id_de_articulo+' .excerpt').html(info[0].contenido);
				$('#noticias #'+id_de_articulo).addClass("abierto");
				$('#noticias #'+id_de_articulo+' h1').slideUp();
			});
		});

	}
});