
// function 
function OnChangeCheckbox (checkbox) {
    if (checkbox.checked) {

      document.getElementById("save").style.display = "block";
           
    }else {
      document.getElementById("save").style.display = "none";

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
}

(()=> {enableDragSort('drag-sort-enable')})();