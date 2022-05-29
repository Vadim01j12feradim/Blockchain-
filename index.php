<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <form action="send.php" method="get">
        <a href="send.php">
            <img width="60px" src="images/bitcoin.png" alt="">
        </a>
    Hacer pago
    <br>
    <div class="act">
    <input type="text" name="" id="content" 
        value='<?php include("indexx.php") ?>'>
        <img width="40px" src="images/update.png" type="text" alt="" onclick="nq()" srcset="">
    <script src="analice.js"></script>
    Actualizar bloques
    </div>
    <br>
    <div id="blocks">Sin bloques</div>
    </form>
</body>
</html>