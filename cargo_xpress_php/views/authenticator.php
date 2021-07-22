<?php
//session_start();
$name = $_POST['username'];
$pass = $_POST['pass'];
echo "success " . $name . " lol " . $pass;

if ($name === "admin" && $pass === "admin.1") {
    header('Location: info_upload.php');
}

?>

