import React, { Component } from 'react';
import './Home.css';
import '../App.css';
import GameMap from './GameMap.js';



class Home extends Component {
  render() {
    return (
      <section className="home">
        <h1> Welcome to Paw-stin Found!</h1>
        <a onClick={() => {this.setState({selectedScreen:'<GameMap/>'})}}>Go Dogs Go!</a>
      </section>

    );
  }
}

export default Home;
