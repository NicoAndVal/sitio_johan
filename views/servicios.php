<?php

//Navegation
include "modulos/navegacion_servicios.php";

//Banner
include "secciones/banner_servicios.php";
?>
<!-- Contenido servicios -->
<div class="container-tabsy">
    <div class="tabsy">

        <input type="radio" id="tab1" name="tab" checked>
        <label class="tabButton" for="tab1">Remodelaciones</label>

        <div class="tab">
            <div class="contentTabs">

                <?php for ($i = 1; $i <= 17; $i++) : ?>

                    <img src="assets/img/galeria_servicios/REMODELACIONES/rem<?php echo $i ?>.JPG" alt="Cuadros de redes sociales">

                <?php endfor; ?>

            </div>
        </div>

        <input type="radio" id="tab2" name="tab">
        <label class="tabButton" for="tab2">Electricidad</label>
        <div class="tab">
            <div class="contentTabs">
                <?php for ($i = 1; $i <= 7; $i++) : ?>

                    <img src="assets/img/galeria_servicios/ELECTRICIDAD/ele<?php echo $i ?>.JPG" alt="Cuadros de redes sociales">

                <?php endfor; ?>

            </div>
        </div>

        <input type="radio" id="tab3" name="tab">
        <label class="tabButton" for="tab3">Albañileria</label>

        <div class="tab">
            <div class="contentTabs">
                <?php for ($i = 1; $i <= 17; $i++) : ?>

                    <img src="assets/img/galeria_servicios/ALBAÑILERIA/alba<?php echo $i ?>.JPG" alt="Cuadros de redes sociales">

                <?php endfor; ?>

            </div>
        </div>
        <input type="radio" id="tab4" name="tab">
        <label class="tabButton" for="tab4">Pintura</label>

        <div class="tab">
            <div class="contentTabs">
                <?php for ($i = 1; $i <= 7; $i++) : ?>

                    <img src="assets/img/galeria_servicios/PINTURA/pin<?php echo $i ?>.JPG" alt="Servicios de pintura">

                <?php endfor; ?>

            </div>
        </div>

        <input type="radio" id="tab5" name="tab">
        <label class="tabButton" for="tab5">Carpintería</label>
        <div class="tab">
            <div class="contentTabs">
                <?php for ($i = 1; $i <= 14; $i++) : ?>

                    <img src="assets/img/galeria_servicios/CARPINTERIA/carp<?php echo $i ?>.JPG" alt="Servicios carpinteria">

                <?php endfor; ?>

            </div>
        </div>

    </div>

</div>


<?php

include "secciones/formulario.php";

?>