import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../components/HomePage/HomePage';
import UserPage from '../../components/UserPage/UserPage';
import CollegesContainer from '../../containers/CollegesContainer/CollegesContainer';

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
