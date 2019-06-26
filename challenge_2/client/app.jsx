import React from 'react'
import CurrencyForm from './CurrencyForm';
import DateForm from './DateForm';
import PriceForm from './PriceForm';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      wantedCurrency: 'BTC',
      prices: [],
    }
  }

  setStartDate(e) {
    e.preventDefault();
    this.setState({
      startDate: e.target.value
    })
  }

  setEndDate(e) {
    e.preventDefault();
    this.setState({
      endDate: e.target.value
    })
  }

  submitDates(e) {
    e.preventDefault();
    const sampleRequest = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05'
    const basicEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'

    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
    .then(res => {
      console.log(res.data.bpi); // current Bitcoin price location
      var apiPrices =  res.data.bpi;
      var newPrices = [];

      var priceObject = {
        date: '',
        price: '',
      };

      for (var key in apiPrices) {
        priceObject.date = key;
        priceObject.price = apiPrices[key];
        newPrices.push(priceObject);
        priceObject = {
          date: '',
          price: '',
        };
      }
      this.setState({
        prices: newPrices,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool!</h1>
        <CurrencyForm />
        <DateForm submitDates={this.submitDates.bind(this)} setEndDate={this.setEndDate.bind(this)} setStartDate={this.setStartDate.bind(this)}/>
        <PriceForm prices={this.state.prices}/>
      </div>
    )
  }
}

export default App
