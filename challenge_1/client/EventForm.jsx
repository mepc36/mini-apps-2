import React from 'react';
import EventItem from './EventItem';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
    {this.props.events.map((item, key) => (
        <EventItem event={item} key={key}/>
    ))}
    </div>);
  }
}

export default EventForm;
