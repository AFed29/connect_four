const GameLogic = function (occupiedTiles) {

  this.board = initialiseBoard();
}

const initialiseBoard = function () {
  const board = []
  for (let i = 0; i < 42; i++) {
    board.push(null);
  }
  return board;
}


GameLogic.prototype.checkHorizontalWin = function (cell, index) {
  if (this.board[index + 1] === cell && ((index + 2) % 7 !== 6)) {
    if (this.board[index + 2] === cell) {
      if (this.board[index + 3] === cell) {
        return `${cell} has won`
      }
    }
  }
  return null;
}

GameLogic.prototype.checkVerticalWin = function (cell, index) {
  if (this.board[index + 7] === cell && ((index + 14) < 35)) {
    if (this.board[index + 14] === cell) {
      if (this.board[index + 21] === cell) {
        return `${cell} has won`
      }
    }
  }
  return null;
}

GameLogic.prototype.checkDiagonalRightWin = function (cell, index) {
  if (this.board[index + 8] === cell && (index+16 < 35 && (index+16 % 7 !== 6))) {
    if (this.board[index + 16] === cell) {
      if (this.board[index + 24] === cell) {
        return `${cell} has won`
      }
    }
  }
  return null;
}

GameLogic.prototype.checkDiagonalLeftWin = function (cell, index) {
  if (this.board[index + 6] === cell && (index+12 < 35 && (index+12 % 7 !== 0))) {
    if (this.board[index + 12] === cell) {
      if (this.board[index + 18] === cell) {
        return `${cell} has won`
      }
    }
  }
  return null;
}

GameLogic.prototype.checkWin = function () {
  let result = null;
  this.board.forEach((cell, index) => {
    if (cell) {
      if (this.checkHorizontalWin(cell, index)) {
        result = this.checkHorizontalWin(cell, index)
      }
      if (this.checkVerticalWin(cell, index)) {
        result = this.checkVerticalWin(cell, index)
      }
      if (this.checkDiagonalRightWin(cell, index)) {
        result = this.checkDiagonalRightWin(cell, index)
      }
      if (this.checkDiagonalLeftWin(cell, index)) {
        result = this.checkDiagonalLeftWin(cell, index)
      }
    }
})
return result;
}

GameLogic.prototype.placeTile = function (id, player) {
  const column = id % 7;

  for (i=column; i<42; i+=7){
    if (i < 7 && this.board[i]) {
      return null;
    }
    else if (this.board[i]) {
      this.board[i-7] = player.marker;
      return i-7;
    } else if (i >=35 && !this.board[i]) {
      this.board[i] = player.marker;
      return i;
    }
  }
}



module.exports = GameLogic;
