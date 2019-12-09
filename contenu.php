 
<?php

function launchDo() {
  $json = file_get_contents('todo.json');
  $json = json_decode($json, true);
  foreach ($json as $key => $value) {
    if ($json[$key]["do"] == true) {
      echo '<div id="draggable"><label for="' . $value['tache'] . '"><input type="checkbox" name="todo[]" value="' . $value['tache'] . '" id="' . $value['tache'] . '"><span style="text-decoration: line-through;">' . $value['tache'] . '</span></label></div>';
    }
  }
}


if ( $_SERVER["REQUEST_METHOD"] == "POST" AND isset($_POST["save"]) AND !empty($_POST['todo']) ) {
$json = file_get_contents('todo.json');
$json = json_decode($json, true);
$search = $_POST["todo"];
    for ($init = 0; $init < count($json); $init ++){
        if (in_array($json[$init]['tache'], $search)){ 
                                                    
          $json[$init]['do'] = true;                
        }
    }
    $json = json_encode($json, JSON_PRETTY_PRINT);
    file_put_contents('todo.json', $json);
    header("location: index.php");
  }
?>