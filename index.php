<!DOCTYPE html>
<html lang="fr">

  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>ToDoList</title>
     
     <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    
    <div id="id01"></div>
    <?php include("formulaire.php");?>
    <?php include("contenu.php"); ?>
    <?php include ("reset.php"); ?>
    <section>
            <form class="dropper" action="index.php" method="post">
                <h1>To do list</h1>
                  <div class="contenant">
                    <div class="a-faire">
                        <h2>A faire</h2>
                        <ul class="drag-sort-enable">
                        <div id="a-faire"></div>
                        <?php launchTodo(); ?>
                        </ul>
                        <br>
                        <button class="buttonCustom" type="submit" name="save" value="save" id="save" onclick="pushDo()">Save</button>
                    </div>
                      <div class="archive">
                          <h2>Effectué</h2>
                          <!-- <?php launchDo(); ?> -->
                          <div id="archive"></div>
                          <button class="buttonCustom" type="submit" name="launchReset" value="reset" id="reset">Reset</button>
                      </div>
                    </div>
            </form>

            <form class="add" action="index.php" method="post">
                <h2>Ajouter une tâche</h2>
                <input type="textarea" name="addToDo">
                <button class="buttonCustom" type="submit" name="add" value="add">add</button>
            </form>
    </section>
    <footer>
      <p class="footer"> Créer par Christophe & Estelle, BeCode Charleroi promotion Woods 2.15 </p>
    </footer>
  <script src="assets/scripts/script.js"></script>
  
  </body>
</html>