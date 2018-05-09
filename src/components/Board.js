import React, {Component} from 'react';
import Cell from './Cell.js';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    }
  }

  createRow(startId, upperLimit) {
    const cells = [];
    for (var i = startId; i < upperLimit; i++) {
      cells.push(<Cell id={i} />)
    }
    return (<tr>{cells}</tr>);
  }

  createTable() {
    return (
      <table>
        <tbody>
          {this.createRow(0,7)}
          {this.createRow(7,14)}
          {this.createRow(14,21)}
          {this.createRow(21,28)}
          {this.createRow(28,35)}
          {this.createRow(35,42)}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      this.createTable()
    )
  }
}

export default Board;
