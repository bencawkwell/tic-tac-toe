import React from 'react';
import './App.css';

/**
 * React component for each square on the tic-tac-toe board
 */
function Square(props) {
  let cellContent;
  if (props.data.value) {
    cellContent = <div className="occupied">{props.data.value}</div>;
  } else {
    cellContent = (
      <input className="available"
        type="button"
        name="move"
        value={props.data.id} />
    );
  }
  return (
    <td className="square">
      {cellContent}
    </td>
  );
}

/**
 * React component for the entire tic-tac-toe board
 */
function Board(props) {
  return (
    <table className="board">
      <tbody>
        <tr>
          <Square data={props.gameState[0]} />
          <Square data={props.gameState[1]} />
          <Square data={props.gameState[2]} />
        </tr>
        <tr>
          <Square data={props.gameState[3]} />
          <Square data={props.gameState[4]} />
          <Square data={props.gameState[5]} />
        </tr>
        <tr>
          <Square data={props.gameState[6]} />
          <Square data={props.gameState[7]} />
          <Square data={props.gameState[8]} />
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
    <input type="button" value="New Game" />
  );
}

/**
 * Main Application
 */
class App extends React.Component {
  render() {
    const gameState = [
      {id: 1},
      {id: 2},
      {id: 3, value: 'X'},
      {id: 4},
      {id: 5, value: 'O'},
      {id: 6, value: 'X'},
      {id: 7},
      {id: 8},
      {id: 9, value: 'O'}
    ];

    return (
      <form className="App">
        <Board gameState={gameState} />
        <Control />
      </form>
    );
  }
}

export default App;
