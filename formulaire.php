<?php
function Sanatize($sanatize) {
  $sanatize = filter_var($sanatize, FILTER_SANITIZE_STRING); // filter_var — Filtre une variable avec un filtre spécifique -- FILTER_SANITIZE_STRING Supprime tous les tags HTML.
  $sanatize = trim($sanatize); // trim — Supprime les espaces (ou d'autres caractères) en début et fin de chaîne.
  $sanatize = stripslashes($sanatize); // stripslashes — Supprime les antislashs d'une chaîne.
  // $sanatize = htmlspecialchars($sanatize); //htmlspecialchars — Convertit les caractères spéciaux en entités HTML.
  return $sanatize;
}
function launchTodo() {
  $json = file_get_contents('todo.json');
  $json = json_decode($json, true);
  foreach ($json as $key => $value) {
    if ($json[$key]["do"] == false) {
    echo '<div id="draggable"><label for="' . $value['tache'] . '"><input type="checkbox" name="todo[]" value="' . $value['tache'] . '" id="' . $value['tache'] . '">' . $value['tache'] . '</label></div>';
    }
  }
}
if ( $_SERVER["REQUEST_METHOD"] == "POST" AND isset($_POST["add"]) ) { 
  if (empty($_POST["addToDo"])) { 
  			echo "* Veuillez entrer une tâche.";
  }
  else {
  $sanatizeActive = Sanatize($_POST["addToDo"]); 
  $todo = array();
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