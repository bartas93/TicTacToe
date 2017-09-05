var moveService = function () {
    function isSquareBlank(id, squares) {
        return !(squares[id].children[0].classList.contains("fa-times") || squares[id].children[0].classList.contains("fa-circle-o"))
    }

    function markCircleMove(id, squares) {
        squares[id].children[0].classList.add("blue-text");
        squares[id].children[0].classList.add("fa-circle-o");
    }

    function markCrossMove(id, squares) {
        squares[id].children[0].classList.add("purple-text");
        squares[id].children[0].classList.add("fa-times");
    }


    return {
        isMoveValid: function (id, squares) {
            return (isSquareBlank(id, squares) && document.getElementById("start-button").disabled);
        },
        makeMove: function (id, squares, gameHistory) {
            (gameHistory.length % 2 != 0) ? markCircleMove(id, squares) : markCrossMove(id, squares);
        }
    };
}();