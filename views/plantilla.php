<?php
    include "modulos/header.php";

    // Rutas

    $validarRuta = "";

    if (isset($_GET["pagina"])) {
        if (
            $_GET["pagina"] === 'servicios'
        ) {
            include  $_GET["pagina"] . ".php";
        } else {
            include "home.php";
        }
    } else {
        include "home.php";
    }

include "modulos/footer.php";


