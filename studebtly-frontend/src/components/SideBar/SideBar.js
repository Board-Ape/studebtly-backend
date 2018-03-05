import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';

export default class SideBar extends Component {

  render () {
    return (
      <aside id='sidebar'>
        <section id='sidebar-bottom-section'>
          <nav id='sidebar-nav-links-container'>
            <ul id='nav-links-box'>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.homeOnClick()}>
                  HOME
                </p>
              </li>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.collegesOnClick()}>
                  COLLEGES
                </p>
              </li>
              <li className='links'>
                <p
                  className='links-text'
                  onClick={() => this.props.favoritesOnClick()}>
                  FAVORITES
                </p>
              </li>
            </ul>
          </nav>
        </section>
        <p className="welcome-greeting">WELCOME: 123 <br/>Please explore the colleges tab.</p>
      </aside>
    );
  }
}

SideBar.propTypes = {
  collegesOnClick: PropTypes.func,
  homeOnClick: PropTypes.func
};
