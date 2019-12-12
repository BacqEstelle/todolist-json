<?php
function Sanatize($sanatize) {
  $sanatize = filter_var($sanatize, FILTER_SANITIZE_STRING);
  $sanatize = trim($sanatize); 
  $sanatize = stripslashes($sanatize); 

  return $sanatize;
}
function launchTodo() {
  $json = file_get_contents('todo.json');
  $json = json_decode($json, true);
  foreach ($json as $key => $value) {
    if ($json[$key]["do"] == false) {
    echo '<div class="collection-item"><label for="' . $value['tache'] . '"><input onclick="OnChangeCheckbox (this)" type="checkbox" name="todo[]" value="' . $value['tache'] . '" id="test">' . $value['tache'] . '</label></div>';
    }
  }
}
if ( $_SERVER["REQUEST_METHOD"] == "POST" AND isset($_POST["add"]) ) { 
  if (empty($_POST["addToDo"])) { 
  			echo "* Veuillez entrer une tâche.";
  }
  else {
  $sanatizeActive = Sanatize($_POST["addToDo"]); 
  $todo = array ();
  $todo["tache"] = $sanatizeActive;
  $todo["do"] = false;
  $json = file_get_contents('todo.json');
  $json = json_decode($json, true);
  $json[] = $todo;
  $json = json_encode($json, JSON_PRETTY_PRINT);
  file_put_contents('todo.json', $json);
  }
}
?>