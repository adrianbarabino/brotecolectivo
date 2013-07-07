BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"inicio/" :  "root",
		"noticia/:id/": "articleSingle",
		"noticia/:id": "articleSingle"
	},
	initialize : function(){
		var self = this;

	},
	root: function(){
		var self = this;
		console.log("Root");

		$('#inicio > div').show();
		$("#inicio .abierto .excerpt").html($("#inicio .abierto").attr("contenido_corto"));
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