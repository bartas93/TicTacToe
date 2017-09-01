var links = document.getElementsByClassName("underConstructions");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", webUnderConstruction);
}
function webUnderConstruction() {
    alert("Podstrona w budowie!");
}