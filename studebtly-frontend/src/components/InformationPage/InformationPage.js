import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InformationPage.css';
import CollegesPage from '../CollegesPage/CollegesPage.js';
import FavoritesPage from '../FavoritesPage/FavoritesPage.js';
import LandingPage from '../LandingPage/LandingPage.js';

export default class InformationPage extends Component {
  constructor() {
    super();
    this.state ={
      CB: null,
      FB: null,
      HB: null
    };
  }

  componentDidMount() {
    this.setState({
      CB: this.props.CB,
      FB: this.props.FB,
      HB: this.props.HB
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      CB: nextProps.CB,
      FB: nextProps.FB,
      HB: nextProps.HB
    });
  }

  renderPage = () => {
    if (this.state.CB === true) {
      return <CollegesPage />;
    }
    if (this.state.FB === true) {
      return <FavoritesPage />;
    }
    if (this.state.HB === true) {
      return <LandingPage />;
    }
  };

  render() {
    return (
      <section id='informationpage-container'>
        {
          this.renderPage()
        }
      </section>
    );
  }
}

InformationPage.propTypes = {
  CB: PropTypes.bool,
  FB: PropTypes.bool,
  HB: PropTypes.bool
};
