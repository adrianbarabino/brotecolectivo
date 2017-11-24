<?php

function esta_activo($elemento){

	global $pagina;



// verificamos que el elemento es la pagina actual ,si no lo es que no devuelva nada.

	

	if($pagina == $elemento){

		echo 'class="current-menu-item"'; 

}else{

	return false ;





}



}

?>

		<!-- mobile-nav -->
		<div id="mobile-nav-holder">
			<div class="wrapper">
				<ul id="mobile-nav">
					<li <?php esta_activo("inicio"); ?>><a id="nav_inicio" class="link_brote" rel="address:/inicio" href="<?php enlace_interno("inicio/"); ?>">inicio</a>
						<ul>
							<li <?php esta_activo("publicidad"); ?>><a id="nav_publicidad" class="link_brote" rel="address:/publicidad" href="<?php enlace_interno("publicidad/"); ?>">Publicidad</a></li>
							<li <?php esta_activo("contacto"); ?>><a id="nav_contacto" class="link_brote" rel="address:/contacto" href="<?php enlace_interno("contacto/"); ?>">Contacto</a></li>
							<li class="divider"></li>
							<li <?php esta_activo("prensa"); ?>><a id="nav_prensa" class="link_brote" rel="address:/prensa" href="<?php enlace_interno("prensa/"); ?>">Prensa</a></li>
							<li <?php esta_activo("terminos"); ?>><a id="nav_terminos" class="link_brote" rel="address:/terminos" href="<?php enlace_interno("terminos/"); ?>">Terminos y Condiciones</a></li>
						</ul>
					</li>
					<li <?php esta_activo("noticias"); ?>><a id="nav_noticias" class="link_brote" rel="address:/noticias" href="<?php enlace_interno("noticias/"); ?>">noticias</a></li>
					<li <?php esta_activo("artistas"); ?>><a id="nav_artistas" class="link_brote" rel="address:/artistas" href="<?php enlace_interno("artistas/"); ?>">artistas</a>
					</li>
					<li <?php esta_activo("agenda-cultural"); ?>><a id="nav_agenda-cultural" class="link_brote" rel="address:/agenda-cultural" href="<?php enlace_interno("agenda-cultural/"); ?>">agenda cultural</a></li>
				</ul>
				<div id="nav-open"><a href="#">Menu</a></div>
			</div>
		</div>
		<!-- ENDS mobile-nav -->
			
		<header>
			
				
			<div class="wrapper">
					
				<a href="javascript:void(0)" rel="address:/inicio" id="logo"><img  src="/img/logo.png" alt="Brote Colectivo"></a>
				<!--  <a href="javascript:void(0)" rel="address:/noticia/primer-aniversario" id="pastel"><img  src="/img/pastel.png" alt="1 Año de Brote Colectivo"></a> -->
			                                 <!-- <a href="https://www.facebook.com/RockSinVueltasRadio/" target="_blank"  id="rock"><img  src="/img/logo-color.png" /> </a> -->	
				<nav>
					<ul id="nav" class="sf-menu">
						<li <?php esta_activo("inicio"); ?>><a id="nav_inicio" rel="address:/inicio" href="<?php enlace_interno("inicio/"); ?>">inicio<span class="subheader"> del sitio</span></a>
							<ul>
								<li <?php esta_activo("publicidad"); ?>><a id="nav_publicidad" rel="address:/publicidad" href="<?php enlace_interno("publicidad/"); ?>">Publicidad</a></li>
								<li <?php esta_activo("contacto"); ?>><a id="nav_contacto" rel="address:/contacto" href="<?php enlace_interno("contacto/"); ?>">Contacto</a></li>
	                 			<li class="divider"></li>
								<li <?php esta_activo("prensa"); ?>><a id="nav_prensa" rel="address:/prensa" href="<?php enlace_interno("prensa/"); ?>">Prensa</a></li>
								<li <?php esta_activo("terminos"); ?>><a id="nav_terminos" rel="address:/terminos" href="<?php enlace_interno("terminos/"); ?>">Terminos y Condiciones</a></li>
							</ul>
						</li>
						<li <?php esta_activo("noticias"); ?>><a id="nav_noticias" rel="address:/noticias" href="<?php enlace_interno("noticias/"); ?>">noticias<span class="subheader"> culturales</span></a></li>
						<li <?php esta_activo("artistas"); ?>><a id="nav_artistas" rel="address:/artistas" href="<?php enlace_interno("artistas/"); ?>">artistas<span class="subheader"> de la provincia</span></a>
						</li>
						<li <?php esta_activo("agenda-cultural"); ?>><a id="nav_agenda-cultural" rel="address:/agenda-cultural" href="<?php enlace_interno("agenda-cultural/"); ?>">agenda cultural<span class="subheader"> eventos</span></a></li>
					</ul>
				</nav>
				
				<div class="clearfix"></div>
				
			</div>
		</header>
	
	
	
	
		<!-- MAIN -->
		<div id="main">
				
			<!-- social -->
			<div id="social-bar">
				<ul>
					<li><a href="https://www.facebook.com/brotecolectivo"  target="_blank" title="Brote Colectivo en Facebook"><img src="/img/social/facebook_32.png"  alt="Facebook" /></a></li>
					<li><a href="https://www.twitter.com/brotecolectivo" target="_blank" title="Seguinos!"><img src="/img/social/twitter_32.png"  alt="Facebook" /></a></li>
					<li><a href="https://plus.google.com/117825299837047703581/posts"  target="_blank" title="Agreganos a tus círculos"><img src="/img/social/google_plus_32.png" alt="Facebook" /></a></li>
				</ul>
			</div>
			<!-- ENDS social -->


