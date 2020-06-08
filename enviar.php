<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'extensiones/vendor/autoload.php';


function validarCampo($campo){
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);
    return $campo;
}



if(isset($_POST["nombre"]) && !empty($_POST["nombre"]) && 
    isset($_POST["correo"]) && !empty($_POST["correo"]) &&
    isset($_POST["asunto"]) && !empty($_POST["asunto"]) &&
    isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $nombre =  validarCampo($_POST["nombre"]);
    $correo =  validarCampo($_POST["correo"]);
    $asunto =  validarCampo($_POST["asunto"]);
    $mensaje =  validarCampo($_POST["mensaje"]);

    $message = "Nombre: " . $nombre."\n";
    $message .= "\n Correo: " . $correo . "\n";
    $message .= "\n Mensaje: " . $mensaje;

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        // $mail->isSMTP();                                            // Send using SMTP
        // $mail->Host       = 'smtp1.example.com';                    // Set the SMTP server to send through
        // $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        // $mail->Username   = 'user@example.com';                     // SMTP username
        // $mail->Password   = 'secret';                               // SMTP password
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        // $mail->Port       = 587;                                    // TCP port to connect to

        $mail->isMail();

        //Recipients
        $mail->setFrom($correo,$nombre);
        $mail->addAddress('johan.morales.vasquez@gmail.com', 'Johan');     // Add a recipient
        // $mail->addAddress('ellen@example.com');               // Name is optional
        $mail->addReplyTo($correo, $nombre);
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Mensaje de santa daniela construcciones';
        $mail->Body    = '<div style="margin:20px">' . $message . '</div>';
        $mail->AltBody = $message;

        $mail->send();
        echo "ok";
    } catch (Exception $e) {
        echo "error";
    }




        // header('content-type application/json');
       

        // ini_set('display_errors', 1);
        // error_reporting(E_ALL);
        // $from = "contacto@santadaniela.cl";
        // $to = "nico123andval@gmail.com";
        // $subject = $asunto;
     
        // $headers = "Desde:" . $from;
        // mail($to, $subject, $message, $headers);

        //  mail($to, $asunto, $message);

        // echo "ok";
}else{
    echo "error";
}

