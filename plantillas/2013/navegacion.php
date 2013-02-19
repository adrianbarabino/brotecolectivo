<?php

function esta_activo($elemento){

	global $pagina;



// verificamos que el elemento es la pagina actual ,si no lo es que no devuelva nada.

	

	if($pagina == $elemento){

		echo 'class="activo"'; 

}else{

	return false ;





}



}

?>

<div class="navbar navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
           <div class="nav-collapse collapse">
            <ul class="nav">
	            <li class="dropdown" id="logo">
	            	<a class="dropdown-toggle brand" data-toggle="dropdown" href="javascript:void(0);">
	            		<img src="http://brotecolectivo.com/logochico.png" alt="Brote Colectivo" border="0"/> 
	            		<b class="caret pull-right"></b>
	            	</a>
	           
	           <ul class="dropdown-menu">
	           		  <li <?php esta_activo("inicio"); ?>><a href="<?php enlace_interno("inicio/"); ?>">Inicio</a></li> 
	                  <li <?php esta_activo("sobre_brote"); ?>><a href="<?php enlace_interno("sobre-nosotros/"); ?>">Que es Brote Colectivo</a></li>
	                  <li <?php esta_activo("publicidad"); ?>><a href="#">Publicidad</a></li>
	                  <li <?php esta_activo("contacto"); ?>><a href="#">Contacto</a></li>
	                  <li class="divider"></li>
	                  <li class="nav-header">Media Kit</li>
	                  <li <?php esta_activo("prensa"); ?>><a href="#">Prensa</a></li>
	                  <li <?php esta_activo("tos"); ?>><a href="#">Terminos y Condiciones</a></li>
	                </ul>
	          	  </li>
	              <li <?php esta_activo("noticias"); ?>><a href="<?php enlace_interno("noticias/"); ?>">Noticias</a></li>
	              <li <?php esta_activo("artistas"); ?>><a href="<?php enlace_interno("artistas/"); ?>">Artistas</a></li>
	              <li <?php esta_activo("agenda-cultural"); ?>><a href="<?php enlace_interno("agenda-cultural/"); ?>">Agenda Cultural</a></li>
	              <li <?php esta_activo("mp3"); ?>><a href="<?php enlace_interno("reproductor-mp3/"); ?>">Reproductor MP3</a></li>
   
            </ul>
            <!-- The drop down menu -->
        <ul class="nav pull-right">
          <li><a href="<?php enlace_interno("registro/"); ?>">Registrarme</a></li>
          <li class="divider-vertical"></li>
          <li class="dropdown">
            <a class="dropdown-toggle" href="#" data-toggle="dropdown">Ingresarme <strong class="caret"></strong></a>
            <div class="dropdown-menu" style="padding: 15px; padding-bottom: 0px;">
              <form action="/ingresar/" method="post" accept-charset="UTF-8">
				  <input id="usuario" style="margin-bottom: 15px;" type="text" placeholder="Correo Electrónico"name="user[username]" size="30" />
				  <input id="contrasenia" style="margin-bottom: 15px;" type="password" placeholder="Contraseña" name="user[password]" size="30" />
				  <input id="user_remember_me" style="float: left; margin-right: 10px;" type="checkbox" name="user[remember_me]" value="1" />
				  <label class="string optional" for="user_remember_me"> Recordarme</label>
				 
				  <input class="btn btn-primary" style="clear: left; width: 100%; height: 32px; font-size: 13px;" type="submit" name="commit" value="Ingresar" />
			</form>
            </div>
          </li>
        </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
