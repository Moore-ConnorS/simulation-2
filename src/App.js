import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Router from './component/routing/Router'

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
