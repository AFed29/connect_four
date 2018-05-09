import React, {Component} from 'react';
import Header from '../components/Header.js';
import NewGame from '../components/NewGame.js';
import Board from '../components/Board.js';
import GameMessage from '../components/GameMessage.js';

class GameBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game-box">
        <Header />
        <NewGame />
        <Board />
        <GameMessage />
      </div>
    )
  }
}

export default GameBox;
