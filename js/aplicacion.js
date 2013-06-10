define([
		'modulos/reproductor',
		'modulos/cargar-pagina',
//		'modulos/validar'
		], 
	function(){

		 var modulos = Array.prototype.slice.call(arguments);
	return {
		iniciar: function(){
			 for(var name in modulos) {
				modulos[name].iniciar();
			 }
			console.log("Aplicacion iniciada! Todo listo");
		}

	}
});
