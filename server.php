<?php

header("Content-Type: application/json");
$data = file_get_contents('database.json');
echo $data;
