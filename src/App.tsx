import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import DateComponent from './components/Date/Date'
import { useEffect } from 'react';


const API_KEY = process.env.REACT_APP_CRYPTO_KEY;


function App() {
  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <DateComponent />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
