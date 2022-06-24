<?php
require_once __DIR__ . '/database.php';

header('Content-Type: application/json');

$response = $albums;

echo json_encode($response);
