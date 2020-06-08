$(document).ready(function () {
    $(".formulario-contacto").on("submit",function(e){

        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function (response) {
                console.log(response)
                if(response =="ok"){
                    $("#alerta").removeClass("d-none").removeClass("alert-danger").addClass("alert-sucess")
                    $(".respuesta").html("Hemos recibido tu respuesta, te contactaremos a la brevedad")
                    $(".formulario-contacto").trigger("reset");
                    setTimeout(()=>{
                        $("#alerta").addClass("d-none");
                    },3000)
                }else{
                    $("#alerta").removeClass("d-none").removeClass("alert-sucess").addClass("alert-danger")
                    $(".respuesta").html("Hubo un error, por favor intentar nuevamente")
                    setTimeout(() => {
                        $("#alerta").addClass("d-none");
                    }, 3000)
                }

            },
            error: function(response){
                $("#alerta").removeClass("d-none").removeClass("alert-sucess").addClass("alert-danger")
                $(".respuesta").html("Hubo un error, por favor intentar nuevamente")
                setTimeout(() => {
                    $("#alerta").addClass("d-none");
                }, 3000)
            }
        });

        e.preventDefault()

    })

});