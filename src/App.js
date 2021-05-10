import React, { Component } from 'react';

import { Header } from './components/header/Header';
import { Filter } from './components/filter/Filter';
import { Listings } from './components/listings/Listings';


import './App.css';

class App extends Component {
  constructor(){
    super(); // access to this.state

    this.state = {
    };
  }

  render(){
    return (
      <div className="App">
        <Header />
        <main id='content-area'>
          <Filter />
          <Listings />
        </main>
      </div>
    );
  }
}

export default App;
