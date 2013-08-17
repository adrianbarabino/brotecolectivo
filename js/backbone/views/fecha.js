BroteColectivo.Views.FechaView = Backbone.View.extend({
	events:{
		"click li" : "navigate",
	},
	className:"",
	initialize : function(model){
		var self = this;
		this.model = model;
		var index = this.collection.indexOf(this.model);
		total_fechas = index;
		var modelAbove = this.collection.at(index-1);
		console.log("Este es el "+index)

		this.model.on('change', function(){
			self.render();
		});
		var plantilla_init = $("#Fecha_tpl").html();
		var plantilla = '<li class="span3" id="<%= post.urltag %>">'+plantilla_init+'</li>';
		if(index>7){
			console.log("Indice es: "+index+ " y el proximo será: "+indice_fechas);
		indice_fechas_nuevo = indice_fechas+8;
		if(indice_fechas+15 == index){
		indice_fechas = indice_fechas_nuevo;
		}

		plantilla = '<li class="span3 loop mas-'+indice_fechas_nuevo+'" id="<%= post.urltag %>">'+plantilla_init+'</li>';
	
		}

		this.model.on('change', function(){
			self.render();
		});
		this.template = _.template(plantilla);

	},
	navigate: function () {
		console.log("le hice click", this.model.get("nombre"));
		Backbone.history.navigate('agenda-cultural/'+this.model.get("urltag")+'/', {trigger:true})
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