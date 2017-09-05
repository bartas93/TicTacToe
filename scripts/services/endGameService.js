define([], function () {
    return {
        endGame: function () {
            document.getElementById("start-button").disabled = false;
            document.getElementById("give-up-button").disabled = true;
            document.getElementById("move-back-button").disabled = true;
        }
    };
});
