
	        	<!-- sidebar -->
	        	<aside id="sidebar">
	        		
	        		<div class="block">
		        		<h4>Proximos eventos</h4>
						<ul>
							<?php
							$fechas_al_azar = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/fechas/?limit=5&nuevas=si&corto=si"));
foreach ($fechas_al_azar as $fecha){
     
$fechanombre = $fecha->titulo;
$fechacorta = $fecha->fecha_corta;
$fechaurltag = $fecha->urltag;
$fechabio = $fecha->contenido_corto;
?>
							<li class="cat-item"><a href="javascript:void(0);" rel="address:/agenda-cultural/<?php echo $fechaurltag; ?>" title="<?php echo $fechabio; ?>"><?php echo $fechacorta; ?> - <?php echo $fechanombre; ?></a></li>
							<?php
						}
						?>

						</ul>
	        		</div>
	        		
	        		<div class="block bandaazar">
		        		<h4>Artista al azar</h4>
							<?php
							$bandas_al_azar = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/artistas/?limit=1&random=si&corto=si"));
foreach ($bandas_al_azar as $banda){
     
$bandanombre = $banda->nombre;
$bandaurltag = $banda->urltag;
$bandabio = $banda->bio_corta;
?>
							<a href="javascript:void(0);" rel="address:/artistas/<?php echo $bandaurltag; ?>" title="<?php echo $bandabio; ?>">
								<h2><?php echo $bandanombre; ?></h2>
								<figure>
									<img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $bandaurltag; ?>.jpg&w=300&h=200&zc=1" alt="">
								</figure>
							<p><?php echo $bandabio; ?></p>
							</a>
							<?php
						}
						?>

	        		</div>
	        		        		<div class="block links">
	        		        			<h4>Sitios amigos</h4>
	        		        			<ul>
	        		        				<li class="cat-item"><a href="http://www.eldiarionuevodia.com.ar/">El Diario Nuevo Día</a></li>
	        		        				<li class="cat-item"><a href="http://cuencaunder.blogspot.com.ar/">Cuenca Under</a></li>
	        		        				<li class="cat-item"><a href="http://factoreme.blogspot.com.ar/">Factor Eme</a></li>
	        		        				<li class="cat-item"><a href="http://santacruzmetal-rg.blogspot.com.ar/">Santa Cruz Metal</a></li>
	        		        				<li class="cat-item"><a href="http://fmabril.net/">FM Abril</a></li>
	        		        			</ul>
	        		        		</div>
	        		        		<div class="block_publi">
                <h4>publicidad</h4>

         
                <a href="javascript:void(0)"><img src="http://www.brotecolectivo.com/images/publicidad_03.jpg" alt="Publicita en Brote Colectivo" border="0"></a>
              </div>
	        	</aside>
	        	<div class="clearfix"></div>
				<!-- ENDS sidebar -->
				
				
				<!-- pager -->

	        	<!-- ENDS pager -->
			
			</div>
			<!-- ENDS content -->
			
			<div class="clearfix"></div>
			<div class="shadow-main"></div>
			
			
		</div>
		<!-- ENDS MAIN -->