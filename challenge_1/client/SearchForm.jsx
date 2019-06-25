import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <form>
        <input placeholder="Enter a query!" onChange={(e) => this.props.getQuery(e)}></input>
        <br/>
        <br/>
        <button onClick={(e) => this.props.submitInfo(e)}>Search for event!</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
