import React from 'react';
import PriceItem from './PriceItem.jsx';
import styles from 'styled-components';

// const PriceWrapper = styled.section`
//   padding: 1em;
//   max-width: 200px;
//   margin: 0 auto;
//   border-style: solid;
//   border-width: 1px;
//   border-color: black;
// `;

class PriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.prices.length === 0) {
      return (
        <div>
          <br />
          <div>Search a price, and then see its info here!</div>
        </div>
      )
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <td><strong>Dates:</strong></td>
              <td><strong>Prices:</strong></td>
            </tr>
          {this.props.prices.map(item => (
            <tr>
              <td>{item.date}:</td>
              <td>{item.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )
    }
  }
}

export default PriceForm;
