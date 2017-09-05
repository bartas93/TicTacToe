define("moveService", ['jquery'], function ($) {

    function isSquareBlank(id, squares) {
        return !(squares[id].children[0].classList.contains("fa-times") || squares[id].children[0].classList.contains("fa-circle-o"))
    };

    function markCircleMove(id, squares) {

        $('td:eq(' + id + ') i').hide();
        $('td:eq(' + id + ') i').addClass("blue-text");
        $('td:eq(' + id + ') i').addClass("fa-circle-o");
        $('td:eq(' + id + ') i').slideDown('slow');
    };

    function markCrossMove(id, squares) {
        $('td:eq(' + id + ') i').hide();
        $('td:eq(' + id + ') i').addClass("purple-text");
        $('td:eq(' + id + ') i').addClass("fa-times");
        $('td:eq(' + id + ') i').slideDown('slow');
    };

    return {
        isMoveValid: function (id, squares) {
            return (isSquareBlank(id, squares) && document.getElementById("start-button").disabled);
        },
        makeMove: function (id, squares, gameHistory) {
            (gameHistory.length % 2 != 0) ? markCircleMove(id, squares) : markCrossMove(id, squares);
        }
    };
});
