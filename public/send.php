<?php

if(isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $header = "From: " . $email . "\r\n" . "Reply-To: " . $email . "\r\n";

    if($name != "" && $email != "" && $msg != ""){
        mail("andanamx@gmail.com", "Contacto Landing Page", $msg, $header);

        echo "ok";
    }
}
