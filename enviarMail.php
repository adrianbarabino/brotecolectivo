<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
if($_POST['email']){


    require_once "Mail.php";

    $from     = "<user@gmail.com>";
    $to       = "<user@gmail.com>";
    if($_POST['subject']){
    $subject  = $_POST['subject'];

    }else{
        
    $subject  = "Formulario recibido desde la WEB";
    }
    $body = "Formulario enviado\n"; 
    $body .= "Nombre: " . $_POST["name"] . "\n"; 
    $body .= "Email: " . $_POST["email"] . "\n"; 
    $body .= "Telefono: " . $_POST["tele"] . "\n"; 
    $body .= "Hora: " . date('Y-m-d H:i:s') . "\n"; 
    $body .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n"; 
    $body .= "Mensaje: " . $_POST["message"] . "\n"; 


    $host     = "ssl://smtp.gmail.com";
    $port     = "465";
    $username = "user";  //<> give errors
    $password = "pwd";

    $headers = array(
        'From'    => $from,
        'To'      => $to,
        'Subject' => $subject
    );
    $smtp = Mail::factory('smtp', array(
        'host'     => $host,
        'port'     => $port,
        'auth'     => true,
        'username' => $username,
        'password' => $password
    ));

    $mail = $smtp->send($to, $headers, $body);

    if (PEAR::isError($mail)) {
        echo("<p>" . $mail->getMessage() . "</p>");
    } else {
        echo("<p>Message successfully sent!</p>");
    }
}else{
    echo "Error, no se enviaron parametros";
}
?>
