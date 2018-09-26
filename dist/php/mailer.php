<?php

    if (isset($_POST)) {
      $re = '@(https?://([-\w\.]+[-\w])+(:\d+)?(/([\w/_\.#-]*(\?\S+)?[^\.\s])?).*$)@m';
      // extract and sanitize form data
      $name = strip_tags(trim($_POST["name"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $message = trim($_POST["message"]);
      $message = preg_replace($re, 'URL ATTEMPT', $message);
      $url = "../index.php";

      // redirect with error status if invalid
      if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: " . $url . "?success=-1#form");
        exit;
      }

      // create the email content
      $to = "mail@charlietaylorcoder.com";
      $subject = "New Contact From: $name";
      $message = "Name: $name\nEmail: $email\n\n$message";
      $headers = "From: $to";
  
      // mail and redirect if valid
      mail($to, $subject, $message, $headers);
      header("Location: " . $url . "?success=1#form");
    }

?>