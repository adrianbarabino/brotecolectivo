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
		console.log("Este es el "+index)

		this.model.on('change', function(){
			self.render();
		});
		var plantilla_init = $("#Artista_tpl").html();
		var plantilla = '<li class="span3" id="<%= post.urltag %>">'+plantilla_init+'</li>';
		if(index>8-1){
		plantilla = '<li class="span3 loop mas-8" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			if(index>16-1){
				console.log("Hola!");
			plantilla = '<li class="span3 loop mas-16" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}
			if(index>24-1){
			plantilla = '<li class="span3 loop mas-24" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}	
			if(index>32-1){
			plantilla = '<li class="span3 loop mas-32" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}		
			if(index>40-1){
			plantilla = '<li class="span3 loop mas-40" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}		
			if(index>48-1){
			plantilla = '<li class="span3 loop mas-48" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}			
			if(index>56-1){
			plantilla = '<li class="span3 loop mas-56" id="<%= post.urltag %>">'+plantilla_init+'</li>';

			}		
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