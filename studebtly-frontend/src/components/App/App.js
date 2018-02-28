import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import UserPage from '../UserPage/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/userpage" component={UserPage} />
      </div>
    );
  }
}

export default App;
