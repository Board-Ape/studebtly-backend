import React, { Component } from 'react';
import './UserPage.css';
import SideBar from '../SideBar/SideBar.js';
import InformationPage from '../InformationPage/InformationPage.js';

export default class UserPage extends Component {

  constructor() {
    super();
    this.state = {
      collegesBool: null,
      homeBool: true
    };
  }

  homeOnClick = () => {
    this.setState({
      collegesBool: false,
      homeBool: true
    });
  }

  collegesOnClick = () => {
    this.setState({
      collegesBool: true,
      homeBool: false
    });
  }

  render() {
    const { collegesBool, homeBool } = this.state;
    return (
      <section id='userpage-container'>
        <SideBar
          collegesOnClick={this.collegesOnClick}
          homeOnClick={this.homeOnClick} />
        <InformationPage
          CB={collegesBool}
          HB={homeBool} />
      </section>
    );
  }
}
