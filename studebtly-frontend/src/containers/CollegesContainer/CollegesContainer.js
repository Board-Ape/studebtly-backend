import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CollegesContainer.css';
import { fetchColleges } from '../../actions';
import { connect } from 'react-redux';
import CollegesCard from '../Components/CollegesCard/CollegesCard';

class CollegesContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Colleges',
      description: 'Explore the colleges below'
    };
  }

  componentDidMount() {
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
      //decide whether you want to make a header title here or component
        <Header title={title} description={description} />
        <section id='college-container'>
          {
            this.createCollegesCard()
          }
        </section>
      </section>

    );
  }
}

CollegesContainer.propTypes = {
  fetchColleges: PropTypes.func,
  colleges: PropTypes.array
};

const mapStateToProps = store => ({
  bottles: store.colleges
});

const mapDispatchToProps = dispatch => ({
  fetchColleges: () => dispatch(fetchColleges())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollegesContainer);
