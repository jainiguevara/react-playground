import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import I18nextView from './components/I18nextView'
import MaterialUI101 from './sections/menu/MaterialUI101'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><I18nextView /></p>
        <p><MaterialUI101 /></p>
      </div>
    )
  }
}

export default App
