<footer class="footer">
    <div class="content-footer">
        <div class="logo">
            <h1><span><i class="fas fa-hammer"></i></span>SD</h1>
        </div>
        <p class="derechos">© 2020 Santa Daniela Mantenciones y Reparaciones SPA. Todos los derechos reservados.</p>
        <p class="derechos">Sitio web desarrollado por
            <a href="https://www.simplementeweb.cl" target="_blank" class="derechos">Simplemente web</a>
        </p>

    </div>

</footer>

<!-- Scroll reveal -->
<script src="https://unpkg.com/scrollreveal"></script>
<!-- Jquery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<!-- JS -->

<?php
    $validarRuta = "";

    if (isset($_GET["pagina"])) {
        if (
            $_GET["pagina"] === 'servicios'
        ) {
            echo "<script src='assets/js/servicios.js'></script>";

        } else {
            echo "<script src='assets/js/app.js'></script>";
        }
    } else {
        echo "<script src='assets/js/app.js'></script>";
    }
?>
<script src="assets/js/formulario.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168564113-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-168564113-1');
</script>

</body>

</html>