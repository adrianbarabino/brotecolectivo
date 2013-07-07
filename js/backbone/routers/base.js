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

		$("body").removeClass("sin-sidebar");
		$('#inicio').show();
		$('#artistas').hide();
		$('#inicio > div').show();
		$("#inicio .abierto .excerpt").each(function (i, info) {
			$(this).html($(this).parent().parent().attr("contenido_corto"));
			$(this).parent().parent().removeClass("abierto");
		});
	},
	artistas: function(){
		var self = this;
		console.log("Root");

		$('#inicio').hide();
		$('#artistas').show();
		$("body").addClass("sin-sidebar");
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
		$('#inicio').show();
		$('#artistas').hide();
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

	}
});