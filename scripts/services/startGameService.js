define("startGameService", [], function () {
    function doBlankSquare(id, squares) {
        var listClassOfSquares = squares[id].children[0].classList;
        if (listClassOfSquares.contains("fa-times")) {
            listClassOfSquares.remove("fa-times");
            listClassOfSquares.remove("purple-text");
        }
        else if (listClassOfSquares.contains("fa-circle-o")) {
            listClassOfSquares.remove("fa-circle-o");
            listClassOfSquares.remove("blue-text");
        }
    };

    return {
        initBoard: function (squares, gameHistory) {
            [].forEach.call(squares, function (element, id) {
                doBlankSquare(id, squares);
            });
            document.getElementById("start-button").disabled = true;
            document.getElementById("give-up-button").disabled = false;
        },
        doBlankSquare: doBlankSquare
    };
});
