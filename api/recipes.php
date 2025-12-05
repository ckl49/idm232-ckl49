<?php 
    header("Content-Type: application/json");
    
    require "../db.php";

    $result = $conn->query('SELECT * FROM recipe_db');

    if(!$result) {
        echo json_encode([
            "error" => $conn->error
        ]);
        exit;
    }

    while ($row = $result -> fetch_assoc()) {
        $recipes[] = $row;
    }
    
    $conn -> close();

    echo json_encode([
        "recipes" => $recipes
    ], JSON_PRETTY_PRINT);
    
    ?>