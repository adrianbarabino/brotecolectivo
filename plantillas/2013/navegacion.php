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
					<li <?php esta_activo("inicio"); ?>><a id="nav_inicio" rel="address:/inicio" href="<?php enlace_interno("inicio/"); ?>">inicio</a>
						<ul>
							<li <?php esta_activo("publicidad"); ?>><a id="nav_publicidad" rel="address:/publicidad" href="<?php enlace_interno("publicidad/"); ?>">Publicidad</a></li>
							<li <?php esta_activo("contacto"); ?>><a id="nav_contacto" rel="address:/contacto" href="<?php enlace_interno("contacto/"); ?>">Contacto</a></li>
							<li class="divider"></li>
							<li <?php esta_activo("prensa"); ?>><a id="nav_prensa" rel="address:/prensa" href="<?php enlace_interno("prensa/"); ?>">Prensa</a></li>
							<li <?php esta_activo("terminos"); ?>><a id="nav_terminos" rel="address:/terminos" href="<?php enlace_interno("terminos/"); ?>">Terminos y Condiciones</a></li>
						</ul>
					</li>
					<li <?php esta_activo("noticias"); ?>><a id="nav_noticias" rel="address:/noticias" href="<?php enlace_interno("noticias/"); ?>">noticias</a></li>
					<li <?php esta_activo("artistas"); ?>><a id="nav_artistas" rel="address:/artistas" href="<?php enlace_interno("artistas/"); ?>">artistas</a>
					</li>
					<li <?php esta_activo("agenda-cultural"); ?>><a id="nav_agenda-cultural" rel="address:/agenda-cultural" href="<?php enlace_interno("agenda-cultural/"); ?>">agenda cultural</a></li>
				</ul>
				<div id="nav-open"><a href="#">Menu</a></div>
			</div>
		</div>
		<!-- ENDS mobile-nav -->
			
		<header>
			
				
			<div class="wrapper">
					
				<a href="index.html" id="logo"><img  src="/img/logo.png" alt="Tandem"></a>
				
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
					<li><a href="http://www.facebook.com"  title="Become a fan"><img src="/img/social/facebook_32.png"  alt="Facebook" /></a></li>
					<li><a href="http://www.twitter.com" title="Follow my tweets"><img src="/img/social/twitter_32.png"  alt="Facebook" /></a></li>
					<li><a href="http://www.google.com"  title="Add to the circle"><img src="/img/social/google_plus_32.png" alt="Facebook" /></a></li>
				</ul>
			</div>
			<!-- ENDS social -->


