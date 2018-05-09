const GameLogic = require("../game_logic.js")

const assert = require('assert');

describe('Game Logic', function () {

  let gameLogic;

  beforeEach(function () {
    gameLogic = new GameLogic();
  })

  it('check that game starts with an empty board', function () {
    for (let i = 0; i < 42; i++) {
      assert.strictEqual(gameLogic.board[i], null);
    }
  })

  it('you can place marker in an empty bottom cell', function () {
    assert.strictEqual(gameLogic.placeTile(35), 35);
    assert.strictEqual(gameLogic.board[35], 'marker')
  })

  it('you cannot place a marker above an empty cell', function () {
    assert.strictEqual(gameLogic.placeTile(28), 35);
    assert.strictEqual(gameLogic.board[35], 'marker')
  })

  it('a marker only goes above already placed marker', function () {
    assert.strictEqual(gameLogic.placeTile(25), 39);
    assert.strictEqual(gameLogic.board[39], 'marker')
    assert.strictEqual(gameLogic.placeTile(11), 32);
    assert.strictEqual(gameLogic.board[32], 'marker')
  })
})
