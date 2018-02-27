import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Landing from '../../components/Landing/Landing';
import SchoolCardContainer from '../../containers/SchoolCardContainer/SchoolCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/colleges" component={SchoolCardContainer} />
      </div>
    );
  }
}

export default App;
