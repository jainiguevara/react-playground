import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import I18nextView from './components/I18nextView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <I18nextView />

      </div>
    );
  }
}

export default App;
