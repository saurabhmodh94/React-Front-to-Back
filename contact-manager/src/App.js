import React, { Component } from 'react';
import Contact from './components/Contact/Contact';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let toggle = false;

    // return React.createElement('div', { className: 'App' }, 'Hello World!');
    return (
      <div className="App">
        <h1>App Component</h1>
        <p>{toggle ? 'true' : 'false'}</p>
        <Contact />
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
         */}
      </div>
    );
  }
}

export default App;
