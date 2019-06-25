import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      event: {

      }
    }
  }

  getQuery(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    });
  }

  submitInfo(e) {
    e.preventDefault();
    console.log('Submitting info!');
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/events?q=${this.state.query}`,
      dataType: 'application/json',
      success: (success) => {
        console.log(`Server success: ${JSON.stringify(success[0])}`);
      },
      error: (error) => {
        console.log(`Server error: ${JSON.stringify(error)}`);
      }, 
    })
  }

  render() {
    return (
      <div>
        <h1>Historical Event Finder!</h1>
        <SearchForm submitInfo={this.submitInfo.bind(this)} getQuery={this.getQuery.bind(this)}/>
      </div>
    )
  }
}

export default App;
