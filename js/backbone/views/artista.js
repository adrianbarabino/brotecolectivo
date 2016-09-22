BroteColectivo.Views.ArtistaView = Backbone.View.extend({
	events:{
		"click li" : "navigate",
	},
	className:"",
	initialize : function(model){
		var self = this;

		this.model = model;
		var index = this.collection.indexOf(this.model);
		var modelAbove = this.collection.at(index-1);
		imprimirMensaje("Este es el "+index)

		this.model.on('change', function(){
			self.render();
		});
		var plantilla_init = $("#Artista_tpl").html();
		var plantilla = '<li class="span3" id="<%= post.urltag %>">'+plantilla_init+'</li>';
		if(index>7){
			imprimirMensaje("Indice es: "+index+ " y el proximo será: "+indice_artistas);
		indice_artistas_nuevo = indice_artistas+8;
		if(indice_artistas+15 == index){
		indice_artistas = indice_artistas_nuevo;
		}

		plantilla = '<li class="span3 loop mas-'+indice_artistas_nuevo+'" id="<%= post.urltag %>">'+plantilla_init+'</li>';
	
		}

		this.model.on('change', function(){
			self.render();
		});
		this.template = _.template(plantilla);

	},
	navigate: function () {
		imprimirMensaje("le hice click", this.model.get("nombre"));
		Backbone.history.navigate('artistas/'+this.model.get("urltag")+'/', {trigger:true})
	},
	render: function(data) {
		var self = this;
		var locals ={
			post : this.model.toJSON()
		};

		this.$el.html( this.template(locals) );

		return this;
	}
});