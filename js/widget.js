var json_data;
function inicio () {
  
  // Datos simulados que vendrían de una llamada a AJAX
  $.ajax({
  dataType: "json",
  url: "/json.php",
  data: {tabla: "fechas", order2:"desc", nuevos:"si", limit: "0,4"}
}).done(function(data) {
  json_data = data;
  console.log("hola!");
  var compilado = _.template($('#lista').html());
   $('ul').html( compilado(json_data) ); 
   $("#cargando").hide();
});
  // var data = {
  //   personas: [
  //     {id: 1, nombre: "Isaac", edad: 28},
  //     {id: 2, nombre: "Alberto", edad: 28}
  //   ]
  // };
  
  // Obtenemos el HTML del template con jQuery y se lo pasamos
  // a la funcion template de underscore para que la compile
  // Ejecutamos la funcion compilado y le pasamos la colección
  // que queremos que use y el HTML generado lo ponemos el DOM
  // con jQuery

};

function abrirAgenda (info) {
	var url = "http://www.brotecolectivo.com/agenda-cultural/";
	window.open(url, '_blank');
}
$("header").on("click", abrirAgenda);
$(document).on("ready", inicio); 