import React from 'react';
import Chart from './components/Chart'
import './App.css';
import { Button } from '@material-ui/core';




function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Chart />
    </div>
  );
}

export default App;
