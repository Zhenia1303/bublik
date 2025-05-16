<?php
 $server = 'localhost';
 $login = 'root';
 $haslo = '';
 $database = 'logowanie';

$connection = mysqli_connect($server, $login, $haslo, $database);

if (!$connection) {
    die('errror');
}

$login = $_POST['login'];
$password = $_POST['haslo'];

$query = "SELECT `login`, `haslo` FROM `urzytkownik` WHERE `login` = '$login' AND `haslo` = '$password'";
$result = mysqli_query($connection, $query);

if ($result) {
    $user = mysqli_num_rows($result);
    if ($user == 1) {
        echo"hello $login";
    } else {
        header(header: 'Location: index.html?error=1');
    }
} else {
    header(header: 'Location: index.html?error=1');
}

?>