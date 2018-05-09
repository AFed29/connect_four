const GameLogic = require("../game_logic.js")
const Player = require('../player.js')

const assert = require('assert');

describe('Game Logic', function () {

  let gameLogic;
  let redPlayer;
  let yellowPlayer;

  beforeEach(function () {
    gameLogic = new GameLogic();
    redPlayer = new Player('red');
    yellowPlayer = new Player('yellow');
  })

  it('check that game starts with an empty board', function () {
    for (let i = 0; i < 42; i++) {
      assert.strictEqual(gameLogic.board[i], null);
    }
  })

  it('you can place marker in an empty bottom cell', function () {
    assert.strictEqual(gameLogic.placeTile(35, redPlayer), 35);
    assert.strictEqual(gameLogic.board[35], 'red')
  })

  it('you cannot place a marker above an empty cell', function () {
    assert.strictEqual(gameLogic.placeTile(28, yellowPlayer), 35);
    assert.strictEqual(gameLogic.board[35], 'yellow')
  })

  it('a marker only goes above already placed marker', function () {
    assert.strictEqual(gameLogic.placeTile(25, redPlayer), 39);
    assert.strictEqual(gameLogic.board[39], 'red')
    assert.strictEqual(gameLogic.placeTile(11, yellowPlayer), 32);
    assert.strictEqual(gameLogic.board[32], 'yellow')
  })

  it('cannot place marker if column is full', function () {
    for (let i = 0; i < 6; i++) {
      gameLogic.placeTile(3, redPlayer);
    }
    for (let i = 3; i < 42; i += 7) {
      assert.strictEqual(gameLogic.board[i], 'red')
    }
    assert.strictEqual(gameLogic.placeTile(3), null);
  })

  it('check if four in a row horizontally', function () {
    gameLogic.placeTile(41, redPlayer);
    gameLogic.placeTile(40, redPlayer);
    gameLogic.placeTile(39, redPlayer);
    gameLogic.placeTile(38, redPlayer);

    assert.strictEqual(gameLogic.board[38], 'red')
    assert.strictEqual(gameLogic.board[39], 'red')
    assert.strictEqual(gameLogic.board[40], 'red')
    assert.strictEqual(gameLogic.board[41], 'red')

    assert.strictEqual(gameLogic.checkWin(), 'red has won')
  })

  it('check if four in a row vertically', function () {
    gameLogic.placeTile(3, yellowPlayer);
    gameLogic.placeTile(3, yellowPlayer);
    gameLogic.placeTile(3, yellowPlayer);
    gameLogic.placeTile(3, yellowPlayer);

    assert.strictEqual(gameLogic.board[38], 'yellow')
    assert.strictEqual(gameLogic.board[31], 'yellow')
    assert.strictEqual(gameLogic.board[24], 'yellow')
    assert.strictEqual(gameLogic.board[17], 'yellow')

    assert.strictEqual(gameLogic.checkWin(), 'yellow has won')
  })

  it('check if four in a row diagonally down right', function () {
    gameLogic.placeTile(40, yellowPlayer);
    gameLogic.placeTile(32, yellowPlayer);
    gameLogic.placeTile(32, yellowPlayer);
    gameLogic.placeTile(24, yellowPlayer);
    gameLogic.placeTile(24, yellowPlayer);
    gameLogic.placeTile(24, yellowPlayer);
    gameLogic.placeTile(16, redPlayer);
    gameLogic.placeTile(16, yellowPlayer);
    gameLogic.placeTile(16, yellowPlayer);
    gameLogic.placeTile(16, yellowPlayer);

    assert.strictEqual(gameLogic.board[40], 'yellow')
    assert.strictEqual(gameLogic.board[32], 'yellow')
    assert.strictEqual(gameLogic.board[24], 'yellow')
    assert.strictEqual(gameLogic.board[16], 'yellow')

    assert.strictEqual(gameLogic.checkWin(), 'yellow has won')
  })

  it('check if four in a row diagonally down left', function () {
    gameLogic.placeTile(16, yellowPlayer);
    gameLogic.placeTile(24, yellowPlayer);
    gameLogic.placeTile(24, yellowPlayer);
    gameLogic.placeTile(32, yellowPlayer);
    gameLogic.placeTile(32, yellowPlayer);
    gameLogic.placeTile(32, yellowPlayer);
    gameLogic.placeTile(40, redPlayer);
    gameLogic.placeTile(40, yellowPlayer);
    gameLogic.placeTile(40, yellowPlayer);
    gameLogic.placeTile(40, yellowPlayer);

    assert.strictEqual(gameLogic.checkWin(), 'yellow has won')
  })

})
