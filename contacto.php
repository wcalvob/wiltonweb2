<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$to = "wilton1121@gmail.com";
$subject = "Mensaje enviado desde wiltonweb.com por $nombre";
$message = "$mensaje";
$headers = "From: $email";
 
mail($to, $subject, $message, $headers);

echo "
<script type='text/javascript'>
    $(document).ready(function() {
        setTimeout(function() {
            $('.msj-contacto').fadeOut(1500);
        },3000);
    });
</script>
<div class='msj-flotante'><p>
    $nombre, su mensaje ha sido enviado con exito.
</p></div>
";
