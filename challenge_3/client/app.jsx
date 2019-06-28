import React from 'react';
import GameInfoForm from './GameInfoForm.jsx'
import ScoreForm from './ScoreForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsToKnockDown: 0,
      score: 0,
      onAStrike: "false",
      onASpare: "false",
      ball: "1",
      frame: "1",
      spareBonus: "0",
      strikeBonus: "0",
      gameOver: false,
      firstBallScore: "0",
    }
  }

  knockDownPins(e) {
    var newScore = this.state.score;
    var newBall;
    var newFrame;
    var newGameOver = false;
    var newOnAStrike;
    var newOnASpare;
    var newFirstBallScore;

    if (this.state.gameOver === true) {
      console.log(`Start a new game!`);
      return;
    }

    if (parseInt(this.state.pinsToKnockDown) + parseInt(this.state.firstBallScore) > 10) {
      console.log(`You can't knock down more than 10 pins in a frame! Choose a new, lower number of pins.`);
      return;
    }

    if (parseInt(this.state.pinsToKnockDown) + parseInt(this.state.firstBallScore) === 10 && parseInt(this.state.ball) === 2) {
      console.log(`Good job! You now are on a spare bonus.`);
      newOnASpare = "true";
      console.log(`${newOnASpare}`);
    } else {
      newOnASpare = "false";
    }

    newScore += this.state.pinsToKnockDown;

    if (parseInt(this.state.ball) === 1) {
      newFirstBallScore = this.state.pinsToKnockDown;
    } else {
      newFirstBallScore = 0;
    }

    if (this.state.pinsToKnockDown === 10 && parseInt(this.state.ball) === 1) {
      console.log(`Good job! You now have a strike bonus.`)
      newOnAStrike = "true";
    } else {
      newOnAStrike = "false";
    }

    if (parseInt(this.state.ball) === 1) {
      newBall = "2";
    } else {
      newBall = "1";
    }

    if (parseInt(this.state.ball) === 2) {
      newFrame = parseInt(this.state.frame) + 1;
    } else {
      newFrame = this.state.frame;
    }

    if (parseInt(this.state.frame) === 10) {
      newGameOver = true;
    }

    if (this.state.onASpare === "true") {
      console.log(`Here's your spare bonus!`);
      newScore += this.state.pinsToKnockDown;
    }

    console.log(`last: ${newOnASpare}`);

    this.setState({
      score: newScore,
      ball: newBall,
      frame: newFrame,
      gameOver: newGameOver,
      onAStrike: newOnAStrike,
      onASpare: newOnASpare,
      firstBallScore: newFirstBallScore,
    });
  
  }

  setPins(e, numberOfPins) {
    e.preventDefault();
    this.setState({
      pinsToKnockDown: numberOfPins,
    });
  }

  startNewGame(e) {
    e.preventDefault()
    console.log(`Starting new game!`);
    this.setState({
      pinsToKnockDown: 0,
      score: 0,
      onAStrike: "false",
      onASpare: "false",
      ball: "1",
      frame: "0",
      spareBonus: "0",
      strikeBonus: "0",
      gameOver: false,
      firstBallScore: "0",
    })
  }

  render() {
    return (
    <div>
      <h1>Bowling Game!</h1>
      <GameInfoForm score={this.state.score} knockDownPins={(e) => this.knockDownPins(e)} setPins={this.setPins.bind(this)}/>
      <ScoreForm firstBallScore={this.state.firstBallScore} startNewGame={this.startNewGame.bind(this)} gameOver={this.state.gameOver} frame={this.state.frame} spareBonus={this.state.spareBonus} strikeBonus={this.state.strikeBonus} ball={this.state.ball} onAStrike={this.state.onAStrike} onASpare={this.state.onASpare} score={this.state.score} />
    </div>
    )
  }
}

export default App