BroteColectivo.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"noticia/:id": "articleSingle"
	},
	initialize : function(){
		var self = this;

	},
	root: function(){
		var self = this;
		console.log("Root");

		$('#contenido > div').show();
	},
	articleSingle : function(id){
		console.log("articleSingle", id);
		$('#contenido > div').hide();
		$('#contenido #'+id).parent().show();
	}
});