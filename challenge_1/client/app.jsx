import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import SearchForm from './SearchForm';
import EventForm from './EventForm';
import ReactPaginate from 'react-paginate'
import styled from 'styled-components';

const PaginationWrapper = styled.section`
  display: inline;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      events: [],
      backupEvents: [],
      offset: 0,
      pageCount: 10,
      pageNumber: 1,
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
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/events?q=${this.state.query}&_page=${this.state.pageNumber}&_limit=10`,
      success: (success) => {
        this.setState({
          events: success,
        })
      },
      error: (error) => {
        console.log(`Error: ${error}`);
      }, 
    })
  }

  handlePageClick(data) {
    console.log(`data: ${JSON.stringify(data)}`);

    var newPageNumber = data.selected;
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/events?q=${this.state.query}&_page=${newPageNumber}&_limit=10`,
      success: (success) => {

        this.setState({
          events: success,
        })
      },
      error: (error) => {
        console.log(`Error: ${error}`);
      }, 
    })
  }
 
  render() {
    return (
      <div>
        <h1>Historical Event Finder!</h1>
        <SearchForm submitInfo={this.submitInfo.bind(this)} getQuery={this.getQuery.bind(this)}/>
        <br />
        <ReactPaginate previousLabel={'Load Previous Events!'} nextLabel={'Load More Events!'} breakLabel={'...'} breakClassName={'break-me'} pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={5} onPageChange={this.handlePageClick.bind(this)} containerClassName={'pagination'} subContainerClassName={'pages pagination'} activeClassName={'active'} />
        <br />
        <EventForm events={this.state.events}/>
      </div>
    )
  }
}

export default App;
