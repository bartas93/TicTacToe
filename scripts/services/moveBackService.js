var moveBackService = function () {

    var base = 0b1000000000000000000;
    function moveBack(gameHistory) {
        var id = moveBackByState(gameHistory);
        if (isGameWithoutMoves(gameHistory)) {
            document.getElementById("move-back-button").disabled = true;
        }
        return id;
    };

    function isGameAfterOneMove(gameHistory) {
        return (gameHistory.length === 2);
    }

    function isGameWithoutMoves(gameHistory) {
        return (gameHistory.length === 1);
    }

    function moveBackButtonUnable(gameHistory) {
        if (isGameAfterOneMove(gameHistory)) {
            document.getElementById("move-back-button").disabled = false;
        }
    }

    function moveBackByState(gameHistory) {
        var lastMove = getLastMove(gameHistory).toString(2);
        for (var i = 1; i < lastMove.length; i++) {
            if (lastMove.charAt(i) === "1") {
                var id;
                if (i <= 9) {
                    return (id = 9 - i);
                }
                else {
                    return (id = 18 - i);
                }
            }
        }
    }

    function getLastMove(gameHistory) {
        var lastBoardState = gameHistory.pop();
        var xor = lastBoardState ^ gameHistory[gameHistory.length - 1];
        return (xor | base);
    }

    return {
        moveBack: moveBack,
        moveBackButtonUnable: moveBackButtonUnable
    };
}();