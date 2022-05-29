<?php
$fp = fopen("data.txt", "r");
while(!feof($fp)) {
$linea = fgets($fp);
echo $linea;
}
fclose($fp);
?>