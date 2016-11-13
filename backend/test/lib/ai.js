'use strict';

var chai      = require('chai'),
    sinon     = require("sinon"),
    sinonChai = require("sinon-chai"),
    lib       = require('requirefrom')('lib'),

    ai        = lib('ai'),
    Game      = lib('game'),

    expect    = chai.expect;

chai.use(sinonChai);

describe('the ai module', function () {

    describe('makeMove() method', function () {
        it('should use the game object to make a move', function () {
            var game    = Game.create(),
                player1 = game.currentPlayer;

            sinon.spy(game, 'registerMove');
            ai.makeMove(game);

            expect(game.currentPlayer).to.not.equal(player1);

            expect(game.registerMove).to.have.been.calledWith(player1);
        });

        it('should make a move based on who is the current player', function () {
            var game    = Game.create(),
                player1 = game.currentPlayer,
                player2;

            // This next line just reverses the assertion to the previous test
            game.registerMove(player1, 1);
            player2 = game.currentPlayer;
            sinon.spy(game, 'registerMove');
            ai.makeMove(game);

            expect(game.currentPlayer).to.equal(player1);

            expect(game.registerMove).to.have.been.calledWith(player2);
        });

        it('should do nothing if the game is already over', function () {
            var game    = Game.create(),
                player1 = game.currentPlayer,
                player2;

            game.registerMove(player1, 1);
            player2 = game.currentPlayer;
            game.registerMove(player2, 4);
            game.registerMove(player1, 2);
            game.registerMove(player2, 5);
            game.registerMove(player1, 3);

            sinon.spy(game, 'registerMove');
            ai.makeMove(game);

            expect(game.registerMove).to.not.have.been.called;
        });
    });

});
