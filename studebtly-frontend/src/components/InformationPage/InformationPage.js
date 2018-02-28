import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InformationPage.css';
import CollegesPage from '../CollegesPage/CollegesPage.js';
import LandingPage from '../LandingPage/LandingPage.js';

export default class InformationPage extends Component {
  constructor() {
    super();
    this.state ={
      CB: null,
      HB: null
    };
  }

  componentDidMount() {
    this.setState({
      CB: this.props.CB,
      HB: this.props.HB
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      CB: nextProps.CB,
      HB: nextProps.HB
    });
  }

  renderPage = () => {
    if (this.state.CB === true) {
      return <CollegesPage />;
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
  HB: PropTypes.bool
};
