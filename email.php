<?php
$name = $_POST['name'];
$email = $_POST['mail'];
$message = $_POST['msg'];

$to = "kaihoenshell1@gmail.com";
$subject = "Website Emails";
$body = "Name: ".$name."\nEmail: ".$email."\nMessage: ".$message;
$headers = "From: " . $email;

//send email
mail($to, $subject, $body, $headers);
?>