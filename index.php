<!DOCTYPE html>
<html lang="fr">

  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>ToDoList</title>
     <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php include("formulaire.php");?>
    <?php include("contenu.php"); ?>
    <section>
            <form class="dropper" action="index.php" method="post">
                <h1>To do list</h1>
                
                <h2>A faire</h2>
                <?php launchTodo(); ?>
                <br>
                <input class="bouton" type="submit" name="save" value="save">
                <div class="archive">
                <h2>Effectué</h2>
                <?php launchDo(); ?>
                </div>

            </form>

            <form class="add" action="index.php" method="post">
                <h2>Ajouter une tâche</h2>
                <input type="textarea" name="addToDo">
                <button class="bouton" type="submit" name="add" value="add">add</button>
            </form>
    </section>
    <script>
      draggableElement.addEventListener('dragstart', function(e) {
        e.dataTransfert.setData('text/plain','')
        
      })
    </script>
  </body>
</html>