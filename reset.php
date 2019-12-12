<?php

if ( $_SERVER["REQUEST_METHOD"] == "POST" AND isset($_POST["launchReset"]) AND !empty($_POST['todo']) ) {
  $json = file_get_contents('todo.json');
  $json = json_decode($json, true);
  $search = $_POST["todo"];
      for ($init = 0; $init < count($json); $init ++){
        if (in_array($json[$init]['tache'], $search)){ 
                                                    
          unset($json{$init});                
        }
      }
   
  
      $json = array_values($json); // Rebase !!!!!!!!!!!!!
      $json = json_encode($json, JSON_PRETTY_PRINT);
      file_put_contents('todo.json', $json);
      header("location: index.php");
  }


?>