window.addEventListener("load", () => {
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




});