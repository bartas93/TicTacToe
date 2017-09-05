describe("historyService.spec", function () {

    beforeEach(
        function () {
            historyService.initHistory();
        }
    );


    it("should init gameHistory with starting state", function () {
        //given 
        var startingState = 0b1000000000000000000;
        //when
        var history = historyService.getHistory;
        //then
        expect(history[0]).toEqual(startingState);
        expect(history).toEqual([262144]);
    });

    it("should get added state", function () {
        //given 
        var nextState = 262145;
        //when
        historyService.add(0);
        var history = historyService.getHistory;
        //then
        expect(history).toEqual([262144, 262145]);
    });

    it("should remove last game History", function () {
        //given when
        historyService.removeLast();
        var history = historyService.getHistory;
        //then
        expect(history).toEqual([]);
    });

});