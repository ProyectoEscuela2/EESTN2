<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST['asunto']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Correo Inválido");
    }

    $to = "gdadtecnica2@gmail.com";
    $headers = "De: $email\r\n";
    $headers .= "Responder a: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $contenido = "Recibiste un nuevo mensaje de:\n\n";
    $contenido .= "Name: $name\n";
    $contenido .= "Correo: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Send the email
    if (mail($to, $asunto, $contenido, $headers)) {
        echo "Correo Envíado Con Éxito";
    } else {
        echo "La acción Falló. Intente Nuevamente";
    }
} else {
    echo "Solicitud Inválida";
}
?>