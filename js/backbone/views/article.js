BroteColectivo.Views.ArticleView = Backbone.View.extend({
	events:{
		"click > article" : "navigate",
		"click .likes_up" : "upvote",
		"click .likes_down": "downvote",
		"show" : "show"
	},
	className:"",
	initialize : function(model){
		var self = this;

		this.model = model;

		this.model.on('change', function(){
			self.render();
		});

		this.template = swig.compile($("#Article_tpl").html());
		swig.init({
			autoescape:false
		})
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