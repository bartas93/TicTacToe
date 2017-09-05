var indexController = function () {
    "use strict";

    var squares = document.querySelectorAll("td"),
        init = function () {
            wowInit();
            initListeners();
        }();

    function wowInit() {
        new WOW().init();
    };

    function initListeners() {
        document.getElementById("name-form-div-button").addEventListener("click", changeNameDivToGameDiv);
        document.getElementById("start-button").addEventListener("click", startGame);
        document.getElementById("give-up-button").addEventListener("click", giveUp);
        document.getElementById("move-back-button").addEventListener("click", moveBack);
        document.getElementById("reverse-players-button").addEventListener("click", changeStartingPlayer);
        [].forEach.call(squares, function (element, id, squares) {
            element.addEventListener("click", function () {
                makeMove(id, squares);
            });
        });
        [].forEach.call(document.querySelectorAll("a[href='#']"), function (link) {
            link.addEventListener("click", function () {
                alert("Strona w budowie!");
            });
        });
    };

    function changeNameDivToGameDiv() {
        if (validationService.isFormValid()) {
            changeHtmlService.changeNameDivToGameDiv();
        } else {
            alert("Źle wypełniony formularz");
        };
    };

    function startGame() {
        startGameService.initBoard(squares);
        turnAndStatisticsService.setInitialTurn();
        historyService.initHistory();
    };

    function changeStartingPlayer() {
        turnAndStatisticsService.changeStartingPlayer();
    }

    function giveUp() {
        if (confirm("Czy na pewno chcesz się poddać?")) {
            endGameService.endGame();
            turnAndStatisticsService.addWinToPlayerThatDontGiveUp(historyService.getHistory);
            turnAndStatisticsService.setTurnForNoOne();
        };
    };

    function moveBack() {
        var gameHistory = historyService.getHistory,
            id = moveBackService.moveBack(gameHistory);
        startGameService.doBlankSquare(id, squares);
        turnAndStatisticsService.toggleTurn();
    };

    function makeMove(id, squares) {
        if (moveService.isMoveValid(id, squares)) {
            moveService.makeMove(id, squares, historyService.getHistory);
            turnAndStatisticsService.toggleTurn();
            historyService.add(id);
            moveBackService.moveBackButtonUnable(historyService.getHistory);
            validateGameOver();
        }
        else {
            alert("Nie możesz wykonać ruchu!")
        };
    };

    function validateGameOver() {
        var gameHistory = historyService.getHistory;
        var isWinner = checkWinnerService.isWinner(gameHistory)
        if (isWinner || gameHistory.length === 10) {
            endGameService.endGame();
            turnAndStatisticsService.setTurnForNoOne();
            turnAndStatisticsService.addWinToPlayers(gameHistory, isWinner);
            popUpService.showPopUp(gameHistory, isWinner);
        };
    };
}();