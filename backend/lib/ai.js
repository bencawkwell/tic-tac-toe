'use strict';

/**
 * A simple AI for playing tic-tac-toe.
 *
 * Example usage:
 *
 *      var ai   = require('ai');
 *
 *          game = Game.create();
 *
 *      ai.makeMove(game);
 *
 * The AI will play any available move for the current player, this means it is
 * possible for a game to be played only by the AI where the AI will alternate
 * between each player.
 */
module.exports = {
    makeMove: function (game) {
        var moves = game.availableMoves,
            aiMove;

        if (moves.length > 0) {
            aiMove  = moves[Math.floor(Math.random()*moves.length)];
            game.registerMove(game.currentPlayer, aiMove);
        }
    }
};
