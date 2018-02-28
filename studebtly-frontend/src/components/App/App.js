import React, { Component } from 'react';
import { Browser, Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import UserPage from '../UserPage/UserPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={ () => <LandingPage /> } />
          <Route exact path="/userpage" render={ () => <UserPage /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
