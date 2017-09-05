define("turnAndStatisticsService", [], function () {
    var player1 = document.getElementById("player1"),
        player2 = document.getElementById("player2"),
        player1Stats = document.getElementById("player1-stats"),
        player2Stats = document.getElementById("player2-stats"),
        starIcon = '<i class="fa fa-star gold" aria-hidden="true"></i>',
        halfStarIcon = '<i class="fa fa-star-half gold" aria-hidden="true"></i>';

    function setTurnForCirclePlayer() {
        setStyleForNothing(player2);
        player1.style.fontWeight = "bold";
        player1.style.textDecoration = "underline";
    };

    function setTurnForCrossPlayer() {
        setStyleForNothing(player1);
        player2.style.fontWeight = "bold";
        player2.style.textDecoration = "underline";
    };

    function setTurnForNoOne() {
        setStyleForNothing(player1);
        setStyleForNothing(player2);
    };

    function setStyleForNothing(player) {
        player.style.fontWeight = "";
        player.style.textDecoration = "";
    };

    function toggleTurn() {
        if (!document.getElementById("start-button").disabled) {
            console.log("Nie możesz zamienić tury gdy gra się nie rozpoczeła")
        } else if (document.getElementById("player1").style.fontWeight === "") {
            setTurnForCirclePlayer();
        } else {
            setTurnForCrossPlayer();
        }
    };

    function changeStartingPlayer() {
        if (document.getElementById("start-button").disabled) {
            alert("Nie możesz zmienić rozpoczynającego gracza w trakcjie rozgrywki!")
        }
        else {
            var tempPlayer = sessionStorage.getItem("player1"),
                tempStats = player1Stats.innerHTML;
            sessionStorage.setItem("player1", sessionStorage.getItem("player2"));
            sessionStorage.setItem("player2", tempPlayer);
            player1.innerText = sessionStorage.getItem("player1");
            player2.innerText = sessionStorage.getItem("player2");
            player1Stats.innerHTML = player2Stats.innerHTML;
            player2Stats.innerHTML = tempStats;
        }
    };

    function addWinToPlayers(gameHistory, isWinner) {
        if (gameHistory.length === 10 && !isWinner) {
            player1Stats.innerHTML += halfStarIcon;
            player2Stats.innerHTML += halfStarIcon;
        }
        else if (gameHistory.length % 2 == 0) {
            player1Stats.innerHTML += starIcon;
        }
        else {
            player2Stats.innerHTML += starIcon;
        }
    };

    function addWinToPlayerThatDontGiveUp(gameHistory) {
        (gameHistory.length % 2 != 0) ? player2Stats.innerHTML += starIcon : player1Stats.innerHTML += starIcon;
    };

    return {
        setInitialTurn: setTurnForCirclePlayer,
        setTurnForNoOne: setTurnForNoOne,
        changeStartingPlayer: changeStartingPlayer,
        toggleTurn: toggleTurn,
        addWinToPlayers: addWinToPlayers,
        addWinToPlayerThatDontGiveUp: addWinToPlayerThatDontGiveUp
    };
});