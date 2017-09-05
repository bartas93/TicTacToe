describe("moveBackService.spec", function () {

    it("should return square id witch is moved back ", function () {

        //given
        var gameHistory = [262144, 262145, 266241, 266243, 274435, 274467, 276515];
        //when
        var id = moveBackService.moveBack(gameHistory);
        //then
        expect(id).toBe(2);
    });

});