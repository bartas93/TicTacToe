define([], function () {
    var gameHistory = [];

    function add(id) {
        gameHistory.push(getBinary(id));
    };

    function getBinary(squareId) {
        if (gameHistory.length % 2 != 0) {
            return gameHistory[gameHistory.length - 1] + Math.pow(2, squareId);
        }
        else {
            return gameHistory[gameHistory.length - 1] + Math.pow(2, 9 + squareId);
        }
    };

    return {
        initHistory: function () {
            while (gameHistory.length > 0) {
                gameHistory.pop();
            }
            gameHistory.push(0b1000000000000000000);
        },
        getHistory: gameHistory,
        add: add,
        removeLast: function () {
            return gameHistory.pop();
        }
    };
});
