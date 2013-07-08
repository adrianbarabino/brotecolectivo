BroteColectivo.Views.ArticleView = Backbone.View.extend({
	events:{
		"click > article .read-more" : "navigate",
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
		if(index>5){
		plantilla = '<article class="format-standard loop mas-5" id="<%= post.urltag %>">'+plantilla_init+'</article>';

			if(index>20){
				console.log("Hola!");
			plantilla = '<article class="format-standard loop mas-20" id="<%= post.urltag %>">'+plantilla_init+'</article>';

			}
			if(index>40){
			plantilla = '<article class="format-standard loop mas-40" id="<%= post.urltag %>">'+plantilla_init+'</article>';

			}		
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