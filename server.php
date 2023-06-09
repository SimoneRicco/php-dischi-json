<?php

header("Content-Type: application/json");
// $data = file_get_contents('database.json');
$list = '[
    {
        "immagine": "img",
        "titolo": "tt",
        "cantante": "cc",
        "anno": 1234
    },
    {
        "immagine": "img",
        "titolo": "tt",
        "cantante": "cc",
        "anno": 1234
    },
    {
        "immagine": "img",
        "titolo": "tt",
        "cantante": "cc",
        "anno": 1234
    }
]';
$data = json_encode($list);
echo $data;
