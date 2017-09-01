var startButton, giveUpButton, moveBackButton, reversePlayersButton, gameHistory = [], squares, boardState, base;

squares = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8")
];
startButton = document.getElementById("start-button");
giveUpButton = document.getElementById("give-up-button");
moveBackButton = document.getElementById("move-back-button");
reversePlayersButton = document.getElementById("reverse-players-button");
base = 0b1000000000000000000;

//LISTENERS
startButton.addEventListener("click", startGame);
reversePlayersButton.addEventListener("click", changeStartingPlayer);
giveUpButton.addEventListener("click", giveUp);
moveBackButton.addEventListener("click", moveBack);
//TODO nie dziala to w petli - tylko ostatni element dziala
squares[0].addEventListener("click", function () { makeMove(0); }, false);
squares[1].addEventListener("click", function () { makeMove(1); }, false);
squares[2].addEventListener("click", function () { makeMove(2); }, false);
squares[3].addEventListener("click", function () { makeMove(3); }, false);
squares[4].addEventListener("click", function () { makeMove(4); }, false);
squares[5].addEventListener("click", function () { makeMove(5); }, false);
squares[6].addEventListener("click", function () { makeMove(6); }, false);
squares[7].addEventListener("click", function () { makeMove(7); }, false);
squares[8].addEventListener("click", function () { makeMove(8); }, false);
//functions

function moveBack() {
    moveBackByState();
    if (gameHistory.length === 1) {
        moveBackButton.disabled = true;
    }
    setTurnView();
}

function setTurnView() {
    if (gameHistory.length % 2 != 0) {
        setTurnViewForCirclePlayer();
    }
    else {
        setTurnViewForCrossPlayer();
    }
}

function moveBackByState() {
    var lastMove = getLastMove().toString(2);
    for (var i = 1; i < lastMove.length; i++) {
        if (lastMove.charAt(i) === "1") {
            var id;
            if (i <= 9) {
                id = 9 - i;
            }
            else {
                id = 18 - i;
            }
            doBlankSquare(id);

            break;
        }
    }
}

function getLastMove() {
    var lastBoardState = gameHistory.pop();
    var xor = lastBoardState ^ gameHistory[gameHistory.length - 1];
    return (xor | base);
}

function makeMove(id) {
    if (squareIsBlank(id) && startButton.disabled) {
        if (gameHistory.length % 2 != 0) {
            squares[id].children[0].classList.add("blue-text");
            squares[id].children[0].classList.add("fa-circle-o");
            setTurnViewForCrossPlayer();
            addToGameHistoryMove(id, "circle");
        }
        else {
            squares[id].children[0].classList.add("purple-text");
            squares[id].children[0].classList.add("fa-times");
            setTurnViewForCirclePlayer();
            addToGameHistoryMove(id, "cross");
        }
    }
    else {
        alert("Nie możesz postawić ruchu!")
    }
}

function giveUp() {
    if (confirm("Czy na pewno chcesz się poddać?")) {
        endGame();
    }
}

function endGame() {
    setTurnViewForNoOne();
    startButton.disabled = false;
    giveUpButton.disabled = true;
    moveBackButton.disabled = true;
}

function addToGameHistoryMove(squareId, movedPlayer) {
    var newBinary;
    if (movedPlayer === "circle") {
        newBinary = getNewBinaryForCircle(squareId);
    }
    else {
        newBinary = getNewBinaryForCross(squareId);
    }
    gameHistory.push(newBinary);
    moveBackButtonUnable();
    var isWinnerBool = isWinner(gameHistory);
    if (isWinnerBool || gameHistory.length === 10) {
        endGame();
        showPopUpAndAddStats(isWinnerBool);
    }
}

function moveBackButtonUnable() {
    if (gameHistory.length === 2) {
        moveBackButton.disabled = false;
    }
}
function showPopUpAndAddStats(isWinnerBool) {
    if (gameHistory.length === 10 && !isWinnerBool) {
        document.getElementById("winer").innerHTML = "Remis!";
        document.getElementById("player1-stats").innerHTML += '<i class="fa fa-star-half gold" aria-hidden="true"></i>';
        document.getElementById("player2-stats").innerHTML += '<i class="fa fa-star-half gold" aria-hidden="true"></i>';
    }
    else if (gameHistory.length % 2 == 0) {
        document.getElementById("winer").innerHTML = "Gratulacje " + document.getElementById("player1").textContent + "!";
        document.getElementById("player1-stats").innerHTML += '<i class="fa fa-star gold" aria-hidden="true"></i>';
    }
    else {
        document.getElementById("winer").innerHTML = "Gratulacje " + document.getElementById("player2").textContent + "!";
        document.getElementById("player2-stats").innerHTML += '<i class="fa fa-star gold" aria-hidden="true"></i>';
    }
    $("#winModal").modal("show");
}

function getNewBinaryForCircle(squareId) {
    var newBinary = gameHistory[gameHistory.length - 1] + Math.pow(2, squareId);
    return newBinary;
}

function getNewBinaryForCross(squareId) {
    var newBinary = gameHistory[gameHistory.length - 1] + Math.pow(2, 9 + squareId);
    return newBinary;
}

function squareIsBlank(id) {
    if (squares[id].children[0].classList.contains("fa-times") || squares[id].children[0].classList.contains("fa-circle-o")) {
        return false;
    }
    return true;
}

function startGame() {
    for (id in squares) {
        doBlankSquare(id);
    }
    startButton.disabled = true;
    giveUpButton.disabled = false;
    setTurnViewForCirclePlayer();
    gameHistory = [];
    gameHistory.push(0b1000000000000000000);
}

function setTurnViewForCirclePlayer() {
    document.getElementById("player2").style.fontWeight = "";
    document.getElementById("player2").style.textDecoration = "";
    document.getElementById("player1").style.fontWeight = "bold";
    document.getElementById("player1").style.textDecoration = "underline";
}

function setTurnViewForCrossPlayer() {
    document.getElementById("player1").style.fontWeight = "";
    document.getElementById("player1").style.textDecoration = "";
    document.getElementById("player2").style.fontWeight = "bold";
    document.getElementById("player2").style.textDecoration = "underline";
}

function setTurnViewForNoOne() {
    document.getElementById("player2").style.fontWeight = "";
    document.getElementById("player2").style.textDecoration = "";
    document.getElementById("player1").style.fontWeight = "";
    document.getElementById("player1").style.textDecoration = "";
}

function doBlankSquare(id) {
    //TODO usunać to 
    /*     squares[id].children[0].classList.add("animated");
        squares[id].children[0].classList.add("flipOutX");
        squares[id].children[0].classList.remove("flipOutX"); */
    if (squares[id].children[0].classList.contains("fa-times")) {

        squares[id].children[0].classList.remove("fa-times");
        squares[id].children[0].classList.remove("purple-text");
    }
    else if (squares[id].children[0].classList.contains("fa-circle-o")) {
        //TODO dodać tutaj class animated i flipXOut?
        squares[id].children[0].classList.remove("fa-circle-o");
        squares[id].children[0].classList.remove("blue-text");
    }
}

function changeStartingPlayer() {
    if (startButton.disabled) {
        alert("Nie możesz zmienić rozpoczynającego gracza w trakcjie rozgrywki!")
    }
    else {
        var player1 = document.getElementById("player1");
        var player1Stats = document.getElementById("player1-stats");
        var player2 = document.getElementById("player2");
        var player2Stats = document.getElementById("player2-stats");
        var temp = player1.textContent;
        var tempStats = player1Stats.innerHTML;
        player1.innerText = player2.textContent;
        player1Stats.innerHTML = player2Stats.innerHTML;
        player2.innerText = temp;
        player2Stats.innerHTML = tempStats;
    }
}
