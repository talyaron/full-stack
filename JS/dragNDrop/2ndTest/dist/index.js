function dragstart_handler(ev) {
    ev.dataTransfer.dropEffect = "copy";
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    ev.target.style.background = 'coral';
}
function dragleave_handler(ev) {
    ev.target.style.background = 'lightblue';
}
function drop_handler(ev) {
    ev.preventDefault();
    console.log(ev);
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text/plain");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}
