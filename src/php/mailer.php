<?php

    if (isset($_POST)) {
        $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
        $subject = $subject = "New Contact - Dev Portfolio: From: $name";;
        $email = htmlspecialchars(stripslashes(trim($_POST['email'])));
        $message = htmlspecialchars(stripslashes(trim($_POST['message'])));
        $url = "../index.php";

        if (!preg_match("/^[A-Za-z .'-]+$/", $name)) {
            $name_error = true;
        }

        if (!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)) {
            $email_error = true;
        }

        if (strlen($message) === 0) {
            $message_error = true;
        }
    }

    if (!isset($name_error) && !isset($email_error) && !isset($message_error)) {
        $to = "mail@charlietaylorcoder.com"; 
        $body = " Name: $name\n E-mail: $email\n Message:\n $message";

        if (mail($to, $subject, $body)) {
            header("Location: " . $url . "?success=1#form");
        } else {
            header("Location: " . $url . "?success=-1#form");
        }
    } else {
        header("Location: " . $url . "?success=-1#form");
    }

?>