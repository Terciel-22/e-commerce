<?php

    define("ENGINE","mysql");
    define("HOST","localhost");
    define("DBNAME","ecommerce");
    define("PORT","3306");
    define("CHARSET","utf8mb4");
    define("USERNAME","root");
    define("PASSWORD","");
    define("OPTIONS", array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_EMULATE_PREPARES   => false));

    require_once("connection.php");

    $dns = sprintf("%s:localhost=%s;dbname=%s;port=%s;charset=%s",ENGINE,HOST,DBNAME,PORT,CHARSET);
    $conn = new Connection($dns,USERNAME,PASSWORD,OPTIONS);
?>