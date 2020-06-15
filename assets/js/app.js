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

    class IndexForSiblings {
        static get(el) {
            let children = el.parentNode.children
            for (var i = 0; i < children.length; i++) {
                let child = children[i]
                if (child == el) return i
            }
        }
    }


    class Slider {
        constructor(selector, movimiento = true) {
            this.move = this.move.bind(this)
            this.moveMyBottom = this.moveMyBottom.bind(this)
            this.slider = document.querySelector(selector)
            this.itemsCount = this.slider.querySelectorAll(".container > *").length
            this.contenidoHeader = this.slider.querySelectorAll(".contenido-header")
            this.movimiento = movimiento
            this.interval = null
            this.contador = 0
            this.start()
            this.buildControls()
            this.bindEvents()
            this.contenidoHeader[0].style.opacity = "1"
        }

        start() {
            if (!this.movimiento) return
            this.interval = window.setInterval(this.move, 5000)
        }

        restart() {
            if (this.interval) window.clearInterval(this.interval)
            this.start()
        }

        bindEvents() {
            this.slider.querySelectorAll(".controls li")
                .forEach(item => {
                    item.addEventListener("click", this.moveMyBottom)
                })
        }

        moveMyBottom(ev) {
            let index = IndexForSiblings.get(ev.currentTarget)
            this.contador = index
            this.moveTo(index)
            this.restart()
        }

        buildControls() {
            for (let i = 0; i < this.itemsCount; i++) {
                let control = document.createElement("li")

                if (i == 0) control.classList.add("active")

                this.slider.querySelector(".controls ul").appendChild(control)

            }
        }

        move() {
            this.contador++
            if (this.contador > this.itemsCount - 1) this.contador = 0
            this.moveTo(this.contador)
        }

        resetIndicador() {
            this.slider.querySelectorAll(".controls li.active")
                .forEach(element => element.classList.remove("active"));
        }
        moveTo(index) {
            let left = index * 100
            this.resetIndicador()
            this.slider.querySelector(".controls li:nth-child(" + (index + 1) + ")").classList.add("active")
            this.slider.querySelector(".container").style.left = "-" + left + "%"
            this.contenidoHeader[index].style.opacity = "1"
        }
    }

    (function () {
        new Slider(".slider")

    })()

    

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