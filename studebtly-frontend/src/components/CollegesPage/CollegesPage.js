import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CollegesPage.css';
import { fetchColleges } from '../../actions';
import { connect } from 'react-redux';
import CollegesCard from '../../components/CollegesCard/CollegesCard';

class CollegesPage extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Colleges',
      description: 'Explore the colleges below'
    };
  }

  componentDidMount() {
    console.log('hello');
    this.props.fetchColleges();
  }

  createCollegesCard = () => {
    const { colleges } = this.props;
    return colleges.map( (college, index) =>
      <CollegesCard college={college} key={index} />
    );
  }

  render() {
    const { title, description } = this.state;
    return (
      <section id='colleges-container'>
        <section id='college-container'>
          {
            this.createCollegesCard()
          }
        </section>
      </section>

    );
  }
}

CollegesPage.propTypes = {
  fetchColleges: PropTypes.func,
  colleges: PropTypes.array
};

const mapStateToProps = store => ({
  colleges: store.colleges
});

const mapDispatchToProps = dispatch => ({
  fetchColleges: () => dispatch(fetchColleges())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollegesPage);
