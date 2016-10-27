window.onload = function () {

function DragDrop(drag, drop){
	var drag = document.getElementById(drag);
	var drop = document.getElementById(drop);
	drag.ondragstart = function(e){
	e.dataTransfer.setData("content", e.target.id);
	}
	drop.ondragover = function(e){
		e.preventDefault();
	}
	drop.ondrop = function(e){
		var id = e.dataTransfer.getData("content");
		e.target.appendChild(document.getElementById(id));
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
}