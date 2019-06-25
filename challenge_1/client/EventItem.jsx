import React from 'react';
import styled from 'styled-components';

const EventWrapper = styled.section`
  padding: 1em;
  max-width: 200px;
  margin: 0 auto;
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div>
      <br />
      <EventWrapper>
      <div><strong>Date:</strong> {this.props.event.date}</div>
      <div><strong>Place:</strong> {this.props.event.category2}</div>
      <div><strong>Description:</strong> {this.props.event.description}</div>
      </EventWrapper>
      <br />
    </div>
    )
  }
}

export default EventItem;
