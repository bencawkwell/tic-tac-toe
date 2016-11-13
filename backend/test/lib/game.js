'use strict';

var chai    = require('chai'),
    lib     = require('requirefrom')('lib'),

    Game    = lib('game'),

    expect  = chai.expect;

describe('the game module', function () {

    describe('create() method', function () {
        it('should return a game object', function () {
            var result = Game.create();

            expect(result).to.be.an.instanceOf(Game.Game);

            expect(result).to.have.property('status')
                .and.to.equal('ongoing');

            expect(result).to.have.property('availableMoves')
                .and.to.deep.equal([1,2,3,4,5,6,7,8,9]);

            expect(result).to.have.property('occupiedMoves')
                .and.to.deep.equal({});

            expect(result).to.have.property('currentPlayer')
                .and.to.equal('X');

            expect(result).to.have.property('winner')
                .and.to.be.null;

            expect(result).to.have.property('registerMove')
                .and.to.be.a('function');
        });

        it('should not allow any of its property values to be changed', function () {
            var game        = Game.create(),
                gameChanger = function (prop, val) {
                    this[prop] = val;
                };

            expect(gameChanger.bind(game, 'status', 'over')).to.throw(TypeError);

            expect(gameChanger.bind(game, 'availableMoves', [1,2,3])).to.throw(TypeError);

            expect(gameChanger.bind(game, 'occupiedMoves', {1:'X'})).to.throw(TypeError);

            expect(gameChanger.bind(game, 'currentPlayer', 'O')).to.throw(TypeError);

            expect(gameChanger.bind(game, 'winner', 'O')).to.throw(TypeError);
        });
    });

    describe('instance method registerMove()', function () {
        var game;

        beforeEach(function () {
            game = Game.create();
        });

        it('should return itself for a valid move', function () {
            var result = game.registerMove('X', 1);

            expect(result).to.equal(game)

            expect(result).to.have.property('availableMoves')
                .and.to.deep.equal([2,3,4,5,6,7,8,9]);

            expect(result).to.have.property('occupiedMoves')
                .and.to.deep.equal({1: 'X'});

            expect(result).to.have.property('currentPlayer')
                .and.to.equal('O');
        });

        it('should throw an InvalidPlayerError when provided a player that does not exist', function () {
            expect(game.registerMove.bind(game, 'Y', 1)).to.throw(Game.InvalidPlayerError);
        });

        it('should throw an InvalidPositionError when provided a position that does not exist', function () {
            expect(game.registerMove.bind(game, 'X', 16)).to.throw(Game.InvalidPositionError);
        });

        it('should throw an IncorrectPlayerError when it is not that players turn', function () {
            expect(game.registerMove.bind(game, 'O', 1)).to.throw(Game.IncorrectPlayerError);
        });

        it('should throw an PositionUnavailableError when a position is already occupied', function () {
            game.registerMove('X', 1);

            expect(game.registerMove.bind(game, 'O', 1)).to.throw(Game.PositionUnavailableError);
        });

        it('should throw an GameOverError when the game is already over', function () {
            game.registerMove('X', 1);
            game.registerMove('O', 4);
            game.registerMove('X', 2);
            game.registerMove('O', 5);
            game.registerMove('X', 3);

            expect(game.registerMove.bind(game, 'O', 6)).to.throw(Game.GameOverError);
        });

        it('should update the winner when the game is over', function () {
            game.registerMove('X', 1);
            game.registerMove('O', 4);
            game.registerMove('X', 2);
            game.registerMove('O', 5);
            game.registerMove('X', 3);

            expect(game.status).to.equal('over');

            expect(game.winner).to.equal('X');

            expect(game.availableMoves).to.deep.equal([]);

            expect(game.currentPlayer).to.be.null;
        });

        it('should leave the winner null when the game is a draw', function () {
            game.registerMove('X', 1)
                .registerMove('O', 4)
                .registerMove('X', 2)   // The end result looks like:
                .registerMove('O', 5)   //  X | X | O
                .registerMove('X', 6)   //  O | O | X
                .registerMove('O', 3)   //  X | O | X
                .registerMove('X', 7)
                .registerMove('O', 8)
                .registerMove('X', 9);

            expect(game.status).to.equal('over');

            expect(game.winner).to.be.null;
        });
    });

});
