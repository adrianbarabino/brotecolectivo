BroteColectivo.Views.ArticleView = Backbone.View.extend({
	events:{
		"click > article .read-more" : "navigate",
		"click > article h1" : "navigate",
		"click .likes_up" : "upvote",
		"click .likes_down": "downvote",
		"show" : "show"
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
		var plantilla_init = $("#Article_tpl").html();

		var plantilla = '<article class="format-standard" id="<%= post.urltag %>">'+plantilla_init+'</article>';
		console.log("El indice es "+index+ " y el indice_modelo es "+indice_modelo);
		if(index>4){
			indice_modelo_nuevo = indice_modelo+5;
			if(indice_modelo+9 == index){
				indice_modelo = indice_modelo_nuevo;
			}
		plantilla = '<article class="format-standard loop mas-'+indice_modelo_nuevo+'" id="<%= post.urltag %>">'+plantilla_init+'</article>';
	
		}

		this.template = _.template(plantilla);

	},
	navigate: function () {
		console.log("le hice click", this.model.get("titulo"));
		Backbone.history.navigate('noticia/'+this.model.get("urltag")+'/', {trigger:true})
	},
	upvote : function (e) {
		e.stopPropagation();
		console.log("upvote");

		var votes = this.model.get("votes");

		this.model.set("votes", parseInt(votes, 10) + 1);
	},
	downvote : function (e) {
		e.stopPropagation();
		console.log("downvote");

		var votes = this.model.get("votes");

		this.model.set("votes", parseInt(votes, 10) - 1);
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