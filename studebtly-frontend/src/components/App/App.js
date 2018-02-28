import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import UserPage from '../UserPage/UserPage';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={ () => <NavBar /> } />
        <Route exact path="/" render={ () => <LandingPage /> } />
        <Route exact path="/userpage" render={ () => <UserPage /> } />
      </div>
    );
  }
}

export default App;
