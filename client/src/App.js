import React from 'react';
import './App.css';

/**
 * React component for each square on the tic-tac-toe board
 */
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleMove(parseInt(e.target.value));
  }

  render() {
    let cellContent;
    if (this.props.tile.value) {
      cellContent = <div className="occupied">{this.props.tile.value}</div>;
    } else {
      cellContent = (
        <button className="available"
          name="move"
          onClick={this.handleClick}
          value={this.props.tile.id} />
      );
    }
    return (
      <td className="tile">
        {cellContent}
      </td>
    );
  }
}

/**
 * React component for the entire tic-tac-toe board
 */
function Board(props) {
  return (
    <table className="board">
      <tbody>
        <tr>
          <Square tile={props.tiles[0]} handleMove={props.handleMove} />
          <Square tile={props.tiles[1]} handleMove={props.handleMove} />
          <Square tile={props.tiles[2]} handleMove={props.handleMove} />
        </tr>
        <tr>
          <Square tile={props.tiles[3]} handleMove={props.handleMove} />
          <Square tile={props.tiles[4]} handleMove={props.handleMove} />
          <Square tile={props.tiles[5]} handleMove={props.handleMove} />
        </tr>
        <tr>
          <Square tile={props.tiles[6]} handleMove={props.handleMove} />
          <Square tile={props.tiles[7]} handleMove={props.handleMove} />
          <Square tile={props.tiles[8]} handleMove={props.handleMove} />
        </tr>
      </tbody>
    </table>
  );
}

/**
 * React component to start/reset the game
 */
function Control(props) {
  return (
    <button name="restart">New Game</button>
  );
}

/**
 * Main Application
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleMove = this.handleMove.bind(this);

    this.state = {
      game: {
        id: 'some-uuid-here',
        tiles: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9}
        ]
      }
    };
  }


  handleMove(tileId) {
  }

  render() {
    return (
      <form className="App">
        <Board tiles={this.state.game.tiles} handleMove={this.handleMove} />
        <Control />
      </form>
    );
  }
}

export default App;
