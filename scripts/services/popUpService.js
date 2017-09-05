var popUpService = function () {

    function showPopUp(gameHistory, isWinner) {
        var winnerDiv = document.getElementById("winer");
        if (gameHistory.length === 10 && !isWinner) {
            winnerDiv.innerHTML = "Remis!";
        }
        else if (gameHistory.length % 2 == 0) {
            winnerDiv.innerHTML = showMessage("player1");
        }
        else {
            winnerDiv.innerHTML = showMessage("player2");
        }
        $("#winModal").modal("show");
    };

    function showMessage(player) {
        return "Gratulacje " + document.getElementById(player).textContent + "!";
    };

    return {
        showPopUp: showPopUp
    };
}();