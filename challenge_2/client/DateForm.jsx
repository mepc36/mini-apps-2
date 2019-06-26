import React from 'react'

class DateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <h5>Starting Date:</h5>
        <input type="date" onChange={(e) => this.props.setStartDate(e)}></input>
        <br />
        <h5>Ending Date:</h5>
        <input type="date" onChange={(e) => this.props.setEndDate(e)}></input>
        <br />
        <br />
        <button type="submit" onClick={(e) => this.props.submitDates(e)}>Get BTC Info for these Dates!</button>
      </form>
    )
  }
}

export default DateForm;
