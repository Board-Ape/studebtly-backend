import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../components/HomePage/HomePage';
// import SchoolCardContainer from '../../containers/SchoolCardContainer/SchoolCardContainer';
// <Route exact path="/colleges" component={SchoolCardContainer} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
