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
      nextPageLink: '',
      prevPageLink: '',
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

      url: `http://localhost:3001/events?q=${this.state.query}&_page=1&_limit=200`,
      success: (success, status, xhr) => {
        // console.log(`Success: ${JSON.stringify(success)}`);
        var linkHeader = xhr.getResponseHeader('Link');
        var allHeaders = [];
        var splitHeaders = linkHeader.split('; rel=');

        for (var i = 0; i < splitHeaders.length; i++) {
          var newSplitHeader = splitHeaders[i].split(',');
          allHeaders.push(newSplitHeader);
        }

        for (var i = 0; i < allHeaders.length; i++) {
          for (var k = 0; k < allHeaders[i].length; k++) {
            if (allHeaders[i][k] === `"next"`) {
              var cleanLink = allHeaders[i][k + 1];
              cleanLink = cleanLink.substr(2, cleanLink.length - 3);
              this.setState({
                nextPageLink: cleanLink,
              })
            }
          }
        }

        var newEvents = [];
        var newBackupEvents = [];

        for (var i = 0; i < 10; i++) {
          newEvents.push(success[i]);
        }

        for (var i = 11; i < 100; i++) {
          newBackupEvents.push(success[i]);
        }

        this.setState({
          events: newEvents,
          backupEvents: newBackupEvents,
          pageCount: 10,
        })
      },
      error: (error) => {
        console.log(`Error: ${JSON.parse(error.responseText[0][0].description)}`);
      }, 
    })
  }

  handlePageClick () {
    console.log(`this.state.nextPageLink: ${this.state.nextPageLink}`);
    $.ajax({
      method: 'GET',
      url: `${this.state.nextPageLink}`,
      success: (success, status, xhr) => {
        // console.log(`Success: ${JSON.stringify(success)}`);
        var linkHeader = xhr.getResponseHeader('Link');
        var allHeaders = [];
        var splitHeaders = linkHeader.split('; rel=');

        for (var i = 0; i < splitHeaders.length; i++) {
          var newSplitHeader = splitHeaders[i].split(',');
          allHeaders.push(newSplitHeader);
        }

        for (var i = 0; i < allHeaders.length; i++) {
          for (var k = 0; k < allHeaders[i].length; k++) {
            if (allHeaders[i][k] === `"next"`) {
              this.setState({
                nextPageLink: allHeaders[i][k + 1]
              })
            }
          }
        }

        console.log(`next allHeaders: ${allHeaders}`);

        var newEvents = [];
        var newBackupEvents = [];

        for (var i = 0; i < 10; i++) {
          newEvents.push(success[i]);
        }

        for (var i = 11; i < 100; i++) {
          newBackupEvents.push(success[i]);
        }

        this.setState({
          events: newEvents,
          backupEvents: newBackupEvents,
          pageCount: 10,
        })
      },
      error: (error) => {
        console.log(`Error: ${JSON.parse(error.responseText[0][0].description)}`);
      }, 
    })
  };


  render() {
    return (
      <div>
        <h1>Historical Event Finder!</h1>
        <SearchForm submitInfo={this.submitInfo.bind(this)} getQuery={this.getQuery.bind(this)}/>
        <br />
        <PaginationWrapper>
        <ReactPaginate
          previousLabel={'Load Previous Events!'}
          nextLabel={'Load More Events!'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        </PaginationWrapper>
        <br />
        <EventForm events={this.state.events}/>
      </div>
    )
  }
}

export default App;
