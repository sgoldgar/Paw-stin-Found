import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import GameMap from './components/GameMap.js';
import Zilker from './components/Zilker.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedScreen: <Home/>
    }
  }
  render() {
    return (
      <div className="App">
          {this.state.selectedScreen}
      </div>
    );
  }
}

export default App;
