window.addEventListener("load", ()=>{
    document.getElementById("loader").classList.toggle("loader2")
})



document.addEventListener("DOMContentLoaded", function (event) {
    // Nav
    let menu = document.getElementById("bars")
    let nav = document.getElementById("nav")
    let navItem = nav.getElementsByTagName("li")

    let alturaNav = navItem.length * 4.5 + "rem";
    let contenidoHeader = document.querySelectorAll(".contenido-header")
    




    let mostrarMenu = function () {
        nav.classList.toggle("show")
        if (nav.classList.contains("show")) {
            nav.style.height = alturaNav
        } else {
            nav.style.height = "0"
        }
    }

    menu.addEventListener("click", mostrarMenu)

    
    
    // BANNER
    let count = 1
    let timeBanner = 4000
    let banner1 = document.getElementById("banner1")
    let banner2 = document.getElementById("banner2")
    let banner3 = document.getElementById("banner3")
    let contenedorBanner = document.getElementById("header")
    let arrLeft = document.getElementById("imgArrLeft")
    let arrRight = document.getElementById("imgArrRight")

    window.onload = () => {
        bannerLoop()
    }

    contenedorBanner.onmouseenter = () => {
        clearInterval(startBannerLoop)
    }


    // Detiene la ejecución del banner cuando se pasa el mouse
    contenedorBanner.onmouseleave = () => {
        startBannerLoop = setInterval(() => {
            bannerLoop()
        }, timeBanner)
    }

    //comienza nuevamente la ejecucción del banner
    var startBannerLoop = setInterval(() => {
        bannerLoop()
    }, timeBanner)

    // flecha derecha
    arrLeft.onclick = () => {

        if (count === 1) {
            count = 2
        } else if (count === 2) {
            count = 3
        } else if (count === 3) {
            count = 1
        }
    }

    arrRight.onclick = () => {
        console.log("click en la flechad erecha")
        console.log(count)
        if (count === 1) {
            count = 1
        } else if (count === 2) {
            count = 2
        } else if (count === 3) {
            count = 3
        }
        console.log(count)
        bannerLoop()
    }
    arrLeft.onclick = () => {
        console.log("click en la flechad izq")
        if (count === 1) {
            count = 2
        } else if (count === 2) {
            count = 3
        } else if (count === 3) {
            count = 1
        }
        console.log(count)
        bannerLoopLeft()
        // clearInterval(startBannerLoop)
    }


    function bannerLoop() {
        if (count === 1) {
            banner2.style.opacity = "0"
            setTimeout(() => {
                contenidoHeader[2].classList.add("show-contenido")
                contenidoHeader[1].classList.remove("show-contenido")

                banner3.classList.remove("pos_central")
                banner1.classList.remove("pos_izq")
                banner2.classList.remove("pos_der")
                banner1.classList.add("pos_central")
                banner2.classList.add("pos_izq")
                banner3.classList.add("pos_der")
            }, 500)
            setTimeout(() => {
                banner2.style.opacity = "1"
            }, 500)
            count = 2
        } else if (count === 2) {
            banner3.style.opacity = "0"
            setTimeout(() => {
                contenidoHeader[1].classList.add("show-contenido")
                contenidoHeader[0].classList.remove("show-contenido")

                banner1.classList.remove("pos_central")
                banner2.classList.remove("pos_izq")
                banner3.classList.remove("pos_der")
                banner2.classList.add("pos_central")
                banner3.classList.add("pos_izq")
                banner1.classList.add("pos_der")
            }, 500)
            setTimeout(() => {
                banner3.style.opacity = "1"
            }, 500)
            count = 3
        } else if (count === 3) {
            banner1.style.opacity = "0"
            setTimeout(() => {
                contenidoHeader[0].classList.add("show-contenido")
                contenidoHeader[2].classList.remove("show-contenido")

                banner2.classList.remove("pos_central")
                banner3.classList.remove("pos_izq")
                banner1.classList.remove("pos_der")
                banner3.classList.add("pos_central")
                banner1.classList.add("pos_izq")
                banner2.classList.add("pos_der")

            }, 500)
            setTimeout(() => {
                banner1.style.opacity = "1"
            }, 500)
            count = 1
        }
    }


    function bannerLoopLeft() {
        if (count === 1) {
            banner3.style.opacity = "0"
            setTimeout(() => {
                banner2.classList.remove("pos_central")
                banner3.classList.remove("pos_izq")
                banner1.classList.remove("pos_der")
                banner1.classList.add("pos_central")
                banner2.classList.add("pos_izq")
                banner3.classList.add("pos_der")
            }, 500)
            setTimeout(() => {
                banner3.style.opacity = "1"
            }, 500)
            count = 2

        } else if (count === 2) {
            banner1.style.opacity = "0"
            setTimeout(() => {
                banner3.classList.remove("pos_central")
                banner1.classList.remove("pos_izq")
                banner2.classList.remove("pos_der")

                banner2.classList.add("pos_central")
                banner3.classList.add("pos_izq")
                banner1.classList.add("pos_der")
            }, 500)
            setTimeout(() => {
                banner1.style.opacity = "1"
            }, 500)
            count = 3
        } else if (count === 3) {
            banner2.style.opacity = "0"
            setTimeout(() => {
                banner1.classList.remove("pos_central")
                banner2.classList.remove("pos_izq")
                banner3.classList.remove("pos_der")
                banner3.classList.add("pos_central")
                banner1.classList.add("pos_izq")
                banner2.classList.add("pos_der")

            }, 500)
            setTimeout(() => {
                banner2.style.opacity = "1"
            }, 500)
            count = 1
        }
    }


    window.sr = ScrollReveal();

    sr.reveal(".title",{
        duration: 2000,
        origin:"top",
        distance: "300px"
    })

    sr.reveal(".bars",{
        duration: 2000,
        origin:"top",
        distance: "300px"
    })
    sr.reveal(".logo",{
        duration: 2000,
        origin:"left",
        distance: "300px"

    })
    sr.reveal(".content",{
        duration: 2000,
        origin:"left",
        distance: "300px"

    })
    sr.reveal(".servicio",{
        duration: 2000,
        origin:"bottom",
        distance: "300px"

    })
    sr.reveal(".p-presupuesto",{
        duration: 2000,
        origin:"bottom",
        distance: "300px"

    })
    sr.reveal(".form",{
        duration: 2000,
        origin:"left",
        distance: "300px"

    })
    sr.reveal(".img-form",{
        duration: 2000,
        origin:"right",
        distance: "300px"

    })
    

});