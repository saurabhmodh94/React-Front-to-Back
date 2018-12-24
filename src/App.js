import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Header from './components/Header/Header';
import AddContact from './components/AddContact/AddContact';
import Test from './components/Test/Test';

import { Provider } from './context';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EditContact from './components/EditContact/EditContact';

class App extends Component {
  render() {
    // let toggle = false;

    // return React.createElement('div', { className: 'App' }, 'Hello World!');
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
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
        </Router>
      </Provider>
    );
  }
}

export default App;
