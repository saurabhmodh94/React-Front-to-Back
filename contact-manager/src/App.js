import React, { Component } from 'react';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let toggle = false;

    // return React.createElement('div', { className: 'App' }, 'Hello World!');
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" age={22} email="john.doe@gmail.com" />
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
