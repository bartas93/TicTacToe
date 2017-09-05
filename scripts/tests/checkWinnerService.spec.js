describe("checkWinnerService.spec", function () {

    it("should return false for state without winning set", function () {

        //given
        var gameHistory = [262144, 262152, 270344, 270376, 335912, 336168];
        //when
        var isWinner = checkWinnerService.isWinner(gameHistory);
        //then
        expect(isWinner).toBe(false)
    });


    it("should return true for circle winning set", function () {

        //given
        var gameHistory = [262144, 262152, 270344, 270376, 335912, 336168, 368936, 368940];
        //when
        var isWinner = checkWinnerService.isWinner(gameHistory);
        //then
        expect(isWinner).toBe(true)
    });




    it("should return true for cross winning set", function () {

        //given
        var gameHistory = [262144, 262145, 263169, 263177, 271369, 271401, 336937];
        //when
        var isWinner = checkWinnerService.isWinner(gameHistory);
        //then
        expect(isWinner).toBe(true)
    });
});