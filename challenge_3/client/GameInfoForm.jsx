import React from 'react';

class GameInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <table border="1">
        <tbody>
          <tr>
            <td onClick={(e) => this.props.setPins(e, 1)}>1</td>
            <td onClick={(e) => this.props.setPins(e, 2)}>2</td>
            <td onClick={(e) => this.props.setPins(e, 3)}>3</td>
          </tr>
          <tr>
            <td onClick={(e) => this.props.setPins(e, 4)}>4</td>
            <td onClick={(e) => this.props.setPins(e, 5)}>5</td>
            <td onClick={(e) => this.props.setPins(e, 6)}>6</td>
          </tr>
          <tr>
            <td onClick={(e) => this.props.setPins(e, 7)}>7</td>
            <td onClick={(e) => this.props.setPins(e, 8)}>8</td>
            <td onClick={(e) => this.props.setPins(e, 9)}>9</td>
          </tr>
          <tr>
            <td onClick={(e) => this.props.setPins(e, 10)}>10</td>
            <td onClick={(e) => this.props.setPins(e, 0)}>0</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={e =>this.props.knockDownPins(e)}>Roll!</button>
      <br />
      </div>
    )
  }
}

export default GameInfoForm
