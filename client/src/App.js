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
    this.props.handleMove(e.target.value);
  }

  render() {
    let cellContent;
    if (this.props.data.value) {
      cellContent = <div className="occupied">{this.props.data.value}</div>;
    } else {
      cellContent = (
        <button className="available"
          name="move"
          onClick={this.handleClick}
          value={this.props.data.id} />
      );
    }
    return (
      <td className="square">
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
          <Square data={props.gameState[0]} handleMove={props.handleMove} />
          <Square data={props.gameState[1]} handleMove={props.handleMove} />
          <Square data={props.gameState[2]} handleMove={props.handleMove} />
        </tr>
        <tr>
          <Square data={props.gameState[3]} handleMove={props.handleMove} />
          <Square data={props.gameState[4]} handleMove={props.handleMove} />
          <Square data={props.gameState[5]} handleMove={props.handleMove} />
        </tr>
        <tr>
          <Square data={props.gameState[6]} handleMove={props.handleMove} />
          <Square data={props.gameState[7]} handleMove={props.handleMove} />
          <Square data={props.gameState[8]} handleMove={props.handleMove} />
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
      game: [
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
  }

  handleMove(position) {
    const gameState = this.state.game.slice();

    gameState[position-1].value = 'X';
    this.setState({game: gameState});
  }

  render() {
    return (
      <form className="App">
        <Board gameState={this.state.game} handleMove={this.handleMove} />
        <Control />
      </form>
    );
  }
}

export default App;
