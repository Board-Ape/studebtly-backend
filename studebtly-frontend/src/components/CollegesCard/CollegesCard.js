import React, { Component } from 'react';
import './CollegesCard.css';
import { addFavorite, deleteFavorite } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const CollegesCard = ({ college }) => {
//   console.log(college);
//   const { name, id, tuition_in_state, tuition_out_of_state, city, state, zip, url } = college;
//   return (
//     <div className='all-cards-container' id={id}>
//       <div className='all-cards'>
//         <h1 className='school school-name'>{name}</h1>
//         <h3 className='school location school-state'>
//           <img className='placeholder-icon' src={require('./placeholder.png')} alt="Location icon png"/> {city}, {state}. {zip}
//         </h3>
//         <h2 className='school school-in-state-tuition'>Tuition In-State: ${tuition_in_state}</h2>
//         <h2 className='school school-out-of-state-tuition'>Tuition Out-Of-State: ${tuition_out_of_state}</h2>
//         <div className='school url'>
//           <a className='location school-url' href={url} target='_blank'>Visit Their Website</a>
//         </div>
//       </div>
//     </div>
//   );
// };

export class CollegesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  filterFavorites = (index) => {
    let results = this.props.favorites.filter(favorites => favorites.name === index);
    return results;
  }

  handleFavorites = (colleges) => {
    this.setState({active: true});
    if (!this.filterFavorites(colleges.name).length) {
      return this.props.addFavorite(colleges);
    } else {
      this.setState({active: false});
      return this.props.deleteFavorite(colleges);
    }
  }

  render() {
    return (
      <div className='all-cards-container' id={this.props.college.id}>
        <div className='all-cards'>
          <span
            className={this.state.active === false ? 'favorite' : 'favorite selected'}
            onClick={() => this.handleFavorites(this.props)}>
            Favorite
          </span>
          <h1 className='school school-name'>{this.props.college.name}</h1>
          <h3 className='school location school-state'>
            <img className='placeholder-icon' src={require('./placeholder.png')} alt="Location icon png"/> {this.props.college.city}, {this.props.college.state}. {this.props.college.zip}
          </h3>
          <h2 className='school school-in-state-tuition'>Tuition In-State: ${this.props.college.tuition_in_state}</h2>
          <h2 className='school school-out-of-state-tuition'>Tuition Out-Of-State: ${this.props.college.tuition_out_of_state}</h2>
          <div className='school url'>
            <a className='location school-url' href={this.props.college.url} target='_blank'>Visit Their Website</a>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (favorites) => dispatch(addFavorite(favorites)),
    deleteFavorite: (favorites) => dispatch(deleteFavorite(favorites))
  };
};


CollegesCard.propTypes = {
  colleges: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(CollegesCard);
