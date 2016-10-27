window.onload = function () {

function DragDrop(draggable, droppable){
    var drag = document.getElementById(draggable);
    var drop = document.getElementById(droppable);

    drag.ondragstart = function(e){
    e.dataTransfer.setData("content", e.target.id);
    e.dataTransfer.effectAllowed = "copyMove";
        
    }
    drop.ondragover = function(e){
        e.preventDefault();
         e.dataTransfer.effectAllowed = "copy";
        
    }
    drop.ondrop = function(e){
        e.dataTransfer.dropEffect = "copy";
        var id = e.dataTransfer.getData("content");
        var elemento = document.getElementById(id);
        e.target.appendChild(elemento);
        var parrafo = document.getElementById("parrafo");
        parrafo.style.display="none";
        var reproductor = document.getElementById("reproductor");
        reproductor.src = "audio/" + id + ".mp3";
        reproductor.load();
        reproductor.play();
        
    }
};
DragDrop("drag1", "drop");
DragDrop("drag2", "drop");
DragDrop("drag3", "drop");
DragDrop("drag4", "drop");
DragDrop("drag5", "drop");
DragDrop("drag6", "drop");
DragDrop("drag7", "drop");
DragDrop("drag8", "drop");
DragDrop("drag9", "drop");
DragDrop("drag10", "drop");
}