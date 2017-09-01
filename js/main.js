var player1, player2;

function changeDiv() {
    var form1 = document.getElementById("form1"),
        form2 = document.getElementById("form2");
    if (form1.checkValidity() && form2.checkValidity()) {
        var formDiv = document.getElementById("name-form-div"),
            gameDiv = document.getElementById("game-div");
        player1 = form1.value;
        player2 = form2.value;
        document.getElementById("player1").innerHTML = player1;
        document.getElementById("player2").innerHTML = player2;
        //TODO dwie ponizsze linie nie dzialaja - do usuniecia!
        formDiv.classList.add("animated");
        formDiv.classList.add("fadeOutLeft");
        formDiv.style.display = "none";
        gameDiv.style.display = "block";
        gameDiv.classList.add("animated");
        gameDiv.classList.add("fadeInRight");
    }
}

function wowInit() {
    new WOW().init();
}