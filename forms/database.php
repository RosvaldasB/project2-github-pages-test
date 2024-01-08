<?php
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", '');
define("DB_NAME", "travellodb");

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
if($mysqli->connect_error) {
    echo "We are very sorry, there was an issue with our website.\n";
    echo 'Error: ' . $mysqli->connect_error . '\n';
    exit();
}

error_reporting(0);

if (isset($_POST['submit'])) 
{
    mysqli_query($mysqli, "INSERT INTO contact (fname, lname, email, phone_number, text_message) VALUES('$_POST[fname]', '$_POST[lname]', '$_POST[email]', '$_POST[phone_number]', '$_POST[text_message]')");
header("Location: $current_url");
}