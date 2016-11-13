import React from 'react';

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
class Control extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleNewGame();
  }

  render() {
    return (
      <div className="control">
        <span>{this.props.feedback}</span>
        <button name="restart" onClick={this.handleClick}>New Game</button>
      </div>
    );
  }
}

/**
 * React component for the game view
 */
function Game(props) {
  return (
    <form className="App">
      <Board tiles={props.game.tiles} handleMove={props.handleMove} />
      <Control feedback={props.feedback} handleNewGame={props.handleNewGame} />
    </form>
  );
}

export default Game;