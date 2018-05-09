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

GameLogic.prototype.placeTile = function (id) {

  const column = id % 7;

  for (i=column; i<42; i+=7){
    if (this.board[i]) {
      this.board[i-7] = 'marker';
      return i-7;
    } else if (i >=35 && !this.board[i]) {
      this.board[i] = 'marker';
      return i;
    }
  }
}



module.exports = GameLogic;
