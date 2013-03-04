define(['core/eventos'], function(Eventos){

	var sandboxPrototype = {
		on : function( tipo, callback)  {
			Eventos.on(tipo, callback, this.modulo);
		},
		emit : function( tipo ) {
			var args = Array.prototype.slice.call(arguments, 1);
			Eventos.emit(tipo, args);
		}
	}


	function Pepito( modulo){
		this.modulo = modulo;
	}
	Pepito.prototype = sandboxPrototype;

	return Pepito;

})