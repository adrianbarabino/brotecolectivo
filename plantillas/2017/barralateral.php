
				
				
				<!-- pager -->

	        	<!-- ENDS pager -->
			
			</div>
			<!-- ENDS content -->
			
			

	        	<!-- sidebar -->
	        	<aside id="sidebar" class="col-md-3">
	        		
	        		<div class="block">
		        		<h4>Proximos eventos</h4>
						<ul style="width:105%">
							<?php
							$fechas_al_azar = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/fechas/?limit=5&nuevas=si&corto=si&order=fechas.fecha_inicio&order2=asc"));
foreach ($fechas_al_azar as $fecha){
     
$fechanombre = $fecha->titulo;
$fechacorta = $fecha->fecha_corta;
$fechaurltag = $fecha->urltag;
$fechabio = $fecha->contenido_corto;
?>
							<li class="cat-item"><a href="javascript:void(0);" rel="address:/agenda-cultural/<?php echo $fechaurltag; ?>" class="link_brote"><?php echo $fechacorta; ?> - <?php echo $fechanombre; ?></a></li>
							<?php
						}
						?>

						</ul>
	        		</div>
	        		
	        		<div class="block bandaazar">
		        		<h4>Artista al azar <i class="icon-refresh"></i></h4>
							<?php
							$bandas_al_azar = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/artistas/?limit=1&random=si&corto=si"));
foreach ($bandas_al_azar as $banda){
     
$bandaid = $banda->id;
$bandanombre = $banda->nombre;
$bandaurltag = $banda->urltag;
$bandabio = $banda->bio_corta;
?>
							<a href="javascript:void(0);" id="bandaazar" rel="address:/artistas/<?php echo $bandaurltag; ?>" title="<?php echo $bandabio; ?>">
								<h2><?php echo $bandanombre; ?></h2>
								<figure>
									<img src="http://www.brotecolectivo.com/thumb/phpThumb.php?src=/contenido/imagenes/bandas/<?php echo $bandaurltag; ?>.jpg&w=300&h=200&zc=1" alt="">
								</figure>
								<div class="info-artista">
									
								<?php echo $bandabio; ?>
								</div>
								</a>
							<?php
														$tiene_canciones = json_decode(leer_contenido_completo("http://api.brotecolectivo.com/canciones/?limit=1&banda=".$bandaid));
														if($tiene_canciones){ 
															?>
															<span id="escuchar-banda" style="margin-top: -4.7em;margin-left: 0.5em;color:white;" class="btn btn-small btn-success azarfinal" href="javascript:void(0)" data-urltag="<?php echo $bandaurltag; ?>">
  <i class="icon-play-sign"></i> Escuchar</span>
  <?php
														}else{ 
?>
<a id="info-banda" style="margin-top: -4.7em;margin-left: 0.5em;color:white" class="btn btn-small btn-info link_brote azarfinal" rel="address:/artistas/<?php echo $bandaurltag; ?>" >
  <i class="icon-info-sign"></i> Ver más</a>
<?php
														};


							?>
							
							<?php
						}
						?>

	        		</div>
	        		        		<div class="block links">
	        		        			<h4>Sitios amigos</h4>
	        		        			<ul>
	        		        				<li class="cat-item"><a target="_blank" href="http://www.eldiarionuevodia.com.ar/">El Diario Nuevo Día</a></li>
	        		        				<li class="cat-item"><a target="_blank" href="http://cuencaunder.blogspot.com.ar/">Cuenca Under</a></li>
	        		        				<li class="cat-item"><a target="_blank" href="http://factoreme.blogspot.com.ar/">Factor Eme</a></li>
	        		        				<li class="cat-item"><a target="_blank" href="http://santacruzmetal-rg.blogspot.com.ar/">Santa Cruz Metal</a></li>
	        		        				<li class="cat-item"><a target="_blank" href="http://fmabril.net/">FM Abril</a></li>
	        		        			</ul>
	        		        		</div>

	        		        		<div class="block publi">
                <h4>Publicidad</h4>

         
                <a href="javascript:void(0)"><img src="http://www.brotecolectivo.com/images/publicidad_03.jpg" alt="Publicita en Brote Colectivo" border="0"></a>
              </div>
		<div class="block publi">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Sidebar -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9358545241981588"
     data-ad-slot="8421715554"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
	        	</aside>

			
		</div>
		<!-- ENDS MAIN -->