import React, { Component } from 'react';
import './App.css';
import Vrscene from '../Vrscene/Vrscene'
import Map from '../Map/Map'

class App extends Component {

  handleEvent = event => {
   console.log(event) 
  }

  render() {
    return (
      <div>
        <Map />
        <Vrscene />
      </div>
    );
  }
}

export default App;
