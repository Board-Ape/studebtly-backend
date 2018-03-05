import React, { Component } from 'react';
import './UserPage.css';
import SideBar from '../SideBar/SideBar.js';
import InformationPage from '../InformationPage/InformationPage.js';

export default class UserPage extends Component {

  constructor() {
    super();
    this.state = {
      collegesBool: null,
      favoritesBool: null,
      homeBool: true
    };
  }

  homeOnClick = () => {
    this.setState({
      collegesBool: false,
      favoritesBool: false,
      homeBool: true
    });
  }

  collegesOnClick = () => {
    this.setState({
      collegesBool: true,
      favoritesBool: false,
      homeBool: false
    });
  }

  favoritesOnClick = () => {
    this.setState({
      collegesBool: false,
      favoritesBool: true,
      homeBool: false
    });
  }

  render() {
    const { collegesBool, favoritesBool, homeBool } = this.state;
    return (
      <section id='userpage-container'>
        <SideBar
          collegesOnClick={this.collegesOnClick}
          favoritesOnClick={this.favoritesOnClick}
          homeOnClick={this.homeOnClick}
        />
        <InformationPage
          CB={collegesBool}
          FB={favoritesBool}
          HB={homeBool} />
      </section>
    );
  }
}
