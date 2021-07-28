import React from 'react';
import './App.css';

// hooks

import { useEffect, useState } from 'react';

// components
import DateComponent from './components/Date/Date';
import Dropdown from './components/Dropdown/Dropdown';
import TextIndicator from './components/TextIndicator/TextIndicator';


const API_KEY = process.env.REACT_APP_CRYPTO_KEY;

const currencies = [
  {
    tag: "USD",
    name: "Dollar"
  }, 
  {
    tag: "EUR",
    name: "Euro"
  }, 
  {
    tag: "JPY",
    name: "Yen"
  }
]
const trends = [
  {
    tag: 60,
    name: "1h Trend"
  }, 
  {
    tag: 1440,
    name: "24h Trend"
  }, 
  {
    tag: 10080,
    name: "7d Trend"
  },
  {
    tag: 43200,
    name: "30d Trend"
  }
]


function App() {
  const [currentPrice, setCurrentPrice] = React.useState(0);
  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        setCurrentPrice(response['USD']);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <DateComponent />
      <Dropdown options={currencies} label="Currency" />
      <Dropdown options={trends} label="Trend" />
      {currentPrice && <TextIndicator title="Current Price BTC" text={currentPrice}/>}
    </div>
  );
}

export default App;
