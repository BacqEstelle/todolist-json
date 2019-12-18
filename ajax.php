<?php 
if ($_POST['json']) {
    $newJson = [];
    $newJson = $_POST['json']; //get new json from js
    // $updated = $newJson;
    if (file_put_contents('todo.json', $newJson)) {
        echo '{"status": "updated"}';
    }
}
?>