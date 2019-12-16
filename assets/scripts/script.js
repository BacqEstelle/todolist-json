
let tableau = [];
console.log (tableau);
let update = [];
console.log (update);

// function mise (){
//   update = [];
//   for(let i = 0; i< document.querySelectorAll('li').length; i++){
    
//     update.push((document.querySelectorAll('li')[i]).innerText);
//   }
// }

// mise();
// if (tableau.value == update.value){
//   console.log ("prout");
// }





function refreshJson(){
let xmlhttp = new XMLHttpRequest();
let url = "todo.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("POST", url, true);
xmlhttp.send();

function myFunction(arr) {
  let out = "";
  let outFirst= "";
  let i;

  for(i = 0; i < arr.length; i++) {
    
    // if (arr[i].position == ""){
    //   arr[i].position = i;
    // }

    if (arr[i].do == false){
      tableau.push(arr[i].tache);
    }

    if (arr[i].do == true) {
    out += '<div><label for="' + arr[i].tache + '"><input class="checkboxCustom" onclick="OnChangeResetCheckbox (this)" type="checkbox" name="todo[]" value="'+ arr[i].tache +'" id="'+ arr[i].tache +'"><span style="text-decoration: line-through;">'+ arr[i].tache +'</span></label></div>';
    }


  }
  document.getElementById("archive").innerHTML = out;
}
}
  console.log(tableau);
refreshJson();
// function 
function OnChangeCheckbox (checkbox) {
    if (checkbox.checked) {

      document.getElementById("save").style.display = "block";
      refreshJson();
           
    }else {
      document.getElementById("save").style.display = "none";
      refreshJson();
    }
}



function OnChangeResetCheckbox (checkbox) {
    if (checkbox.checked) {

      document.getElementById("reset").style.display = "block";
           
    }else {
      document.getElementById("reset").style.display = "none";

    }
}

// Drag and drop
/*
function enableDragSort(listClass) {
  const sortableLists = document.getElementsByClassName(listClass);
  Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
}

function enableDragList(list) {
  Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
}

function enableDragItem(item) {
  item.setAttribute('draggable', true)
  item.setAttribute('ondragstart', 'drag(event)');
  function drag(ev) {
    if (!ev.target.classList.contains(clickClass)) {
     return;
    }
   
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById(ev.target.id).parentElement.setAttribute('class', 'noclick');
   };
  item.ondrag = handleDrag;
  item.ondragend = handleDrop;
}

function handleDrag(item) {
  const selectedItem = item.target,
        list = selectedItem.parentNode,
        x = event.clientX,
        y = event.clientY;
  
  selectedItem.classList.add('drag-sort-active');
  let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
  
  if (list === swapItem.parentNode) {
    swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(item) {
  item.target.classList.remove('drag-sort-active');
  sessionStorage.setItem("swapItem", data);

}

(()=> {enableDragSort('drag-sort-enable')})();
*/

let addDnDHandlers = (elem) => {
  elem.addEventListener('dragstart', handleDragStart, false);
  
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
let handleDragEnd = (e) =>{
  
  this.classList.remove('over');
console.log("1");
  
}

let handleDragOver = (e) => {
  if (e.preventDefault) {
    e.preventDefault(); 
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'copy';  
  console.log("2");
  return false;

}



let dragSrcEl = null;

function handleDragStart(e) {
  
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  //e.currentTarget.style.color = 'white';
  this.classList.add('dragElem');
  console.log("3");
}




function handleDragLeave(e) {
  this.classList.remove('over');  
  console.log("4");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); 
    console.log("5");
  }
  if (dragSrcEl != this) {

    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    console.log("6");
    
  }
  this.classList.remove('over');
    console.log("7");
    console.log(document.querySelectorAll('li'));
    console.log(aJour());
    let update = [];
    for(let i = 0; i< document.querySelectorAll('li').length; i++){
      
      update.push((document.querySelectorAll('li')[i]).innerText);
  
    }
      console.log(tableau);
      console.log(update);
    for (let i = 0; i < update.length;i++)
    {
      if (update[i] == tableau[i])
      {
        console.log("p");
      }
      else{
        console.log(update[i]);
      }
    }
    return false;
}




let cols = document.querySelectorAll('#columns .column');
let draggable = document.querySelectorAll('li');
for (let i = 0; i <draggable.length; i++)
{
  draggable[i].setAttribute('draggable', 'true');
  addDnDHandlers(draggable[i]);
}

let save = () => {
  let store = localStorage.getItem("cl");
        if (store === null)
        {
            store = 0;
        }
        store++;
        localStorage.setItem("cl", store);
}

let Savedraggable = localStorage.getItem("draggableElement" );
localStorage.setItem("draggableElement" , Savedraggable);



let aJour = () => {
  let miseajour = [];
  for(let i = 0; i< document.querySelectorAll('li').length; i++){
    
    miseajour.push((document.querySelectorAll('li')[i]).innerText);
    return miseajour;
  }
  
}




