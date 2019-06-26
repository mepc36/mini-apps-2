import React from 'react';
import axios from 'axios';

class CurrencyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const sampleRequest = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05'
    const basicEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
    const bitcoinCode = 'BTC'

    axios.get(basicEndpoint)
    .then(res => {
      // console.log(res.data.bpi.USD.rate); // current Bitcoin price location
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>Currency Form!</div>
    )
  }
}

export default CurrencyForm;
