var winningSet = [7, 56, 448, 73, 146, 292, 273, 84];

function isWinner(gameHistory) {
    return checkLastGame(gameHistory);
}

function checkLastGame(gameHistory) {
    if (gameHistory.length % 2 === 0) {
        for (i in winningSet) {
            if (winningSet[i] === (winningSet[i] & gameHistory[gameHistory.length - 1])) {
                return true;
            }
        }
    } else {
        var crossBinnary = gameHistory[gameHistory.length - 1] >>> 9;
        for (i in winningSet) {
            if (winningSet[i] === (winningSet[i] & crossBinnary)) {
                return true;
            }
        }
    }
    return false;
}

