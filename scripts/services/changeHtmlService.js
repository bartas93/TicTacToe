define([], function () {
    function bootstrapFadeOutLeft(element) {
        element.classList.add("animated");
        element.classList.add("fadeOutLeft");
        element.style.display = "none";
    };

    function bootstrapFadeInRight(element) {
        element.style.display = "block";
        element.classList.add("animated");
        element.classList.add("fadeInRight");
    };

    return {
        changeNameDivToGameDiv: function () {
            sessionStorage.setItem('player1', document.getElementById("form1").value);
            sessionStorage.setItem('player2', document.getElementById("form2").value);
            document.getElementById("player1").innerHTML = sessionStorage.getItem('player1');
            document.getElementById("player2").innerHTML = sessionStorage.getItem('player2');
            bootstrapFadeOutLeft(document.getElementById("name-form-div"));
            bootstrapFadeInRight(document.getElementById("game-div"));
        }
    };
});
