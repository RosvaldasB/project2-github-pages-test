<?php
    error_reporting(0);
    $fname = trim($_POST['fname']);
    $lname = trim($_POST['lname']);
    $email = trim($_POST['email']);
    $phonenmr = trim($_POST['phone_number']);
    $textarea = trim($_POST['text_message']);

    

    if(!empty($fname) && !empty($lname) && !empty($email) && !empty($phonenmr) && !empty($text_message)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $from = "$email";
            $to = "roska.butkus@gmail.com";
            $subject = "Nauja žinutė";
            $author = 'Nuo: ' . $fname . ', ' . $email;
            $message = htmlspecialchars($text_message);
            // mail($to, $subject, $author, $message, $from);
            // echo "<script>alert('Thank you, message received. We'll contact you shortly.')</script>";
        }
    }



include('database.php');