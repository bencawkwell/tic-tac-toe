'use strict';

describe('The tic-tac-toe game', function () {
    var game;

    before(function (client, done) {
        game = client.page['tic-tac-toe']();
        done();
    });

    after(function (client, done) {
        client.end(function() {
            done();
        });
    });

    it('Should have a start game button', function (client) {
        game.navigate()
            .expect.element('body').to.be.present.before(1000);

        game.expect.element('@restartButton').to.be.visible;
    });

    it('Should have an initial state that the game is not started', function (client) {
        game.navigate();

        game.expect.element('@position1Button').to.be.visible;
        game.expect.element('@position2Button').to.be.visible;
        game.expect.element('@position3Button').to.be.visible;
        game.expect.element('@position4Button').to.be.visible;
        game.expect.element('@position5Button').to.be.visible;
        game.expect.element('@position6Button').to.be.visible;
        game.expect.element('@position7Button').to.be.visible;
        game.expect.element('@position8Button').to.be.visible;
        game.expect.element('@position9Button').to.be.visible;
    });

    it('Should update the position with an X when a move is made', function (client) {
        game.navigate();

        game.makeMove(4);
        game.assert.containsText('@position4Value', 'X');
    });

});
