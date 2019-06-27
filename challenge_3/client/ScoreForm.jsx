import React from 'react';

class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h4>Scoring:</h4>
        <div>Ball: {this.props.ball}</div>
        <div>Frame: {this.props.frame}</div>
        <br />
        <div>Total Pins: {this.props.score}</div>
        <div>On a spare: {this.props.onASpare}</div>
        <div>On a strike: {this.props.onAStrike}</div>
        <div>Current Frame Score: {this.props.firstBallScore}</div>
        <div>Spare Bonus: {this.props.spareBonus}</div>
        <div>Strike Bonus: {this.props.strikeBonus}</div>
        <br />
        <div>***Spares add a bonus of your next ball's pins; strikes add a bonus of your next 2 balls' pins.</div>
        <br />
        <button onClick={(e) => this.props.startNewGame(e)}>Start a new game!</button>
      </div>
    )
  }
}

export default ScoreForm;